const Discord = require('discord.js');

module.exports = {
	name: '8ball',
	description: 'Pergunte algo!',
	aliases: ['commands'],
	usage: '<question>',
	execute(message, args) {
		if(!args[1]) return message.reply("insira uma questão completa com 2 ou mais palavras!");
		let replies = ["CERTAMENTE", "DECIDIDAMENTE SIM", "SEM DÚVIDA", "SIM, DEFINITIVAMENTE", "PODE CONTAR COM ISSO", "COMO EU VEJO, SIM", "BEM PROVÁVEL", "BOA PERSPECTIVA" , "SIM", "SINAIS APONTAM QUE SIM", "RESPOSTA NEBULOSA TENTE NOVAMENTE", "PERGUNTE MAIS TARDE", "MELHOR NÃO TE DIZER AGORA", "NÃO POSSO PREVER AGORA", "CONCENTRE-SE E PERGUNTE NOVAMENTE", "NÃO CONTE COM ISSO","MINHA RESPOSTA É NÃO","MINHAS FONTES DIZEM NÃO","PERSPECTIVA NÃO TÃO BOA"," MUITO DÚVIDOSO"];

		let result = Math.floor((Math.random() * replies.length));
		let question = args.join(" ");

		let ballembed = new Discord.MessageEmbed()
			.setTitle("The Foxxys Previsions")
			.setThumbnail(message.author.displayAvatarURL())
			.setColor("#00ff00")
			.addField("Pergunta", question)
			.addField("Resposta", replies[result]);

		message.channel.send(ballembed);
		message.delete();
	},
};