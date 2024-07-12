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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_52_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE1LFxuICAgICAgICA4OCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTgsXG4gICAgICAgIDMzLFxuICAgICAgICA5MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAwLFxuICAgICAgICA0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA2OCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE1LFxuICAgICAgICA4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1LFxuICAgICAgICA3NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNixcbiAgICAgICAgMjMyLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA3OCxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTksXG4gICAgICAgIDYxLFxuICAgICAgICA5NixcbiAgICAgICAgMTA4LFxuICAgICAgICAzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgMjM5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgwLFxuICAgICAgICA5NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVWtkQUtRRm92R2F4OXRDcUNYZVp5N2JON1J4NGppQm1vcDJPUExrellEZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX191aW1mNHlUQVctMWRpanZFM0hJUVwiLFxuICBcInBob25lSWRcIjogXCIyZDA4M2ZlYS0xYmY3LTRiMzMtOTQxNi1kOTQ0YmQ3MDdiODNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMxLFxuICAgICAgNjEsXG4gICAgICA2NCxcbiAgICAgIDExMixcbiAgICAgIDI1MCxcbiAgICAgIDE4MCxcbiAgICAgIDk5LFxuICAgICAgMjQ1LFxuICAgICAgMTI3LFxuICAgICAgMTkzLFxuICAgICAgMjMwLFxuICAgICAgMTI0LFxuICAgICAgMjA1LFxuICAgICAgMzcsXG4gICAgICAxMjQsXG4gICAgICAxODYsXG4gICAgICAzMixcbiAgICAgIDExMCxcbiAgICAgIDE3OSxcbiAgICAgIDEyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgMjI1LFxuICAgICAgNzgsXG4gICAgICAxNzUsXG4gICAgICAxMTQsXG4gICAgICAyMyxcbiAgICAgIDMxLFxuICAgICAgMTYxLFxuICAgICAgMTA5LFxuICAgICAgMjUsXG4gICAgICA4LFxuICAgICAgMjEyLFxuICAgICAgNDgsXG4gICAgICAyMjMsXG4gICAgICAyNDIsXG4gICAgICAyMzIsXG4gICAgICAyNTAsXG4gICAgICAxOTAsXG4gICAgICAyNDAsXG4gICAgICAxNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRDZUWlNNUktcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjg5NzkyNjM6OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyNzIwNDA4MDAxMzU2Mzo5NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLTDZsTmtORU55K3hiUUdHQThnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImlEeU1ra2pxSHVQTE1WVzRSV2lYUTVTc1o3dk9IWjZLT05yMURTcWRBRTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSThvZmVyWmYrYUtTbEdJWGZPQnR4UCtCUUdteWtKMUZVbGtZZzhJa2lrUHNNZHMrWUt1RHltMjJMbkVTTjkwNDJTZThnQjJ4RzkxNk9NT3N2Mk5nQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNUFLT1YrcS9GMy9iekVOK3NYa2NocStsc3p1NXdtZm1vWEpjMUJkaWlOQlBLMTBoMjZOMDRjSlpwWjU2QmR0OGMxdUZwL3ZtNHFKQUFtaE5pWkZFRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA2ODk3OTI2Mzo5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDgwMzE2NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBRmtBQUwrclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFGa0FBTCtyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWVE5NDM1Mnk0RjlTKytGSVFJTG1iUm83ZDU2M2krT2FHUG9Mc0ZGWnlBND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNjc2NjUwNzg2LFwiY3VycmVudEluZGV4XCI6MTAsXCJkZXZpY2VJbmRleGVzXCI6WzgsMCw4OSw5XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk5NTM0OTEyNDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Hintman-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Hintman",


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
