let handler = async (m, { conn }) => { 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let name = await conn.getName(m.sender)
      
var ayg = global.db.data.users[m.sender]
var beb = global.db.data.users[global.db.data.users[m.sender].pasangan]

if(ayg.pasangan == ""){
return await conn.sendButton(m.chat, `πππππΏ *${name}* ππ πππππ ππΌππππΌ\n\nπΏπππ πππ ππΌππ πΌ ππΌπππππ`, wm, null, [
['π  π π‘ π¨ βοΈ', '/menu']], fkontak, m)
}
      
if (typeof beb == "undefined"){
await conn.sendButton(m.chat, `*${name}* π ππππππ πΏπππππππππΌπππππ πΎππ *@${global.db.data.users[m.sender].pasangan.split('@')[0]}*\n\nππππ ππππΌππππππππ ππΌπ πππΏππΏ`, `*β© Wa.me/${global.db.data.users[m.sender].pasangan.split('@')[0]}*\n` + wm, null, [ //`β© Wa.me/${global.db.data.users[m.sender].pasangan.split('@')[0]}\n\n`
['π  π π‘ π¨ βοΈ', '/menu']], fkontak, m, { contextInfo: { mentionedJid: [global.db.data.users[m.sender].pasangan]
}})                                                 
ayg.pasangan = ""
}

if (m.sender == beb.pasangan){
await conn.sendButton(m.chat, `*${name}* π ππππππ πΏπππππππππΌπππππ πΎππ *@${global.db.data.users[m.sender].pasangan.split('@')[0]}*\n\nππππ ππππΌππππππππ ππΌπ πππΏππΏ`, `*β© Wa.me/${global.db.data.users[m.sender].pasangan.split('@')[0]}*\n` + wm, null, [
['π  π π‘ π¨ βοΈ', '/menu']], fkontak, m, { contextInfo: { mentionedJid: [global.db.data.users[m.sender].pasangan]
}})
ayg.pasangan = ""
beb.pasangan = ""
}else {
await conn.sendButton(m.chat, `πππππΏ *${name}* ππ πππππ ππΌππππΌ\n\nπΏπππ πππ ππΌππ πΌ ππΌπππππ`, wm, null, [
['π  π π‘ π¨ βοΈ', '/menu']], fkontak, m)
}}

handler.command = /^(cortar|romper|finish)$/i
handler.group = true

export default handler
