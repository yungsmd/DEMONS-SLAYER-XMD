import axios from "axios";
import config from "../config.cjs";

const facebook = async (m, Matrix) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(" ")[0].toLowerCase() : "";
  const query = m.body.slice(prefix.length + cmd.length).trim();

  if (!["fb", "facebook"].includes(cmd)) return;

  if (!query || !query.startsWith("http")) {
    return Matrix.sendMessage(m.from, { text: "❌ *Usage:* `.fb <Facebook Video URL>`" }, { quoted: m });
  }

  try {
    await Matrix.sendMessage(m.from, { react: { text: "⏳", key: m.key } });

    const { data } = await axios.get(`https://api.davidcyriltech.my.id/facebook2?url=${query}`);

    if (!data.status || !data.video || !data.video.downloads) {
      return Matrix.sendMessage(m.from, { text: "⚠️ *Failed to fetch Facebook video. Please try again.*" }, { quoted: m });
    }

    const { title, downloads } = data.video;
    const bestQuality = downloads.find(v => v.quality === "HD") || downloads.find(v => v.quality === "SD");

    if (!bestQuality) {
      return Matrix.sendMessage(m.from, { text: "⚠️ *No downloadable video found.*" }, { quoted: m });
    }

    const caption = `*ғᴀᴄᴇʙᴏᴏᴋ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*\n\n🎬 *Title:* ${title}\n📥 *Quality:* ${bestQuality.quality}\n\n> *ᴍᴀᴅᴇ ʙʏ ᴄʀᴇᴡ sʟᴀʏᴇʀ*`;

    await Matrix.sendMessage(m.from, {
      video: { url: bestQuality.downloadUrl },
      mimetype: "video/mp4",
      caption,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363299029326322@newsletter",
          newsletterName: "ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ",
          serverMessageId: 144,
        },
      },
    }, { quoted: m });

    await Matrix.sendMessage(m.from, { react: { text: "✅", key: m.key } });

  } catch (error) {
    console.error("Facebook Downloader Error:", error);
    Matrix.sendMessage(m.from, { text: "❌ *An error occurred while processing your request. Please try again later.*" }, { quoted: m });
  }
};

export default facebook;
