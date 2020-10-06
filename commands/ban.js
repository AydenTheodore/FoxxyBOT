const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: "ban",
	description: "Bane um membro do server",
	execute(message, args){
		if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply('você não pode usar esse comando!')
		if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Permissões insuficientes. Certifique-se de que eu tenho a permissão de `Banir membros`.")

		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

		if(!args[0]) return message.reply('especifique um usuário');

		if(!member) return message.reply("não consegui achar esse usuário. Perdoe-me por isso 😭");

		if(member.id === message.author.id) return message.reply('você não pode se banir! 🙄');

		if(member.id === "718176833102807041") return message.reply('eu não posso me banir! 🙄');

		if(!member.bannable) return message.reply('este usuário não pode ser banido, pois ele é um Mod/Admin, ou seu maior cargo é maior que o meu');

		let reason = args.slice(1).join(" ");

		if(reason === undefined) reason = 'Não especificado';

		const banembed = new Discord.MessageEmbed()
			.setTitle('Membro Banido')
			.setThumbnail(member.user.displayAvatarURL())
			.addField('Usuário Banido', member)
			.addField('Banido por', message.author)
			.addField('Motivo', reason)
			.setFooter('Quando foi banido')
			.setTimestamp();

		message.guild.members.ban(member);
		message.channel.send(banembed);
    },
}