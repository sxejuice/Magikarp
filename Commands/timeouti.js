module.exports = {
    name: 'timeouti',
    description: "assign instinct timeout",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Instinct');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'TIME OUT');

            let membertarget = message.guild.members.cache.get(target.id);
            
            if(!args[1]){}
            membertarget.roles.remove(mainRole.id);
            membertarget.roles.add(muteRole.id);
            message.channel.send(`<@${membertarget.user.id}> has been placed on TIME OUT`);
        } else {
            message.channel.send('Please Tag A Memeber!')
        }




    }
}