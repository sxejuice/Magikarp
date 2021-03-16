module.exports = {
    name: 'kick',
    description: "this is a kick command",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send(`Tah-Tah for now <@${membertarget.user.id}>`);

        }else{
            message.channel.send('please choose a member');
        }
    }
}