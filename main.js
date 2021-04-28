const Discord = require('discord.js');

const client = new Discord.Client();

const prefix='..';

const fs =require('fs');

client.commands=new Discord.Collection();

const commandFiles= fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command=require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', ()=> {
    console.log('Mazsi is online');
});
client.on('message', async message => {
    if (!message.guild) return;
  
    if (message.content === '..join') {

      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('szevasztok.mp3');

dispatcher.on('start', () => {
	console.log('szevasztok.mp3 is now playing!');
});

dispatcher.on('finish', () => {
	console.log('szevasztok.mp3 has finished playing!');
});

dispatcher.on('error', console.error);
        message.channel.send('Szevasztok Buzik!');
      } else {
        message.reply('Jó ügyes vagy. Lépj be egy voicechannel-be u fuckin dumbo...');
      }
    }
  });
  client.on('message', async message => {
    if (!message.guild) return;
  
    if (message.content === '..leave') {

      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.leave();
        message.channel.send('Viszlát Buzik!');
      } else {
        message.reply('Jó ügyes vagy. Lépj be egy voicechannel-be u fuckin dumbo...');
      }
    }
  });
  client.on("message", message => {
    let channel = message.channel;
    if(!message.content.startsWith(`..getinv`)) return;
    channel.createInvite({unique: true})
    .then(invite => {
    message.reply("Nesze te szerencsétlen: https://discord.gg/" + invite.code)
    })
    });
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return ;
    
    const args= message.content.slice(prefix.length).split(/ +/);
    const command= args.shift().toLowerCase();
    if (command==='abel'){
        client.commands.get('abel').execute(message, args);
    } else if(command==='uonline?'){
        client.commands.get('online').execute(message, args);
    } else if(command==='kick'){
        client.commands.get('kick').execute(message, args);
    }  else if(command==="lele"){
        client.commands.get('lele').execute(message, args);
    }  else if (command==='irritálsz'){
        client.commands.get('irritalsz').execute(message, args);
    } else if(command==='discon'){
        client.commands.get('leave').execute(message, args);
    } else if(command==='dm'){
        client.commands.get('dm').execute(message, args);
    } else if(command==='dumaljunk'){
        client.commands.get('dumaljunk').execute(message, args);
    } else if(command==='getmyid'){
        client.commands.get('getmyid').execute(message, args);
    } else if(command==='anyad'){
        client.commands.get('anyad').execute(message, args);
    } else if(command==='szarvagyok'){
        client.commands.get('szarvagyok').execute(message, args);
    }  else if(command==='help'){
        client.commands.get('help').execute(message, args);
    } else if(command==='csapasd'){
        client.commands.get('csapasd').execute(message, args);
    } else if(command==='hotsex'){
        client.commands.get('hotsex').execute(message, args);
    } else if(command==='hotestsex'){
        client.commands.get('hotestsex').execute(message, args);
    } else if(command==='csinald'){
        client.commands.get('csinald').execute(message, args);
    }
});
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

const queue = new Map();

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const serverQueue = queue.get(message.guild.id);

  if (message.content.startsWith(`${prefix}baszasd`)) {
    execute(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}stop`)) {
    stop(message, serverQueue);
    return;
  } 
});
  
  async function execute(message, serverQueue) {
    const args = message.content.split(" ");
  
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send(
        "Lépj már be egy voicechannelbe te agyhalott..."
      );
  
      if (ytdl.validateURL(args[0])) {
        const song_info = await ytdl.getInfo(args[0]);
        song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url }
    } else {
        const video_finder = async (query) =>{
            const video_result = await ytSearch(query);
            return (video_result.videos.length > 1) ? video_result.videos[0] : null;
        }

        const video = await video_finder(args.join(' '));
        if (video){
            song = { title: video.title, url: video.url }
        } else {
             message.channel.send('Nem találom ezt a videót, fuck me!');
        }
    }
  
    if (!serverQueue) {
      const queueContruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: true
      };
  
      queue.set(message.guild.id, queueContruct);
  
      queueContruct.songs.push(song);
  
      try {
        var connection = await voiceChannel.join();
        queueContruct.connection = connection;
        play(message.guild, queueContruct.songs[0]);
      } catch (err) {
        console.log(err);
        queue.delete(message.guild.id);
        return message.channel.send(err);
      }
    } else {
      serverQueue.songs.push(song);
      return message.channel.send(`${song.title} mehet a baszatáskába!`);
    }
  }
  
  function skip(message, serverQueue) {
    if (!message.member.voice.channel)
      return message.channel.send(
        "Lépj be egy voicechannelbe te agyhalott..."
      );
    if (!serverQueue)
      return message.channel.send("Üres a baszatáska:(");
    serverQueue.connection.dispatcher.end();
  }
  
  function stop(message, serverQueue) {
    if (!message.member.voice.channel)
      return message.channel.send(
        "Lépj be egy voicechannelbe te agyhalott"
      );
      
    if (!serverQueue)
      return message.channel.send("Mit stoppoljak ezen geci?");
      
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
  }
  
  const play = async (guild, song) => {
    const song_queue = queue.get(guild.id);

    if (!song) {
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 0.5 })
    .on('finish', () => {
        song_queue.songs.shift();
        play(guild, song_queue.songs[0]);
    });
    await song_queue.textChannel.send(`Szól a baszatáska: **${song.title}**`)
}

client.login('ODMxNTUyOTc2NDMwMDM5MDgy.YHW6Dw.V8omzp4tbypmJefe6AFq4WKSJWQ');
