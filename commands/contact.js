const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
	name: "contact",
	description: "Entre em contato conosco",
	aliases: ['report'],
	execute(message, args) {
		let Invite = message.channel.createInvite();
		let Sender = message.author;
		const sayMessage = args.join(" ");
		if(!sayMessage) return message.channel.send(`Por favor nos dê o motivo do contato, ${message.author}`);

		let contact = new Discord.MessageEmbed()
			.setColor("00ff00")
			.setThumbnail(Sender.displayAvatarURL)
			.setDescription(`Mensagem de Contato de ${message.guild.name}`)
			.setTitle("Message from contact command!")
			.addField("Usuário", Sender, true)
			.addField("ID: ", Sender.id, true)
			.addField("Mensagem: ", sayMessage)
			.setTimestamp();

		client.users.cache.get('707197370898579496').send(contact);

		let embed = new Discord.MessageEmbed()
			.setColor("#00ff00")
			.setTitle("Mensagem enviada!")
			.setDescription("Sua mensagem de contato foi enviada!")
			.addField("Requerido por", Sender)
			.addField("Mensagem: ", sayMessage)
			.setFooter("Obrigado por entrar em contato com o suporte do Foxxy!");

		message.channel.send(embed);
		message.delete();
	},
}