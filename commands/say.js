const Discord = require('discord.js');
const client = new Discord.Client();

const blocked = ["zeldris", "Zeldris"];

module.exports = {
	name: 'say',
	description: "Diga-me o que dizer.",
	usage: "[channel] <message>",
	execute(message, args) {
		for(var i = 0; i < blocked.length; i++) { //go through each element
			if(args.slice(0).includes(blocked[i])) { //if they match...
				message.reply("sua mensagem contém palavras proibidas! <a:triggeredtato:759888514338127902>"); //...then moderate!
				message.delete();
				return console.log(`${message.author.tag} foi bloqueado tentando enviar isso: ` + args.join(" "));
			}
		}

		var argsresult = args[0];
		const mChannel = message.mentions.channels.first()

		if(!argsresult) return message.reply("eu não posso enviar uma mensagem vazia!")

		if (args[0].startsWith(mChannel)) {
			argsresult = args.slice(1).join(" ")
			mChannel.send(argsresult)
			message.delete()
			return console.log(`${message.author.tag} enviou isso no canal ${mChannel} com o Foxxy: ` + args.slice(1).join(" "));
		} else
		argsresult = args.join(" ")
		message.channel.send(argsresult)
		message.delete()
		return console.log(`${message.author.tag} enviou isso com o Foxxy: ` + args.join(" "));
	},                                                         
};