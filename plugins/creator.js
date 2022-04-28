const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "[Owner]• Iyann No Limit",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Iyann No Limit\nitem1.TEL;waid=6285742344873:6285742344873\nitem1.X-ABLabel:📍 Creator\nitem2.EMAIL;type=INTERNET:iyannkastara@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://github.com/Lixxzy\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Indonesia\nitem5.X-ABLabel:───────[ NIGTH ]───────\nEND:VCARD"
  }, {
    "displayName": "[Partners]• Neha Cantikk",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Neha Cantikk\nitem1.TEL;waid=0:0\nitem1.X-ABLabel:📍 Partners\nitem2.EMAIL;type=INTERNET:neha@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://github.com/Lixxzy/\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;⛩️ Wibu;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:📞 Official Partners\nitem5.X-ABLabel:───────[ NIGTH ]───────\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler
