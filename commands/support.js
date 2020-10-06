const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
	name: "support",
	description: "MOstra os comandos de suporte",
	execute(message, args) {
			let embed = new Discord.MessageEmbed()
			.setColor("#00ff00")
			.setTitle("Informação de Suporte")
			.addField("Para ver os comandos do bot use", "`-help`")
			.addField("Para reportar bugs use", "`-contact`")
			.addField("Se você precisar de ajuda com outra coisa, entre no nosso", "[server oficial](https://discord.gg/bCbGxaV)");

		message.channel.send(embed);
		message.delete();
	},
}