const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const prefix = '$';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Magikarp is Online');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'rules') {
        client.commands.get('command').execute(message, args, Discord,)
    } if (command === 'purge') {
        client.commands.get('purge').execute(message, args);
    } if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } if (command === 'timeoutv') {
        client.commands.get('timeoutv').execute(message, args);
    } if (command === 'timeoutm') {
        client.commands.get('timeoutm').execute(message, args);
    } if (command === 'timeouti') {
        client.commands.get('timeouti').execute(message, args);
    } if (command === 'remove') {
        client.commands.get('remove').execute(message, args);
    } if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command == 'invite') {
        client.commands.get('invite').execute(message, args);
    } else if (command == 'juice') {
        message.channel.send('<@!321839699104759809> is the best')
    } else if (command == 'roles') {
        client.commands.get('roles').execute(message, args, Discord, client);
    }
});


client.login('NjU4NzE4Nzg3NzI1NTU3NzYw.XgD1rQ.25Fkh2zAhFm_zM613h1O1wYm3cw')