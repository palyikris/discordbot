module.exports={
    name:'anyad',
    description:"this is a anyad command!",
    execute( message, args){
        const member=message.mentions.users.first();
        if(member){
            const  memberTarget= message.guild.members.cache.get(member.id);

            member.send("xd te buta fasz!");
        }else{
            message.channel.send("Ilyen tag nincs te kóróképű szar!");
        }
    }
}