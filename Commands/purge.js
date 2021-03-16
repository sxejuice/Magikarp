module.exports = {
    name: 'purge',
    description: "Purge Messages",
   async execute(message, args) {

        if(!args[0]) return message.reply("Please enter the amount of messages to purge");
        if(isNaN(args[0])) return message.reply("Please enter a real number!");

        if(args[0] > 100) return message.reply("You cannot Purge more than 100 Messages!");
        if(args[0]< 1) return message.reply("You must delete at lease one message");
    
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}