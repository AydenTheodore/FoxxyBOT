const Discord = require('discord.js');

module.exports = {
	name: "ship",
	description: "Veja se aquele seu ship daria certo.",
	execute(message, args) {
		const user1 = message.mentions.members.first();
		const user2 = args.slice(1).join(' ');
		if(!user1 || !user2) return message.reply("mencione duas pessoas para criar um ship! :wink:");

		var chances = ["**😭 Lamento, mas isso é quase impossível! **", "**😔 Esse ship é muito difícil**", "**😫 Eles são só conhecidos**", "**😥 Apenas amigos, nada mais**", "**🙂 Eii, há alguma chance aí!**", "**😌 Eu creio que isso vai rolar!**", "**😁 Isto pode ser amor verdadeiro 💕**", "**😀 Awww, eles parecem almas gêmeas...**", "**😃 Isso é amor verdadeiro ❤**", "**😘 Eles tem que ficar juntos!! **", "**UAU, eles se amam totalmente! 😍 💕**"]
		var barra = ["**0%** 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥", "**10%** 🟩🟥🟥🟥🟥🟥🟥🟥🟥🟥", "**20%** 🟩🟩🟥🟥🟥🟥🟥🟥🟥🟥", "**30%** 🟩🟩🟩🟥🟥🟥🟥🟥🟥🟥", "**40%** 🟩🟩🟩🟩🟥🟥🟥🟥🟥🟥", "**50%** 🟩🟩🟩🟩🟩🟥🟥🟥🟥🟥", "**60%** 🟩🟩🟩🟩🟩🟩🟥🟥🟥🟥", "**70%** 🟩🟩🟩🟩🟩🟩🟩🟥🟥🟥", "**80%** 🟩🟩🟩🟩🟩🟩🟩🟩🟥🟥", "**90%** 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟥", "**100%** 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩"];
		var ship = Math.floor(Math.random() * chances.length);
		const shipembed = new Discord.MessageEmbed()
			.setColor(`#b70000`)
			.setTitle('**💕 Será que temos um novo casal aqui?? 💕**')
			.setDescription(`${user1} x ${user2}\n\n${chances[ship]}\n${barra[ship]}`)
			.setFooter("Shippe seu casal também! -ship <user1> <user2>");

		message.channel.send(shipembed)
			.then(function (message) {
				message.react("💖")
		}).catch(function() {
			console.log(error);
		});
	},
}