//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/6bad8cd45cdd92c46da58.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "237656468700";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "false";
global.read_status_from = process.env.READ_STATUS_FROM || "false";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0szT0RXN1lPbitwbVI3bUZhVmRhbDgzZjUxZjFkWnhGSXNDY2VuVjUzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDVHcC9XM1dzQ2k3QkZVVm0xaTRsWEhscEN6aCtNM3hCMEMydGxoMHVIaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTkk1MTJqU1B6cXMyVFYwaktEZzV2c3ErZGlodVc0UlpjWGdiU3dhL0ZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTT1JZNm1naEhHR2lEK2ZoZFhISzB4cVVwMHhmU0RLek1HQzNMUTZiSURFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNJdmpocm5iQ2s5R2RuOEZpL29lM3F1Yk1wSFFadXExSXNGMWE5OHVXRzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlM2VmhqUEFUbHU5S0Z0R1RnNVRXK25OdFptMUUyMDBnMTROY3o0ZHpFa0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUlXd09mUzBXSHY3c21hb0NJVnZRampRNHcyOThTS3NNa1FaRWlhMVcxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXZacFZ1QWFrbmgwaE9CUytDRGdXM2RvalNFcWx2clBFaitjTksrcFJXdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjU2QU13VjYwenhFQjgyNFJOSGtrSzRNeWJ4VEUyVk5xQ0dtV2pRVm1DOHdXbjB2YVJIZ1J1NFNuNUZ4S1B4QVRYckV6dWM5YXhrLzBxMmtTblA3V0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE4LCJhZHZTZWNyZXRLZXkiOiJBVmNQMXpMWnJVTlhBMTN6cGorZWNCUWNQZjNON0ZnaUt3eVNrQjY0bGpzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5V2lBNFpUOVRqdXdqeUlTQkQ3TDRBIiwicGhvbmVJZCI6Ijk4MmViMjljLWRmNDItNDU2MC05NGI2LTQxNjEwYjJhNTM1YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHZVY4ckIzT0hkaFJYam05eGVJVlFwdWNDZUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDh5dGlQUERTU0ZYZElnR21Kcmw2SERxVVpFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IloyMlRGVFhUIiwibWUiOnsiaWQiOiIyMzc2NTY0Njg3MDA6ODdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09PZjZmMEdFUG4ybHJRR0dDOGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik5Xa2RnZXo0SUZLRmdOTVVsbEJiVnBsMzUvQ2VULzl4TzQyTVNNZ1B4RFk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IndEVWRzdmpFbnhVMmFhTmY1WHgvcnRjRG9PcjR5VGRLWFROV1VZQ1h3UU9pQVhYTmVyaDJlNkRIZUJmZzNUYlgxbjRKYldyVmtzWXRwWFNES2cyNkRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZblVOU1FUSUlrRWVhaExtMUlRQW52alBCZHQ0NDNGeUFvV2VkMkVxWENBR1RBR2hSV1hKMDlDc1p3S1gwbnp2UEVFWEpsS0NVemdpS1hZZnMvL1lDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY1NjQ2ODcwMDo4N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUVnBIWUhzK0NCU2hZRFRGSlpRVzFhWmQrZnduay8vY1R1TmpFaklEOFEyIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMDQwMzI2fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "∆",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "𝐹𝐴𝑃𝑈𝑇𝐴",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝙍𝙀𝘽𝙀𝘾𝘾𝘼™",
  ownername: process.env.OWNER_NAME || "𝐹𝐴𝑃𝑈𝑇𝐴 𝑉𝑈𝐸𝑅𝑂𝐸𝑅𝑈𝐾𝑂",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
