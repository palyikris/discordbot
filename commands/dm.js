
module.exports={
    name: 'dm',
    description: "This command messages a member",
    execute( message, args){
        let dms=["Szia Cica, van gazdád?", "Számolunk vállakat? 1..2..3..4 *hugs you*", "Nem vagy véletlen rossz automata? Elnyelhetnéd a 20-asomat."];
        const member=message.mentions.users.first();
        if(member){
            let reps = Math.floor(Math.random() * 3);
            member.send(dms[reps]);
        }else{
            message.channel.send('Nem tudok ennek a gyökérnek üzit küldeni...');
        }
        }
    }
