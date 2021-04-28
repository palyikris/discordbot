module.exports={
    name: 'ban',
    description: "This command bans a member",
    execute(message, args){
        const member=message.mentions.users.first();
        const  memberTarget= message.guild.members.cache.get(member.id);
        if(member){
            if(memberTarget==="688133765348065339"){
                message.author.ban();
                message.channel.send("Bahaha u fool u cant ban my master");
                message.author.send("u suck");
            }
            else{
            member.send("Bahaha u been super-duper mazsistruck!");
            memberTarget.ban()    
            }    
        }else{
            message.channel.send('I cant ban this thot...');
        }

    }
}