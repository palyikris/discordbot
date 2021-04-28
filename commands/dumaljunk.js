const { TextChannel, MessageMentions } = require("discord.js");

module.exports={
    name:'dumaljunk',
    description:"this is a dumalas command!",
    execute(message, args){
        if(message.member.roles.cache.has('831087807232737300')||message.member.roles.cache.has('473509811162578946')){
            message.channel.send("Máris főnök, mi legyen?");
        }
        else{
        message.channel.send('Miről szeretnél beszélgetni?');
        message.channel.send('Lol amúgy leszarlak, húzz anyádba');
        }
    }
}