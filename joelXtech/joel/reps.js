import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../../config.cjs';

const alive = async (m, sock) => {
  const prefix = config.PREFIX;
  const mode = config.MODE;
  const pushName = m.pushName || 'User';

  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';

  if (cmd === "repo") {
    await m.React('💮'); // React with a loading icon
    // Calculate uptime

    const uptimeSeconds = process.uptime();
    const days = Math.floor(uptimeSeconds / (24 * 3600));
    const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);

    
    // Get real time
    const realTime = moment().tz("Tanzania/Dodoma").format("HH:mm:ss");
    const xtime = moment.tz("Tanzania/Dodoma").format("HH:mm:ss");
    const xdate = moment.tz("Tanzania/Dodoma").format("DD/MM/YYYY");
    const time2 = moment().tz("Tanzania/Dodoma").format("HH:mm:ss");
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

    const aliveMessage = `нᴇʟʟᴏ
 *${pushName}* *${pushwish}*
╭───────────────━⊷
║ *ɴᴀᴍᴇ:* ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ
║ *ᴛᴏᴛᴀʟ sᴛᴀʀs:* 100
║ *ᴛᴏᴛᴀʟ ғᴏʀᴋs:* 300
║ *ᴡᴀᴛᴄʜᴇʀs:* 2
║ *ᴏᴘᴇɴ ɪssᴜᴇs:* 2
║ *ᴏᴡɴᴇʀ:* ᴄʀᴇᴡ sʟᴀʏᴇʀ
║ sᴛᴀʀ ᴛʜᴇɴ ғᴏʀᴋ ᴍʏ ʀᴇᴘᴏ
║ ʀᴇᴘᴏ ʟɪɴᴋ: https://shorturl.at/MV98C
╰───────────────━⊷
 > *ᴍᴀᴅᴇ ʙʏ ᴄʀᴇᴡ sʟᴀʏᴇʀ*`;

    await m.React('☄️'); // React with a success icon

    sock.sendMessage(
      m.from,
      {
        text: aliveMessage,
        contextInfo: {
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363317462952356@newsletter',
            newsletterName: "ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ",
            serverMessageId: -1,
          },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ",
            body: "sᴛᴀʀ ᴛʜᴇɴ ғᴏʀᴋ ᴍʏ ʀᴇᴘᴏ",
            thumbnailUrl: 'https://avatars.githubusercontent.com/u/162905644?v=4', // Add thumbnail URL if required
            sourceUrl: 'https://github.com/Demon-Slayer2/DEMONS-SLAYER-XMD', // Add source URL if necessary
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      },
      { quoted: m }
    );
  }
};

export default alive;
  
