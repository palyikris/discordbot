module.exports={
    name: 'getmyid',
    description: "This command writes a member's id",
    execute( message, args){
        const member=message.mentions.users.first();
        if(member){
            const  memberTarget= message.guild.members.cache.get(member.id);
            member.send("Itt az id Cuncikám: "+memberTarget);         
        }else{
            message.channel.send('Te gyökér szar! Ez a user nem létezik!');
        }

    }
}