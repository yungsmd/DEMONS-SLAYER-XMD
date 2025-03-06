
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

  if (cmd === "start") {
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
║ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ xᴍᴅ
║ *ηαмє:* *ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ*
║ *ρяєƒιχ:*  *${prefix}*
║ *мσ∂є:*  *${mode}*
║ *тιмє:*  *${realTime}*
║ *σωηєя:*  *ᴄʀᴇᴡ sʟᴀʏᴇʀ*
╰───────────────━⊷

---

*General Commands*  
These are typical commands you might use in a bot, chat, or script system:

*Say Commands:*
- *Say*: This command probably triggers a bot to say or display text, often using text-to-speech.
- *Bass*: Likely modifies the sound to boost bass frequencies, often used for_music-related outputs.
- *Blown*: Likely makes the sound louder or distorted, like “blowing” out the volume.
- *Deep*: Changes the sound to a deeper tone, like making a voice sound lower and more resonant.
- *Earrape*: A command to distort and increase the sound to an unbearable, loud level, often used humorously.
- *Fast*: Speeds up the speech or sound, making it sound faster.
- *Fat*: May add a deeper, more exaggerated tone to the sound or voice.
- *Nightcore*: Increases the speed and pitch of the audio, making it sound like a nightcore remix (often high-pitched and fast).
- *Reverse*: Reverses the playback of the sound or message, making it play backward.
- *Robot*: Alters the voice or text to sound robotic, simulating a mechanical voice.
- *Slow*: Slows down the speech or sound, making it sound slower.
- *Smooth*: Applies a smoother or more relaxed tone to the sound.
- *Tupai*: This could refer to a playful or fast-paced sound, possibly mimicking a fast-paced or quirky style.

---

*Converter Commands*  
Commands related to converting or encoding/decoding files or messages:

- *αттρ, αттρ2, αттρ3*: These could be variations of the *.attr* file or attributes, typically used for_ file conversions (like API or app related).
- *ебιηαяу*: Likely refers to converting text or data to binary or performing encoding/decoding operations.
- *∂вιηαяу*: Similar to the previous one, likely refers to a conversion or encoding in a binary format.
- *ємσʝιмιχ*: Possibly a command that converts text or messages into emojis or mixes emojis with_ text.
- *мρ3*: Converts audio or files into the MP3 format.

---

*AI Commands*  
Commands related to artificial intelligence or bots:

- *αι*: Likely refers to invoking an AI response or interaction.
- *вυg*: This could be related to generating a response, output, or bug-related function_.
- *яєρσят*: Could be a command that generates a report or feedback.
- *gρт*: Likely refers to a *GPT*-based command, probably for_ generating responses via GPT *like GPT_3
- *∂αℓℓє*: Could be a command related to generating a call to the AI or producing a response.
- *яємιηι, gємιηι*: Likely commands related to generating specific AI-driven interactions or outputs.

---

*Tool Commands*  
These commands are related to tools or utilities:

- *¢αℓ¢υℓαтσя*: Likely a calculator tool for_performing mathematical operations.
- *тємρмαιℓ*: Could be used to send a temporary email or check email configurations.
- *¢нє¢кмαιℓ*: Likely checks or verifies email addresses.
- *тят*: This could refer to a tool for_status checks or server checks, like a diagnostic tool.
- *ттѕ*: Could be related to *TTS* (Text-to-Speech) systems, converting text into spoken audio.

---

*Group Commands*  
These commands manage groups or interactions in a group setting (like in a chat or social platform):

- *ℓιηкgяσυρ*: Links a user to a specific group or channel.
- *ѕєтρρg¢*: Sets up permissions or settings for_a group.
- *ѕєтηαмє*: Sets the name of the group.
- *ѕєт∂єѕ¢*: Sets the description of the group.
- *gяσυρ*: General command for_managing a group.
- *g¢ѕєттιηg*: Configures group settings.
- *ωєℓ¢σмє*: Welcomes a new_user to the group.
- *α∂∂*: Adds a new_ member to the group.
- *кι¢к*: Kicks a member from the group.
- *нι∂єтαg*: Hides a member’s tag or identity within the group.
- *тαgαℓℓ*: Tags all members in the group at once.
- *αηтιℓιηк*: Prevents the sharing of external links in the group.
- *αηтιтσχι¢*: Blocks specific actions or functions, like blocking certain interactions.
- *ρяσмσтє*: Promotes a user to a higher rank or role in the group.
- *∂ємσтє*: Demotes a user to a lower rank.
- *gєтвισ*: Likely retrieves group stats or information.

---

*Download Commands*  
These commands download different types of content:

- *αρк*: Downloads APK files, typically for_android apps.
- *ƒα¢євσσк*: Downloads content from Facebook (like media or data).
- *мє∂ιαƒιяє*: Downloads from a media platform (possibly like Facebook or Instagram).
- *ριητєяєѕт∂ℓ*: Downloads from Pinterest.
- *gιт¢ℓονє*: Downloads from GitHub or a related repository.
- *g∂яινє*: Downloads from Google Drive.
- *ιηѕтα*: Downloads from Instagram.
- *утмρ3*: Downloads MP3 audio files.
- *утмρ4*: Downloads MP4 video files.
- *ρℓαу*: Likely downloads a song or plays it.
- *ѕονg*: Downloads a song.
- *νι∂єο*: Downloads a video.

---

*Premium Commands*  
These are advanced commands, typically available to users with_ premium access:

- *вυgмєηυ*: Likely related to advanced bug-fixing or generation tools.
- *∂σ¢вυg*: Debugging or troubleshooting commands.
- *ℓσ¢¢яαѕн*: Logs or caches data.
- *αмσυηтвυg*: Manage premium content or tools.
- *ρмвυg*: Possibly a command to boost or improve functionality.
- *∂єℓαувυg*: Deletes or resolves bugs.
- *тяσℓℓувυg*: Rolls back previous changes or bug fixes.
- *σ¢υвυg*: Debugging-related functions.
- *υηℓιмιтє∂вυg*: Removes limitations on debugging or error handling.
- *вσмвυg*: Advanced error-tracking or resolution.
- *ℓαgвυg*: Logs errors or group activity.

---

*Search Commands*  
Commands for_searching content from various sources:

- *ρℓαу*: Search for_ songs/music.
- *ут*: Search YouTube.
- *ιм∂в*: Search IMDb (movie, TV shows, actors, etc.).
- *gσσgℓє*: Search on Google.
- *gιмαgє*: Search for_images (like using Google Images).
- *ριηтєяєѕт*: Search Pinterest.
- *ωαℓℓραρєя*: Possibly search for_wallpapers or images for_ a device’s background.

---

*Main Commands*  
These commands are related to basic bot or system actions:

- *ριηg*: Typically checks if_the bot or system is online and responsive.
- *αℓινє*: Indicates whether the system or bot is currently online/active.
- *σωηєя*: Likely gives information about the system or bot owner.
- *мєηυ*: Displays the main menu or options.
- *ιηƒσвσт*: Provides information about the bot/system.
---

*Owner Commands*  
Commands for_the system or bot owner:

- *ʝσιη*: Allows a new_ user to join the system or chat.
- *νν, νν2, νν3*: Variations for_ different _version_commands, perhaps for_ testing or updating.
- *ℓєавє*: Command to remove or disconnect from a group.
- *вℓσ¢к*: Block a user from interacting with_ the system.
- *υηвℓσ¢к*: Unblock a previously blocked user.
- *ѕєтρρвσт*: Set up specific bot configurations or status.
- *αηтι¢αℓℓ*: Prevents certain actions or commands from being executed.
- *ѕєтѕтαтυѕ*`;

    await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('owner.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '12063297279563825@newsletter',
                  newsletterName: "ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
};

export default alive;

//coded by lord joel
