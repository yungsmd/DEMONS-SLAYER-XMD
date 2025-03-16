import config from "../../config.cjs";
import moment from "moment-timezone";

const autoBio = async (m, sock) => {
  const prefix = config.PREFIX;

  if (!m.body.startsWith(`${prefix}autobio`)) return;

  if (!config.AUTO_BIO) {
    return await sock.sendMessage(m.from, { text: "*Auto Bio is disabled in the config.*" }, { quoted: m });
  }

  await sock.sendMessage(m.from, { text: "*Auto Bio activated! Your bio will update every second.*" }, { quoted: m });

  setInterval(async () => {
    const uptimeSeconds = process.uptime();
    const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);
    const formattedUptime = `${hours}h ${minutes}m ${seconds}s`;

    const realTime = moment().tz("Africa/Nairobi").format("HH:mm:ss");

    const newBio = `*${formattedUptime}|${realTime}*`;

    try {
      await sock.updateProfileStatus(newBio);
      console.log(`*Bio updated: ${newBio}*`);
    } catch (error) {
      console.error("❌ Failed to update bio:", error);
    }
  }, 1000); // Update every 1 second
};

export default autoBio;
