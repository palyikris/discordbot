const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
 
module.exports = {
    name: 'csapasd',
    description: 'Joins and plays a video from youtube',
    async execute( message, args){
        const voiceChannel = message.member.voice.channel;
 
        if (!voiceChannel) return message.channel.send('Lépj be egy voicechannelbe te agyhalott...');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        //if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissins');
        //if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissins');
        if (!args.length) return message.channel.send('És most itt mit játsszak????');
 
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
 
        if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 0.5})
    
 
            await message.reply(`Neked játszom Csicska: ***Amit beraktál bazmeg***`)
 
            return
        }
 
        
        const  connection = await voiceChannel.join();
 
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
 
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
 
        }
 
        const video = await videoFinder(args.join(' '));
 
        if(video){
            const stream  = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 0.5})
      
 
            await message.reply(`Ezt neked játszom Csicska ***${video.title}***`)
        } else {
            message.channel.send('Nincs ilyen videó te istenbarma!!!!');
        }
    }
}