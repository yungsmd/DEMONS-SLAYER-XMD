import fs from 'fs';
import config from '../config.cjs';

const alive = async (m, Matrix) => {
  const uptimeSeconds = process.uptime();
  const days = Math.floor(uptimeSeconds / (3600 * 24));
  const hours = Math.floor((uptimeSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeSeconds % 60);
  const timeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

  if (!['alive', 'uptime', 'runtime'].includes(cmd)) return;

  const str = `*sᴛᴀᴛᴜs: 𝘈𝘤𝘵𝘪𝘷𝘦*\n*ᴜᴘᴛɪᴍᴇ: ${timeString}*`;

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
};

export default alive;
