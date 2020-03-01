const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
//const server = new Server();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

	if (message.content === `${prefix}help`){
        message.channel.send('Currently this bot has little functionality and is in testing phase.\n\nCurrent Commands: !hello(returns a greeting).\n!time(returns time).\n\nFuture commands: !(stock ticker name). For example, !MSFT would return \'Microsoft:$178.72\'');
        console.log('!help was called');
        }
    if (message.content === `${prefix}hello`){
        message.channel.send('Hey there @'+String(message.author));
        console.log('!hello was called');
        }
    if (message.content === `${prefix}time`){
        const now = new Date();
        message.channel.send(String(now.getHours()) + ":" + String(now.getMinutes()) + ":" + String(now.getSeconds()));
        console.log('!time was called');
        delete now;
        }
    if (message.content === `${prefix}channel`){
        message.channel.send(String(message.author)+ ' is in the ' +String(message.channel)+' channel in '+ String(message.guild.name)+' server.');
        console.log('!channel was called');
    }
    if (message.content === `${prefix}test`){
        message.reply(`Vacant for now.`);
        console.log('!test');
    }
});
client.login(token);
