module.exports = {
    name: 'roles',
    description: "this is a reaction roles command",
   async execute(message, args, Discord, Client){
        const channel = '818723823654010930'
        const mysticTeamRole = message.guild.roles.cache.find(role => role.name === "Mystic");
        const valorTeamRole = message.guild.roles.cache.find(role => role.name === "Valor");
        const instinctTeamRole = message.guild.roles.cache.find(role => role.name === "Instinct");

        const mysticTeamEmoji = ':snowflake:';
        const valorTeamEmoji = ':fire:';
        const instinctTeamEmoji = ':zap:';
        
        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Please Select a Team')
        .setDescription('Please Select Your Current Team\n\n')
            + `${mysticTeamEmoji} For Mystic\n`
            + `${valorTeamEmoji} For Valor\n`
            + `${instinctTeamEmoji} For Instinct`
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(mysticTeamEmoji);
        messageEmbed.react(valorTeamEmoji);
        messageEmbed.react(instinctTeamEmoji);
    }
}