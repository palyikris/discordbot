const { Client, Intents, MessageAttachment } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports={
    name: 'hotestsex',
    description: "This command sends the hotestsex",
    execute( message, args){
        let reps = Math.floor(Math.random() * 2);
        const attachment = new MessageAttachment('./hotestsex'+reps+'.jpg');
        message.channel.send(`${message.author}, watch out cuz ur ovaries might explode..\n`, attachment);
        }
    }
