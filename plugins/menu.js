const { DateTime } = require('luxon');
const fs = require('fs');

module.exports = async (context) => {
    const { client, m, totalCommands, mode, botname, prefix } = context;

    try {
        const categories = [
            { name: 'AI', emoji: '」' },
            { name: 'General', emoji: '」' },
            { name: 'Media', emoji: '」' },
            { name: 'Search', emoji: '」' },
            { name: 'Editting', emoji: '」' },
            { name: 'Groups', emoji: '」' },
            { name: 'Fun', emoji: '」' },
            { name: 'Owner', emoji: '」' },
            { name: 'Coding', emoji: '」' },
            { name: 'Stalk', emoji: '」' }
        ];

        // Inspirational quotes array
        const quotes = [
            "Dream big, work hard.",
            "Stay humble, hustle hard.",
            "Believe in yourself.",
            "Success is earned, not given.",
            "Actions speak louder than words.",
            "The best is yet to come.",
            "Keep pushing forward.",
            "Do more than just exist.",
            "Progress, not perfection.",
            "Stay positive, work hard.",
            "Be the change you seek.",
            "Never stop learning.",
            "Chase your dreams.",
            "Be your own hero.",
            "Life is what you make of it.",
            "Do it with passion or not at all.",
            "You are stronger than you think.",
            "Create your own path.",
            "Make today count.",
            "Embrace the journey.",
            "The best way out is always through.",
            "Strive for progress, not perfection.",
            "Don't wish for it, work for it.",
            "Live, laugh, love.",
            "Keep going, you're getting there.",
            "Don’t stop until you’re proud.",
            "Success is a journey, not a destination.",
            "Take the risk or lose the chance.",
            "It’s never too late.",
            "Believe you can and you're halfway there.",
            "Small steps lead to big changes.",
            "Happiness depends on ourselves.",
            "Take chances, make mistakes.",
            "Be a voice, not an echo.",
            "The sky is the limit.",
            "You miss 100% of the shots you don’t take.",
            "Start where you are, use what you have.",
            "The future belongs to those who believe.",
            "Don’t count the days, make the days count.",
            "Success is not the key to happiness. Happiness is the key to success."
        ];

        // Get greeting based on the time of day
        const getGreeting = () => {
            const currentHour = DateTime.now().setZone('Africa/Nairobi').hour;
            if (currentHour >= 5 && currentHour < 12) return 'Hello,,Good morning 🌅';
            if (currentHour >= 12 && currentHour < 18) return 'Good afternoon ☀️';
            if (currentHour >= 18 && currentHour < 22) return 'Good evening 🌆';
            return 'Good night and have wonderful dreams 😴';
        };

        // Get current time in Nairobi
        const getCurrentTimeInNairobi = () => {
            return DateTime.now().setZone('Africa/Nairobi').toLocaleString(DateTime.TIME_SIMPLE);
        };

        // Function to get random quote
        const getRandomQuote = () => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            return quotes[randomIndex];
        };

        let menuText = `> *Hello, ${getGreeting()}, ${m.pushName}*\n\n`;

        // Add random quote
        menuText += `> *Inspiration*: *${getRandomQuote()}*  \n\n`;

        // General information about the bot and user
        menuText += `*╭━━━  ⟮  ${botname} ⟯━━━━━━*\n`;
        menuText += `*┃╭──────────────*\n`; 
        menuText += `*┃│ Commander ${m.pushName}*\n`; 
        menuText += `*┃│ Cmd's: ${totalCommands}*\n`;
        menuText += `*┃│ Time ${getCurrentTimeInNairobi()}*\n`;
        menuText += `*┃│ Prefix: ${prefix}*\n`;
        menuText += `*┃│ Mode: ${mode}*\n`;
        menuText += '*┃│ Owner: Bruce Bera*\n';
        menuText += '*┃╰──────────────*\n';
        menuText += '*╰━━━━━━━━━━━━━━━━━━*\n';

        // Function to convert text to fancy uppercase font
        const toFancyUppercaseFont = (text) => {
            const fonts = {
                'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌',
                'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙'
            };
            return text.split('').map(char => fonts[char] || char).join('');
        };

        // Function to convert text to fancy lowercase font for lowercase letters as well
        const toFancyLowercaseFont = (text) => {
            const fonts = {
                "a": "ᴀ", "b": "ʙ", "c": "ᴄ", "d": "ᴅ", "e": "ᴇ", "f": "ꜰ", "g": "ɢ", "h": "ʜ", "i": "ɪ", "j": "ᴊ", "k": "ᴋ", "l": "ʟ", "m": "ᴍ", 
                "n": "ɴ", "o": "ᴏ", "p": "ᴘ", "q": "ϙ", "r": "ʀ", "s": "ꜱ", "t": "ᴛ", "u": "ᴜ", "v": "ᴠ", "w": "ᴡ", "x": "x", "y": "ʏ", "z": "ᴢ"
            };
            return text.split('').map(char => fonts[char.toUpperCase()] || fonts[char] || char).join('');
        };

        let commandCounter = 1;

        // Loop through categories and commands
        for (const category of categories) {
            const commandFiles = fs.readdirSync(`./Cmds/${category.name}`).filter((file) => file.endsWith('.js'));
            const fancyCategory = toFancyUppercaseFont(category.name.toUpperCase());

            menuText += ` ╭───── ${fancyCategory} ${category.emoji}───┈⊷ \n`;
            for (const file of commandFiles) {
                const commandName = file.replace('.js', '');
                const fancyCommandName = toFancyLowercaseFont(commandName);
                menuText += ` *││◦ ${commandCounter}.* ${fancyCommandName}\n`;
                commandCounter++;
            }

            menuText += ' ╰──────────────┈⊷ \n';
        }

        // Send the generated menu to the user
        try {
            await client.sendMessage(m.chat, {
                text: menuText,
                contextInfo: {
                    mentionedJid: [m.sender], // Mention the sender
                    externalAdReply: {
                        title: "𝐁𝐄𝐑𝐀 𝐓𝐄𝐂𝐇",
                        body: "𝐁𝐫𝐮𝐜𝐞 𝐁𝐞𝐫𝐚 ",
                        thumbnailUrl: "https://i.ibb.co/4jBhn13/Socialthumb.jpg",
                        sourceUrl: "https://whatsapp.com/channel/0029VajJoCoLI8YePbpsnE3q",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            });
        } catch (error) {
            console.error("Error sending message:", error);
            m.reply('An error occurred while sending the menu.');
        }

    } catch (error) {
        console.error("Error:", error);
        m.reply('An unexpected error occurred while generating the menu.' + error);
    }
};
