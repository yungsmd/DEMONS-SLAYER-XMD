// ᴀᴍ ᴊᴏᴇʟᴊᴀᴍᴇsᴛᴇᴄʜ

import axios from "axios";

import config from "../../config.cjs";

const wachannel = async (m, sock) => {

  const prefix = config.PREFIX;

  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(" ")[0].toLowerCase() : "";

  const validCommands = ["wachannel", "channelstalk", "whatsappchannel"];

  if (validCommands.includes(cmd)) {

    const channelUrl = m.body.split(" ")[1];

    if (!channelUrl) {

      return await sock.sendMessage(

        m.from,

        { text: "Please provide a WhatsApp channel URL. Example: *!wachannel https://whatsapp.com/channel/0029Vak2PevK0IBh2pKJPp2K*" },

        { quoted: m }

      );

    }

    const apiUrl = `https://api.giftedtech.my.id/api/stalk/wachannel?apikey=gifted&url=${encodeURIComponent(channelUrl)}`;

    try {

      await m.React("⏳"); // React with a loading icon

      const response = await axios.get(apiUrl);

      const data = response.data;

      if (data.status === 200 && data.success) {

        const img = data.result.img;

        const title = data.result.title;

        const followers = data.result.followers;

        const description = data.result.description;

        const responseText = `🖥️ *WhatsApp Channel Info*\n\n📸 Channel Image: ![Channel Image](${img})\n\n📌 Title: *${title}*\n👥 Followers: *${followers}*\n📝 Description: *${description}*\n\n💡 _Tap and hold on the image to copy the link._\n\n😍 ʙʏ ʟᴏʀᴅ ᴊᴏᴇʟ😍`;

        await sock.sendMessage(

          m.from,

          {

            text: responseText,

            contextInfo: {

              isForwarded: false,

              forwardedNewsletterMessageInfo: {

                newsletterJid: "120363317462952356@newsletter",

                newsletterName: "ℓσя∂ ʝσєℓ",

                serverMessageId: -1,

              },

              forwardingScore: 999, // Score to indicate it has been forwarded

              externalAdReply: {

                title: "ᴊᴏᴇʟ xᴅ ᴠ⁷",

                body: "ωα ¢нαηηєℓ ѕтαℓкєя",

                thumbnailUrl: "", // Add thumbnail URL if required

                sourceUrl: "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l", // Source URL

                mediaType: 1,

                renderLargerThumbnail: false,

              },

            },

          },

          { quoted: m }

        );

      } else {

        throw new Error("Invalid response from the API");

      }

    } catch (error) {

      console.error("Error:", error); // Log the full error for debugging

      await sock.sendMessage(

        m.from,

        {

          text: `❌ Error fetching channel info: ${error.message}`,

          contextInfo: {

            externalAdReply: {

              title: "ᴊᴏᴇʟ xᴅ ᴠ⁷",

              body: "ωнαтѕαρρ ¢нαηηєℓ ѕтαℓкєя",

              sourceUrl: "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l",

              mediaType: 1,

            },

          },

        },

        { quoted: m }

      );

    }

  }

};

export default wachannel;

// υѕє уσυя ¢σ∂є ∂σηт  ¢σρу мιηє мσтнєяƒυ¢кєя
