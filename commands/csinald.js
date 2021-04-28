const Discord = require("discord.js")

module.exports={
    name: 'csinald',
    description: 'xd leszarom',
    execute(message, args){
        const channel=message.guild.channels.cache.find(c=>c.name==='milegyen');
        if(!channel) return message.channel.send('Nincs hova kiírnom basszameg...');

        let messageArgs= args.join(' ');
        const embed= new Discord.MessageEmbed()
            .setColor('FADF2E')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
            .setDescription(messageArgs);

        channel.send(embed).then((msg)=>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}