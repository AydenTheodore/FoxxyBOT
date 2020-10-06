const math = require('mathjs');
const Discord = require('discord.js');

module.exports = {
	name: "calculate",
	description: "Consiga a resposta de um problema",
	aliases: ['calc'],
	execute(message, args){
		if(!args[0]) return message.reply('insira uma questão.');

		let resp;

		try {
			resp = math.evaluate(args.join(" "))
		} catch (e) {
			return message.reply('insira uma questão **válida**.')
		}

		const embed = new Discord.MessageEmbed()
			.setColor(0x808080)
			.setTitle('Calculadora')
			.addField('Questão', `\`\`\`css\n${args.join(' ')}\`\`\``)
			.addField('Resposta', `\`\`\`css\n${resp}\`\`\``)

		message.channel.send(embed);

	},
};