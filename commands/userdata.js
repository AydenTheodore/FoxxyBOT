const Discord = require('discord.js');

module.exports = {
	name: 'userdata',
	description: 'Mostra alguns dados sobre alguém.',
	execute(message, args) {
		const user = message.mentions.members.first() || message.author;
		const avatar = user.displayAvatarURL;
		const dataEmbed = new Discord.MessageEmbed()
			.setColor('#00ff26')
			.setTitle(`**----- Banco de Dados -----**`)
			.setDescription(`**Nome & Tag:** ${user.tag}\n**ID:** ${user.id}\n**Avatar:**`)
			.setImage(avatar)
			.setFooter("-userdata [user]");

		message.channel.send(dataEmbed);
	},
};