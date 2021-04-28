const { Client, Intents, MessageAttachment } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports={
    name: 'hotsex',
    description: "This command sends hotsex",
    execute( message, args){
        let reps = Math.floor(Math.random() * 10);
        const attachment = new MessageAttachment('./mate'+reps+'.jpg');
        message.channel.send(`${message.author}, itt egy kis hotsex\n`, attachment);
        }
    }
