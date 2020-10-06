const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: "kick",
	description: "Expulsa um membro do server",
	execute(message, args){
		if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('você não pode usar esse comando!')
		if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("permissões insuficientes. Certifique-se de que eu tenho a permissão de `Expulsar membros`.")

		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

		if(!args[0]) return message.reply('Especifique um usuário');
		
		if(!member) return message.reply("não consegui achar esse usuário. Perdoe-me por isso 😭");

		if(member.id === message.author.id) return message.reply('você não pode se expulsar! 🙄');

		if(member.id === "718176833102807041") return message.reply('eu não posso me expulsar! 🙄');

		if(!member.kickable) return message.reply('este usuário não pode ser expulso, pois ele é um Mod/Admin, ou seu maior cargo é maior que o meu');

		let reason = args.slice(1).join(" ");

		if(reason === undefined) reason = 'Não especificado';

		const kickembed = new Discord.MessageEmbed()
			.setTitle('Membro Expulso')
			.setThumbnail(member.user.displayAvatarURL())
			.addField('Usuário Expulso', member)
			.addField('Expulso por', message.author)
			.addField('Motivo', reason)
			.setFooter('Momento em que foi expulso')
			.setTimestamp();

		member.kick(reason);
		message.channel.send(kickembed);
    },
}