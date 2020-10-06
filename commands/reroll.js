const ms = require('ms');
const Discord = require('discord.js');
const client = new Discord.Client();
const { giveawaysManager } = require('discord-giveaways');

module.exports = {
    name: "reroll",
    description: "Rerolls giveaway",
    execute(message, args){

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('você não tem permissão para usar esse comando');

        if(!args[0]) return message.reply('nenhum ID de sorteio provido');

        let giveaway = client.giveawaysManager.giveaways.find((g) => g.prize === args.join(" ")) || client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

        if(!giveaway) return message.reply('não consegui achar um sorteio com aquele ID/nome');

        client.giveawaysManager.reroll(giveaway.messageID)
        .then(() => {
            message.channel.send('Giveaway rerolled')
        })
        .catch((e) => {
            if(e.startsWith(`Giveaway with ID ${giveaway.messageID} is not ended`)){
                message.reply('esse sorteio ainda não acabou')
            } else {
                console.error(e);
                message.channel.send('3RROR - F4IL3D T0 3X3CUT3 TH3 C0MM4ND')
            }
        })
    }
}