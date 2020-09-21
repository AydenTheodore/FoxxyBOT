module.exports = {
	name: 'kick',
	description: "Kicka um membro irritante",
	execute(message, args) {
		if (message.content.startsWith(`${prefix}kick`)) {
			if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) { return message.channel.send("Você não tem permissão para kickar membros!"); }

			if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) { return message.channel.send("Eu não tenho permissão para kickar membros!"); }

			if (message.mentions.users.size === 0) { return message.channel.send("Você tem que mencionar um usuário!"); }
			let kickMember = message.guild.member(message.mentions.users.first());
			if (!kickMember) { return message.channel.send(`Usuário não encontrado! ${sad}`); }

		        kickMember.kick().then((member) => {
            		message.channel.send(member.displayName + " saiu do server. :pensive:")
            		message.channel.send(member.displayName + " foi kickado com sucesso por " + message.author);
        		});
    		}
	},
};