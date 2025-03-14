import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import axios from 'axios';

const searchRepo = async (m, Matrix) => {
  const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

  const validCommands = ['repo1', 'sc1', 'script'];

  if (validCommands.includes(cmd)) {
    const repoUrl = `https://api.github.com/repos/Demon-Slayer2/DEMONS-SLAYER-XMD`;
    
    await handleRepoCommand(m, Matrix, repoUrl);
  }
};

const handleRepoCommand = async (m, Matrix, repoUrl) => {
  try {
    const response = await axios.get(repoUrl);
    const repoData = response.data;

    const {
      full_name,
      name,
      forks_count,
      stargazers_count,
      created_at,
      updated_at,
      owner,
    } = repoData;

    const messageText = `*_𝙳𝙴𝙼𝙾𝙽 𝚂𝙻𝙰𝚈𝙴𝚁 𝚁𝙴𝙿𝙾 𝙸𝙽𝙵𝙾_*\n
╭━━〔 *𝚁𝚎𝚙𝚘 𝙸𝚗𝚏𝚘* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃ *ɴᴀᴍᴇ:* ${name}
┃◈┃ *sᴛᴀʀᴅ:* ${stargazers_count}
┃◈┃ *ғᴏʀᴋs:* ${forks_count}
┃◈┃ *ᴄʀᴇᴀᴛᴇʀ ᴀᴛ:* ${new Date(created_at).toLocaleDateString()}
┃◈┃ *ʟᴀsᴛ ᴜᴘᴅᴀᴛᴇғ:* ${new Date(updated_at).toLocaleDateString()}
┃◈┃ *ᴏᴡɴᴇʀ:* *_ᴄʀᴇᴡ sʟᴀʏᴇʀ_*
┃◈└───────────┈⊷
╰──────────────
    `;

    const repoMessage = generateWAMessageFromContent(m.from, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: messageText,
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: '*ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ*',
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              ...(await prepareWAMessageMedia({
                image: {
                  url: 'https://files.catbox.moe/13kbx5.jpg',
                },
              }, { upload: Matrix.waUploadToServer })),
              title: '',
              gifPlayback: true,
              subtitle: '',
              hasMediaAttachment: false,
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: 'ᴄʜᴀᴛ ᴅᴇᴠ',
                    url: 'https://wa.me/+254790375710?text=',
                  }),
                },
                    {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                    display_text: "ᴛᴏ ᴍᴇɴᴜ",
                    id: ".menu",
                  }),
                },
                 {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                    display_text: "sᴘᴇᴇᴅ",
                    id: ".ping",
                  }),
                },
                {
                  name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: 'ʀᴇᴘᴏ',
                    url: 'https://github.com/Demon-Slayer2/DEMONS-SLAYER-XMD/',
                  }),
                },
                {
                  name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: 'ғᴏʟʟᴏᴡ',
                    url: 'https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x',
                  }),
                },
              ],
            }),
            contextInfo: {
              mentionedJid: [m.sender],
              forwardingScore: 9999,
              isForwarded: true,
            },
          }),
        },
      },
    }, {});

    await Matrix.relayMessage(repoMessage.key.remoteJid, repoMessage.message, {
      messageId: repoMessage.key.id,
    });
    await m.React('✅');
  } catch (error) {
    console.error('Error processing your request:', error);
    m.reply('Error processing your request.');
    await m.React('❌');
  }
};

export default searchRepo;
