module.exports = {
    name: 'remove',
    description: "remove timeout",
    execute(message, args){
        const target = message.mentions.users.first();
        if(Target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'newbie');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'TIME OUT');
        
            let memberTarget= message.guild.members.cache.get(Target.id);

            memberTarget.roles.add(mainRole.id);
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`<@${membertarget.user.id}> has been removed from TIME OUT`);
        } else{
            message.channel.send('Cant Find That Memeber!')
        }



        
    }
}