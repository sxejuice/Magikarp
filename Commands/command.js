module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#8FBC8F')
        .setTitle('**__Rules__**')
        .setDescription('These are the Server Rules')
        .addFields(
            {name:'**__Rule 1__**', value: "We strive to create a fun, welcoming atmosphere on this server, so please be courteous to your fellow trainers. If an issue arises, please don't hesitate to contact one of the <@&735560747534385163> and they will help mediate."},
            {name: '\u200B', value: '\u200B'},
            {name:'**__Rule 2__**', value: "Please keep all discussions related to Pokemon Go. Any off-topic conversations related to sports, religion, or politics in particular will be removed by the <@&735560747534385163>."},
            {name: '\u200B', value: '\u200B'},
            {name:'**__Rule 3__**', value: "Any mention of spoofing or acts of spoofing will result in an automatic ban"},
            {name: '\u200B', value: '\u200B'},
            {name:'**__Rule 4__**', value: "Enjoy yourselves! This server was created to increase your enjoyment of the game. Please know, however, that if a rule is broken, the following actions will occur:"},
            {name: '\u200B', value: '\u200B'},
            {name:'**__1st Offense__**', value: 'you will be assigned a <@&758921690775552032> role and will have the opportunity to chat with the <@&735560747534385163> in <#816910519730176030> about what happened', inline: true },
            {name: '\u200B', value: '\u200B'},
            {name:'**__2nd Offense__**', value: 'you will be kicked from the server for a period of time decided upon by the <@&735560747534385163>', inline: true },
            {name: '\u200B', value: '\u200B'},
            {name:'**__3rd Offense__**', value: 'you will be banned from the server entirely', inline: true },
            {name: '\u200B', value: '\u200B'},
            )
        .setFooter('make sure you agree to all the rules')
        .setImage('https://pre00.deviantart.net/a563/th/pre/f/2016/117/e/3/magikarp_by_proricmatic-da0hvik.png');
       
       
        message.channel.send(newEmbed);
    }
}
