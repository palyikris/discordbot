const Discord = require("discord.js")

module.exports={
    name:'help',
    description:"this is a help command!",
    execute(message, args){
        const newEmbed=new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('PARANCSOK')
            .setURL('http://www.henifanpage.probaljaki.hu/')
            .setAuthor('Kizsten Wadjocc', 'https://lh3.googleusercontent.com/O9TbvtFZUHU03MhnyvJXjBfyQhjJ7WKMSW0tIlidJa6x0BxL9foOALKD_U93sdcKmeBKXG0=s85')
            .setDescription('Ha autista vagy és kellenek a parancsok, itt megtalálod őket!')
            .setThumbnail('https://lh3.googleusercontent.com/O9TbvtFZUHU03MhnyvJXjBfyQhjJ7WKMSW0tIlidJa6x0BxL9foOALKD_U93sdcKmeBKXG0=s85')
            .addFields(
                {name:'Kick', value:'Kirúgja a megemlített tagot a szerverről.'},
                {name:'Abel', value:'Kiírja, hogy buzi.'},
                {name:'Anyad', value:'Csúnya üzenetet küld a megemlített tagnak.'},
                {name:'Baszasd', value:'Zenét játszik be. Tud sorakoztatni, skippelni, és megállítani az egészet.'},
                {name:'Csapasd', value:'Csak zenét játszik be.'},
                {name:'Dm', value:'Üzenetet küld a megemlített tagnak.'},
                {name:'Getmyid', value:'Elküldi a megemlített tagnak az id-jét'},
                {name:'Leave', value:'A bot kilép a voicechannel-ből.'},
                {name:'Lele', value:'vesszőcske'},
                {name:'Uonline?', value:'yep'},
                {name:'Szarvagyok', value:'Az vagy. Én nem'},
                {name:'Join', value:'Belép a voicechannel-be.'},
                {name:'Hotsex', value:'Küld egy kis hotsexet.'},
                {name:'Hotestsex', value:'Küld egy leghotabb sexet.'},
                {name:'Csinald', value:'Kiírja az utána írt ötletet az ötletcsatornába'},
            )
            .setImage('https://lh3.googleusercontent.com/O9TbvtFZUHU03MhnyvJXjBfyQhjJ7WKMSW0tIlidJa6x0BxL9foOALKD_U93sdcKmeBKXG0=s85')
            .setTimestamp()
            .setFooter('Nyuszi-faszom gecik, basszátok meg!');
     message.channel.send(newEmbed);
        
    }
}