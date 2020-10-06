const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'ping',
	description: "Teste a minha velocidade!",
	aliases: ['pingpong', 'pong'],
	execute(message, args) {
		var ping = Date.now() - message.createdTimestamp + " ms";;
		if(message.content === "-ping"){
			message.channel.send(`**🏓 | Pong!**\n\n**⏱ | Time:** ${ping}`);
		} else 
		if(message.content === "-pong"){
			message.channel.send(`**🏓 | Ping!**\n\n**⏱ | Time:** ${ping}`);
		}
	},
};