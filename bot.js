// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮ZIM BOT INC 2022 ®️ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮THIS SOFTWARE IS UNDER UZ COPYRIGHT
//▮
//▮REPORT ABUSE OF THIS SOFTWARE EMAIL US
//▮reinhardtuna@mail.uk
//▮WHATSAPP US : +44 7441 437150
//▮YOUTUBE CHANNELL: https://youtube.com/c/DRIPSOFC
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃THIS SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃
//┃THANKS FOR CHOOSING ZIMBOT
//┃I WROTE THIS SCRIPT BY MYSELF THIS SCRIPT IS FOR EVERYONE DONT SELL IT
//┗━━━━━━━━━━━━━━━━━━━━━━━━━
//
const fs = require('fs')
const chalk = require('chalk')

//global apis
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
//global apikeys
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //api keys from zenzi
}

//settings
global.owner = ['94767453646',''] //owner number +94767453646
global.wame = ['94767453646'] 
global.pemilik = ['94767453646'] //owner number +94767453646
global.premium = ['94767453646'] //premium number +94767453646
global.pengguna = 'Amiya' //username
global.footer = 'DRAGON BOT INC'
global.botnma = 'DRAGON BOT INC' //bot name
global.botname = 'AMIYA DRAGON BOT V2'
global.ownernma = 'Amiya' //owner name
global.packname = 'Amiya' //sticker package name
global.author = 'By Amiya Memes' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '🔵' //sp
global.dripstyping = false
global.dripsreadgroup = false
global.dripsreadall = false
global.dripsrecord = false
global.available = false
global.unavailable = true
global.limittot = 100,
global.thumb = fs.readFileSync('./Zimbot/drips.jpg')
global.reactmoji = '🇱🇰'
global.imgjoinrpg = fs.readFileSync('./image/joinrpg.jpg')
global.imgmining = fs.readFileSync('./image/mining.jpg')
global.imgdevil = fs.readFileSync('./image/img/devil.jpg')
global.imgslime = fs.readFileSync('./image/img/slime.jpg')
global.imgdemon = fs.readFileSync('./image/img/demon.jpg')
global.imggoblin = fs.readFileSync('./image/img/goblin.jpg')
global.imgdemonking = fs.readFileSync('./image/img/demonking.jpg')
global.imgbehemoth = fs.readFileSync('./image/img/behemoth.jpg')
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
global.flaming = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mess = {
    success: 'ඔන්න හරි 🔥💯\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    admin: 'ඇඩ්මින්ලට විතරයි මේක පුලුවන් ළමයෝ 🌝\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    botAdmin: 'ඇඩ්මින් දියන්කෝ මුලින් 😒\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    owner: 'Owner ට විතරයි ළමයෝ ඕක පුලුවන් 🙏\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    group: 'group වල විතරයි ඕක😒\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    grouponly: '*Group Mode Only*',
    private: 'inbox විතරයි පුලුවන්🌝\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    bot: 'මේක මට විතරයි පුලුවන්😌👍 ඔයා පාඩුවේ ඉන්න 😒\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    wait: '😘 චුට්ටක් ඉන්න බබා 🥰🙏\n\n🔥༺AMIYA༒DRAGON༻🔥\n\n♥️𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙾𝚞𝚛 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕♥️\n\nhttps://youtube.com/channel/UCVSZitR2NTFW9K9wl-luCzQ',
    endLimit: '*Your daily limit has expired the limit will be reseted every 12 hours*',
    noPetualang: '*you are not in rpg database type #joinrpg* _ur name_'
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100000 //free user limit
}
global.rpg = {
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}
global.thumb = fs.readFileSync('./Zimbot/drips.jpg')
global.visoka = { url: 'https://i.imgur.com/LbmTdhf.mp4' }
global.vid = { url: 'https://i.imgur.com/LbmTdhf.mp4' }

//—————「 Set Random Image Menu 」—————//

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.mehk = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.awog = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mohai = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mhehe = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
