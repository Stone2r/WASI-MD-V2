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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUJ6RnVlZnpiNWtYMG5PYnZTZ1ZhOXhvamZBOXk0RmZ4VXZpVDZDTlVtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZXbkptSFczU1J3MnNza0VxS0orOWRpVi9OUjVscnVZUmVwekxOZ0V3UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSXJtM2MwWkRPeWFrWFRjYnVWWXl0N0NadWRUZTA3ejdvbkdCVDBabkU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQeVozcTlvc2d3Vm54aGoxY2Y5eUpxUVpMYko3eGNzY0ZUdlhsSVVJcWwwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlMRUp6aDUxY3R5VFJ2Vmo5MkZUOVNSN2lxeDIvcFFwd0hobFdSQkp3VU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlAwMGp5VmJoUDE0aFRZLzA3eWhNckpMcVJsNVgwRUZzdFh2SEwxakh4RHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJWSXo0c2krYjNMTE5HWDk5TnZGYU51RTlNQXNZUHROUlNSUWFPZWhtTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1p6NnhDbXFybkxUMEI1V2dsZEhGeWs0N21VK3NEcTIyaDhqSzVySVFGQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii81emhnZ09yei9uR0dvTFpJNVZnNEZ4UVRwZTNzWkZJZUtHaTNSUnpQWTRJTS96WE1VWW00SC9jNFdwZ0hRZHJXU0U0eDdReGV4NTNYQ3BqN2pRN0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTgsImFkdlNlY3JldEtleSI6IlRFdEd3SWNqSWp1b2h5bzBld2pGUWc1NnZLS2FjekJJN3pvZXU5MWdGUWc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik4wY2pmcmlWUlVhQm1kSDMtZURZR3ciLCJwaG9uZUlkIjoiMjUxNjc4Y2YtYTdiMC00NDIzLWI4ZmQtZmRkMDBmZmIwY2UwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImUreVplWFFtVEpMSkFReXBnRVlCMWhwNE55az0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNOWFlVjE2MC9VR3U0UEI3UERwcUErMytVOVk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMTVTWlBWVDYiLCJtZSI6eyJpZCI6IjIzNzY1NjQ2ODcwMDo5MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT09mNmYwR0VLZVhtYlFHR0RRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTldrZGdlejRJRktGZ05NVWxsQmJWcGwzNS9DZVQvOXhPNDJNU01nUHhEWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaStKZXZoNEhEQTcxME83dnE2cHZoMzNYSXRHOG8wQ3Y5N1J1Y2VuT3QyVU45WHd2SEJobkVVMSt6Q1ZwaXllaUoreFRrTHFPdE9hVEJoOStzRGdTREE9PSIsImRldmljZVNpZ25hdHVyZSI6IlY3TjRTaWgwZUR2YUZmbGY0Ri8wdGhDcWllTFlndjRjZmZBS0hTTm9ZTFZuM0JLK2hYU0wwSnhXOHZGeW5KNUs3d2orOUd1ZWZvWFVPV3NLbnNPQURRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjU2NDY4NzAwOjkyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRWcEhZSHMrQ0JTaFlEVEZKWlFXMWFaZCtmd25rLy9jVHVOakVqSUQ4UTIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAwNzcyMzd9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "∆",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝑅𝐼𝑆𝐸 𝑈𝑃..𝙏𝙀𝙉 𝙉𝙊 𝙃𝘼𝙏𝙀!!",
  author: process.env.PACK_AUTHER || "𝙁𝙍𝙄𝙀𝙍𝙀𝙉",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝙍𝙀𝘽𝙀𝘾𝘾𝘼™",
  ownername: process.env.OWNER_NAME || "𝘿𝙚𝙢𝙚𝙩𝙚𝙧 𝘿. 𝘽𝙚𝙡𝙡𝙖𝙩𝙧𝙞𝙭",
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
