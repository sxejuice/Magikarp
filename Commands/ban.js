module.exports = {
    name: 'ban',
    description: "this is a ban command",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send(`Awww, No More Fun For You <@${membertarget.user.id}>`);

        }else{
            message.channel.send('please choose a member');
        }
    }
}