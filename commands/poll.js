const Discord = require('discord.js');

module.exports = {
	name: 'poll',
	description: "VOTAÇÃO!!",
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
			.setTitle("------- Votação! -------")
			.setColor("#d604cf")
			.setDescription(`ㅤ\n` + args.join(" ") + `\nㅤ`)
			.setFooter(`Made by ${message.author}`);
		message.channel.send(embed)
			.then(function (message) {
				message.react("✅")
				message.react("🤔")
				message.react("⛔")
			}).catch(function() {
				console.log(error);
			});
		message.delete();
	},
};