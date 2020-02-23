const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if (message.content === '!help'){
        message.channel.send('Currently this bot has little functionality and is in testing phase.\n\nCurrent Commands: !hello(returns a greeting).\n!time(returns time).\n\nFuture commands: !(stock ticker name). For example, !MSFT would return \'Microsoft:$178.72\'');
        console.log('!help was called');
        }
    if (message.content === '!hello'){
        message.channel.send('Hey there @'+String(message.author));
        console.log('!hello was called');
        }
    if (message.content === '!time'){
        const now = new Date();
        message.channel.send(String(now.getHours()) + ":" + String(now.getMinutes()) + ":" + String(now.getSeconds()));
        console.log('!time was called');
        }
    if (message.content === '!channel'){
        message.channel.send(String(message.channel));
        console.log('!channel was called');
    }
});
client.login(token);
