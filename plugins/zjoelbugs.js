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

  if (cmd === "bugmenu") {
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

    const aliveMessage = `нєℓℓσ
 *${pushName}* ${pushwish}
╭───────────────━⊷
║ ᴊᴏᴇʟ-xᴍᴅ ʙᴜɢ  ᴍᴇɴᴜ
╰───────────────━⊷

- ∂σ¢вυg
- ℓσ¢¢яαѕн
- αмσυηтвυg <αмσυηт>
- ρмвυg <ηυмвєя>
- ∂єℓαувυg <ηυмвєя>
- тяσℓℓувυg <ηυмвєя>
- ∂σ¢υвυg <ηυмвєя>
- υηℓιмιтє∂вυg <ηυмвєя>
- вσмвυg <ηυмвєя>
- ℓαgвυg <ηυмвєя>
- g¢вυg <gяσυρℓιηк>
- ∂єℓαуg¢вυg <gяσυρℓιηк>
- тяσℓℓуg¢вυg <gяσυρℓιηк>
- ℓαввυg <gяσυρℓιηк>
- вσмg¢вυg <gяσυρℓιηк>
- υηℓιмιтє∂g¢вυg <gяσυρℓιηк>
- ∂σ¢υg¢вυg <gяσυρℓιηк>
- *ɴᴏᴛᴇ:ʙᴜɢ ᴄᴏᴍᴍᴀɴᴅs ғᴏʀ ᴘʀᴇᴍɪᴜᴍ ᴜsᴇʀs ᴏɴʟʏ*`;

    await m.React('☄️'); // React with a success icon

    sock.sendMessage(
      m.from,
      {
        text: aliveMessage,
        contextInfo: {
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363317462952356@newsletter',
            newsletterName: "ᴊᴏᴇʟ xᴅ ʙᴏᴛ ᴠ ⁷",
            serverMessageId: -1,
          },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "ᴊᴏᴇʟ xᴅ ʙᴏᴛ ᴠ ⁷",
            body: "ρяєηιυм υѕєя ¢σммαη∂ѕ",
            thumbnailUrl: 'https://avatars.githubusercontent.com/u/200203225?v=4', // Add thumbnail URL if required
            sourceUrl: 'https://whatsapp.com/channel/0029Vak2PevK0IBh2pKJPp2K', // Add source URL if necessary
            mediaType: 1,
            renderLargerThumbnail: false,
          },
        },
      },
      { quoted: m }
    );
  }
};

export default alive;
