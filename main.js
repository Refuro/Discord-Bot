const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	console.log(message.content);
});
client.login('NjgwOTkyMjQ1MDEyNDk2Mzkw.XlH-XA.gQuGHClNXJQsziA6Z4Qnmkhf6V0');
