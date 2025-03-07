import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../config.cjs';

// Get total memory and free memory in bytes
const totalMemoryBytes = os.totalmem();
const freeMemoryBytes = os.freemem();

// Define unit conversions
const byteToKB = 1 / 1024;
const byteToMB = byteToKB / 1024;
const byteToGB = byteToMB / 1024;

// Function to format bytes to a human-readable format
function formatBytes(bytes) {
  if (bytes >= Math.pow(1024, 3)) {
    return (bytes * byteToGB).toFixed(2) + ' GB';
  } else if (bytes >= Math.pow(1024, 2)) {
    return (bytes * byteToMB).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes * byteToKB).toFixed(2) + ' KB';
  } else {
    return bytes.toFixed(2) + ' bytes';
  }
}

// Bot Process Time
const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds

// Uptime
const uptimeMessage = `*I am alive now since ${day}d ${hours}h ${minutes}m ${seconds}s*`;
const runMessage = `*☀️ ${day} Day*\n*🕐 ${hours} Hour*\n*⏰ ${minutes} Minutes*\n*⏱️ ${seconds} Seconds*\n`;

const xtime = moment.tz("Asia/Colombo").format("HH:mm:ss");
const xdate = moment.tz("Asia/Colombo").format("DD/MM/YYYY");
const time2 = moment().tz("Asia/Colombo").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

