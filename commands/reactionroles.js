const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'reactionroles',
	description: 'Faça um Reaction-Roles com o Foxxy!',
	aliases: ['rr', 'reactrole'],
	usage: '<role> [title] [description]',
	execute(message, args) {
		var role = args[0];
		var title = args[1];
		var desc = args.slice(2).join(" ");

		if(!role) return message.reply("mencione um cargo **válido**!");
		if(!title) title = "Reaction-Role";
		if(!desc) desc = `Reaja com ✅ para conseguir o cargo de ${role}!`;

		const embed = new Discord.MessageEmbed()
			.setTitle(title)
			.setDescription(desc)
			.setColor("#0b9800")
			.setFooter("Reaction-Roles do Foxxy");

		message.channel.send(embed)
		.then(function(message) {
			message.react("✅");
		}).catch(function(error) {
			message.reply("não consegui reagir à mensagem!");
		});

		client.on('messageReactionAdd', (reaction, user) => {
			let emoji = reaction.emoji;

			if (emoji.name == '✅') {
				// We don't have the member, but only the user...
				// Thanks to the previous part, we know how to fetch it
				message.guild.fetchMember(user.id).then(member => {
					member.roles.add(role.id);
				});
			}
		});
	},
};