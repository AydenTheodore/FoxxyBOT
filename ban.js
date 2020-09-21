module.exports = {
	name: 'ban',
	description: "Apenas use se o membro já foi avisado várias vezes antes.",
	execute(message, args) {
		if (message.content.startsWith(`${prefix}ban`)) {
			if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.channel.send("Você não tem permissão para banir membros!"); }

			if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) { return message.channel.send("Eu não tenho permissão para banir membros!"); }

			if (message.mentions.users.size === 0) { return message.channel.send("VOcê tem que mencionar um usuário!"); }
			let banMember = message.guild.member(message.mentions.users.first());
			if (!banMember) { return message.channel.send(`Usuário não encontrado! ${sad}`); }

		        banMember.ban().then((member) => {
            		message.channel.send(member.displayName + " saiu do server :pensive:")
            		message.channel.send(member.displayName + " foi banido com sucesso por " + message.author);
        		})
    		}
	},
};