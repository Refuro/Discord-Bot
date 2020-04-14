const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
//const server = new Server();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

	if (command === 'help'){
        message.channel.send('Currently this bot has little functionality and is in testing phase.\n\nCurrent Commands: !hello(returns a greeting).\n!time(returns time).\n\nFuture commands: !(stock ticker name). For example, !MSFT would return \'Microsoft:$178.72\'');
        console.log('!help was called');
        }
    if (command === 'hello'){
        message.channel.send('Hey there @'+String(message.author));
        console.log('!hello was called');
        }
    if (command === 'time'){
        const now = new Date();
        message.channel.send(String(now.getHours()) + ":" + String(now.getMinutes()) + ":" + String(now.getSeconds()));
        console.log('!time was called');
        delete now;
        }
    if (command === 'channel'){
        message.channel.send(String(message.author)+ ' is in the ' +String(message.channel)+' channel in '+ String(message.guild.name)+' server.');
        console.log('!channel was called');
    }
    if (command === 'test'){
        message.reply(`Vacant for now.`);
        console.log('!test');
    }
    if (command === 'kick'){
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }
        const kicker = message.author;
        const userX = message.mentions.users.first();
        var reason;
        message.reply('Provide a reason or type skip');
        if (message.author === kicker && message.content.startsWith('no')){
            message.channel.send(':thumbsup');
        }
        else{
            reason = "Fuck";
        }

    }
});
client.login(token);
