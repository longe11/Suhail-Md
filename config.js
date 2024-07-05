const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_32_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg5LFxuICAgICAgICA2NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDQzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMixcbiAgICAgICAgNjQsXG4gICAgICAgIDczLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEwLFxuICAgICAgICA0MixcbiAgICAgICAgMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDgyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjU1LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgODcsXG4gICAgICAgIDk5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU3LFxuICAgICAgICA1NixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgODYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg3LFxuICAgICAgICA2NixcbiAgICAgICAgMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI4LFxuICAgICAgICA4LFxuICAgICAgICA3MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDUxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDMzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImJZRkZKeXZQSjJvV1orZUw5UjdMbEQ0QlozNnI3eHRQbURhTVVVL1dpNk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldGTEQza0E0U09LYVI3MmdhU2h3dkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDVmYWYxMTUtYzcyZC00ZGZiLTkwYTgtMWIyNDQ5OWVmODEwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1LFxuICAgICAgMTAwLFxuICAgICAgMjM0LFxuICAgICAgNjIsXG4gICAgICA2NyxcbiAgICAgIDI3LFxuICAgICAgMjE3LFxuICAgICAgMjYsXG4gICAgICAxMzYsXG4gICAgICAxNDQsXG4gICAgICAxNCxcbiAgICAgIDEwMSxcbiAgICAgIDI1LFxuICAgICAgMjE1LFxuICAgICAgNTMsXG4gICAgICAxMzYsXG4gICAgICAyMyxcbiAgICAgIDcxLFxuICAgICAgMTkyLFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI5LFxuICAgICAgMzUsXG4gICAgICAyMjgsXG4gICAgICA3OSxcbiAgICAgIDQ3LFxuICAgICAgMjIzLFxuICAgICAgMTQwLFxuICAgICAgMTI3LFxuICAgICAgMTc5LFxuICAgICAgMTA4LFxuICAgICAgMTM3LFxuICAgICAgOTYsXG4gICAgICAxOTYsXG4gICAgICAxMDEsXG4gICAgICA0MyxcbiAgICAgIDc5LFxuICAgICAgODksXG4gICAgICAxMzYsXG4gICAgICAxNDUsXG4gICAgICA5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJORDkxTUdIN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2ODk3OTI2Mzo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI3MjA0MDgwMDEzNTYzOjkzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tMNmxOa05FS1g3bnJRR0dBNGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaUR5TWtranFIdVBMTVZXNFJXaVhRNVNzWjd2T0haNktPTnIxRFNxZEFFND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTVnI3T2tkeDk2bW9iU01aRFQ3bm1iNUNiNVRuUVlRMloxOWx0QThqNVc2NnhpN0NGbldoKzdrcFNZZ0JJc0Y0MHc5ZVBDSHBVZ1RKV2FuS3lzWDRCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4dUYyaEpBSzQyeUhhSC9uWVB3M0ltVm5peGlBeEZnWnRGVExDTjBHVmxYTWZZZ3VLWmdXMzhOVm45ODZ4dmsrZlRCS1IwZTdtNUVHcDI4SjJrL0Zodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY4OTc5MjYzOjkzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTcxOTQ2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTCtxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMK3EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaT3NhbklBaWJVV3B6OEcwNVpVZjBhWFdpQ21PVmxJZHV1UFdtbXR0a1lvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM2NzY2NTA3ODYsXCJjdXJyZW50SW5kZXhcIjoxMCxcImRldmljZUluZGV4ZXNcIjpbMTAsMCw5LDhdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTk0MjYyMTUwMlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
