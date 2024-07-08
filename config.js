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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349068979263";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/b65d67ef5e58372834915.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_27_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNixcbiAgICAgICAgMjUwLFxuICAgICAgICA3NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDU2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDMxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDY0LFxuICAgICAgICA2NixcbiAgICAgICAgMjM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgOTEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODEsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NixcbiAgICAgICAgMjExLFxuICAgICAgICA4NixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE4LFxuICAgICAgICA2NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxODcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDksXG4gICAgICAgIDEzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDgsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDkzLFxuICAgICAgICA0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgzLFxuICAgICAgICA1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MixcbiAgICAgICAgMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVnZzc1BxaXV2TFlvNUptVjk2V1g4aElHSEE2Z3UyemxmUFRPYnIwU0k5az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYklaNlRvVFVUV2VwdmJrUXhEOVJzZ1wiLFxuICBcInBob25lSWRcIjogXCIyNzBlZTU3Yy0wMDU1LTQ1YzAtODA1NC0yOWRlNzZiNDUyYWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQwLFxuICAgICAgMTQ2LFxuICAgICAgNzAsXG4gICAgICAxMDYsXG4gICAgICA4MSxcbiAgICAgIDEzNSxcbiAgICAgIDI1NCxcbiAgICAgIDE0MSxcbiAgICAgIDE1MSxcbiAgICAgIDcsXG4gICAgICAxNzEsXG4gICAgICAxLFxuICAgICAgMTE4LFxuICAgICAgMTc0LFxuICAgICAgMjA4LFxuICAgICAgMTMzLFxuICAgICAgMjUxLFxuICAgICAgMTM0LFxuICAgICAgMTcxLFxuICAgICAgMTMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgMTgxLFxuICAgICAgMTE2LFxuICAgICAgMzcsXG4gICAgICAyNTMsXG4gICAgICAxODUsXG4gICAgICAxNTQsXG4gICAgICAxOTQsXG4gICAgICAxMDcsXG4gICAgICAxNzcsXG4gICAgICA2NSxcbiAgICAgIDksXG4gICAgICAyNDMsXG4gICAgICAyMDQsXG4gICAgICAxNjksXG4gICAgICAyMzAsXG4gICAgICAxNjEsXG4gICAgICAyMzIsXG4gICAgICA4MCxcbiAgICAgIDE4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJONTNFM1BESFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxMzk0MDk2MDoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkxvdWRcIixcbiAgICBcImxpZFwiOiBcIjE1MDg4NjgzMTY3NzU5OToyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJWHh1WTRERVBIaHJyUUdHQTRnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInpBTE1JLzR2WFlvOCtTSEl6eXVhV29Td0NicVcyQ0c0MTBkdVRjU3ZXU1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibzdNWDlsMzUvQlo4Q3dobVM1N05kcWl0eGI2VHBMOWdyZFkwN2NoMEU0a0lPZXd2WEVGbWw0Vjh6dXdnVHVwWE40WHRzbWFnL0tvNm5Sc2h6U2M4Z0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUEVIMlJLbXhCSUhmOHlyMFFRenRuQVY2aWpWbHltL2h1djl3Y3RuMExpNUlSR0FxeU5uZDVYbmZPa0Jmc3hwbFlkL3dXZGJoMHJwNStydU5QNnowREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxMzk0MDk2MDoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDMwODQwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQUs3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBSzcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsTFp0ckpncUVNc3RaZ0pJSHpxSUgrSkE1MFA0d09ySGR2R0R0bWQ2b1JnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgzNTYxNDg1MyxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzEsMCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTQ2NzE0NTM2ODNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Hintman-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
