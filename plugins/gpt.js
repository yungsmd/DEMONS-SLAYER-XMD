import { promises as fs } from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../../config.cjs';


const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const chatHistoryFile = path.resolve(__dirname, '../mistral_history.json');

const mistralSystemPrompt = "you are a good assistant.";

async function readChatHistoryFromFile() {
    try {
        const data = await fs.readFile(chatHistoryFile, "utf-8");
        return JSON.parse(data);
    } catch (err) {
        return {};
    }
}

async function writeChatHistoryToFile(chatHistory) {
    try {
        await fs.writeFile(chatHistoryFile, JSON.stringify(chatHistory, null, 2));
    } catch (err) {
        console.error('Error writing chat history to file:', err);
    }
}

async function updateChatHistory(chatHistory, sender, message) {
    if (!chatHistory[sender]) {
        chatHistory[sender] = [];
    }
    chatHistory[sender].push(message);
    if (chatHistory[sender].length > 20) {
        chatHistory[sender].shift();
    }
    await writeChatHistoryToFile(chatHistory);
}

async function deleteChatHistory(chatHistory, userId) {
    delete chatHistory[userId];
    await writeChatHistoryToFile(chatHistory);
}

const mistral = async (m, Matrix) => {
    const chatHistory = await readChatHistoryFromFile();
    const text = m.body.toLowerCase();

    if (text === "/forget") {
        await deleteChatHistory(chatHistory, m.sender);
        await Matrix.sendMessage(m.from, { text: 'Conversation deleted successfully' }, { quoted: m });
        return;
    }

    const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const prompt = m.body.slice(prefix.length + cmd.length).trim();

    const validCommands = ['deepseek', 'gpt', 'mistral'];
      // Check user input
        if (!q) return reply("*Please provide a query for ChatGPT.*\n\nExample:\n.gpt What is AI?");

        const text = encodeURIComponent(q); // Encode user query

        const url = `https://api.siputzx.my.id/api/ai/deepseek-r1?content=${text}`;

        console.log('Requesting URL:', url); // Debug log

        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'application/json',
            }
        });

        console.log('Full API Response:', response.data); // Debug log

        if (!response.data || response.data.status !== 200 || !response.data.success) {
            return reply("❌ No valid response from the GPT API. Please try again later.");
        }

        const gptResponse = response.data.result.prompt; // Updated structure

        if (!gptResponse) {
            return reply("❌ The API returned an unexpected format. Please try again later.");
        }

        const formattedInfo = `${gptResponse}`;

        await reply(formattedInfo); // Sending only text response

    } catch (error) {
        console.error("Error in GPT command:", error);

        if (error.response) {
            console.log("Error Response Data:", error.response.data);
        } else {
            console.log("Error Details:", error.message);
        }

        const errorMessage = `
❌ An error occurred while processing the GPT command.
🛠 *Error Details*:
${error.message}

Please report this issue or try again later.
        `.trim();
        return reply(errorMessage);
    }
});
