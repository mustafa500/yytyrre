const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("485219301641420802")
setInterval(function() {
channel.send(`mustafa2004 mustafa mustafa mustafa mustafa`);
}, 30)
})

client.login(process.env.BOT_TOKEN);