const test = async (m, Matrix) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const mode = config.MODE === 'public' ? 'public' : 'private';
  const pref = config.PREFIX;

  const validCommands = ['list', 'help', 'menu'];

  if (validCommands.includes(cmd)) {
    const str = `╭━━━〔 *ᴅᴇᴍᴏɴ-sʟᴀʏᴇʀ* 〕━━━┈⊷
┃★╭──────────────
┃★│ Owner : *ᴛᴇᴀᴍ sʟᴀʏᴇʀ*
┃★│ User : *${m.pushName}*
┃★│ Baileys : *ᴍᴜʟᴛʏ-ᴅᴇᴠɪᴄᴇ*
┃★│ Type : *ɴᴏᴅᴇ.ᴊs*
┃★│ Mode : *${mode}*
┃★│ Platform : *${os.platform()}*
┃★│ Prefix : [${prefix}]
┃★│ Version : *1.0.0*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷ 
> *ʜᴇʏ ${m.pushName} ${pushwish}*
╭━❮ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 ❯━╮
┃◈ ${prefix}𝙰𝚃𝚃𝙿
┃◈ ${prefix}𝙰𝚃𝚃𝙿2
┃◈ ${prefix}𝙰𝚃𝚃𝙿3
┃◈ ${prefix}𝙴𝙱𝙸𝙽𝙰𝚁𝚈
┃◈ ${prefix}𝙳𝙱𝙸𝙽𝙰𝚁𝚈
┃◈ ${prefix}𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
┃◈ ${prefix}𝙼𝙿3
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙰𝙸 ❯━╮
┃◈ ${prefix}𝙰𝚒
┃◈ ${prefix}𝙱𝚞𝚐
┃◈ ${prefix}𝚁𝚎𝚙𝚘𝚛𝚝
┃◈ ${prefix}𝙶𝚙𝚝
┃◈ ${prefix}𝙳𝚊𝚕𝚕𝚎
┃◈ ${prefix}𝚁𝚎𝚖𝚒𝚗𝚒
┃◈ ${prefix}𝙶𝚎𝚖𝚒𝚗𝚒
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝚃𝙾𝙾𝙻 ❯━╮
┃◈ ${prefix}𝙲𝚊𝚕𝚌𝚞𝚕𝚊𝚝𝚘𝚛
┃◈ ${prefix}𝚃𝚎𝚖𝚙𝚖𝚊𝚒𝚕
┃◈ ${prefix}𝙲𝚑𝚎𝚌𝚔𝚖𝚊𝚒𝚕
┃◈ ${prefix}𝚃𝚛𝚝
┃◈ ${prefix}𝚃𝚝𝚜
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙶𝚁𝙾𝚄𝙿 ❯━╮
┃◈ ${prefix}𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
┃◈ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚐𝚌
┃◈ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎
┃◈ ${prefix}𝚂𝚎𝚝𝚍𝚎𝚜𝚌
┃◈ ${prefix}𝙶𝚛𝚘𝚞𝚙
┃◈ ${prefix}𝙶𝚌𝚜𝚎𝚝𝚝𝚒𝚗𝚐
┃◈ ${prefix}𝚆𝚎𝚕𝚌𝚘𝚖𝚎
┃◈ ${prefix}𝙰𝚍𝚍
┃◈ ${prefix}𝙺𝚒𝚌𝚔
┃◈ ${prefix}𝙷𝚒𝚍𝚎𝚃𝚊𝚐
┃◈ ${prefix}𝚃𝚊𝚐𝚊𝚕𝚕
┃◈ ${prefix}𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔
┃◈ ${prefix}𝙰𝚗𝚝𝚒𝚃𝚘𝚡𝚒𝚌
┃◈ ${prefix}𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┃◈ ${prefix}𝙳𝚎𝚖𝚘𝚝𝚎
┃◈ ${prefix}𝙶𝚎𝚝𝚋𝚒𝚘
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ❯━╮
┃◈ ${prefix}𝙰𝚙𝚔
┃◈ ${prefix}𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┃◈ ${prefix}𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┃◈ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕
┃◈ ${prefix}𝙶𝚒𝚝𝚌𝚕𝚘𝚗𝚎
┃◈ ${prefix}𝙶𝚍𝚛𝚒𝚟𝚎
┃◈ ${prefix}𝙸𝚗𝚜𝚝𝚊
┃◈ ${prefix}𝚈𝚝𝚖𝚙3
┃◈ ${prefix}𝚈𝚝𝚖𝚙4
┃◈ ${prefix}𝙿𝚕𝚊𝚢
┃◈ ${prefix}𝚂𝚘𝚗𝚐
┃◈ ${prefix}𝚅𝚒𝚍𝚎𝚘
┃◈ ${prefix}𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
┃◈ ${prefix}𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
┃◈ ${prefix}𝚃𝚒𝚔𝚝𝚘𝚔
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝚂𝙴𝙰𝚁𝙲𝙷 ❯━╮
┃◈ ${prefix}𝙿𝚕𝚊𝚢
┃◈ ${prefix}𝚈𝚝𝚜
┃◈ ${prefix}𝙸𝚖𝚍𝚋
┃◈ ${prefix}𝙶𝚘𝚘𝚐𝚕𝚎
┃◈ ${prefix}𝙶𝚒𝚖𝚊𝚐𝚎
┃◈ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
┃◈ ${prefix}𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛
┃◈ ${prefix}𝚆𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊
┃◈ ${prefix}𝚈𝚝𝚜𝚎𝚊𝚛𝚌𝚑
┃◈ ${prefix}𝚁𝚒𝚗𝚐𝚝𝚘𝚗𝚎
┃◈ ${prefix}𝙻𝚢𝚛𝚒𝚌𝚜
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙼𝙰𝙸𝙽 ❯━╮
┃◈ ${prefix}𝙿𝚒𝚗𝚐
┃◈ ${prefix}𝙰𝚕𝚒𝚟𝚎
┃◈ ${prefix}𝙾𝚠𝚗𝚎𝚛
┃◈ ${prefix}𝙼𝚎𝚗𝚞
┃◈ ${prefix}𝙸𝚗𝚏𝚘𝚋𝚘𝚝
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙾𝚆𝙽𝙴𝚁 ❯━╮
┃◈ ${prefix}𝙹𝚘𝚒𝚗
┃◈ ${prefix}𝙻𝚎𝚊𝚟𝚎
┃◈ ${prefix}𝙱𝚕𝚘𝚌𝚔
┃◈ ${prefix}𝚄𝚗𝚋𝚕𝚘𝚌𝚔
┃◈ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚋𝚘𝚝
┃◈ ${prefix}𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕
┃◈ ${prefix}𝚂𝚎𝚝𝚜𝚝𝚊𝚝𝚞𝚜
┃◈ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎𝚋𝚘𝚝
┃◈ ${prefix}𝙰𝚞𝚝𝚘𝚃𝚢𝚙𝚒𝚗𝚐
┃◈ ${prefix}𝙰𝚕𝚠𝚊𝚢𝚜𝙾𝚗𝚕𝚒𝚗𝚎
┃◈ ${prefix}𝙰𝚞𝚝𝚘𝚁𝚎𝚊𝚍
┃◈ ${prefix}𝚊𝚞𝚝𝚘𝚜𝚟𝚒𝚎𝚠
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝚂𝚃𝙰𝙻𝙺 ❯━╮
┃◈ ${prefix}𝚃𝚛𝚞𝚎𝚌𝚊𝚕𝚕𝚎𝚛
┃◈ ${prefix}𝙸𝚗𝚜𝚝𝚊𝚂𝚝𝚊𝚕𝚔
┃◈ ${prefix}𝙶𝚒𝚝𝚑𝚞𝚋𝚂𝚝𝚊𝚕𝚔
╰━━━━━━━━━━━━━━━⪼`;

    await Matrix.sendMessage(m.from, {
      image: fs.readFileSync('./media/slayer.jpg'),
      caption: str,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363299029326322@newsletter',
          newsletterName: "ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ",
          serverMessageId: 143
        }
      }
    }, {
      quoted: m
    });

    // Send audio after sending the menu
    await Matrix.sendMessage(m.from, {
      audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/menunew.m4a' },
      mimetype: 'audio/mp4',
      ptt: true
    }, { quoted: m });
  }
};

export default test;
