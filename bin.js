const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'bin',
	description: "Tente descobrir o número em que estou pensando!",
	aliases: ['binary', 'rnumber'],
	execute(message, args) {
		// const exclusive = "666797401859817521";
		const exclusive = "707197370898579496";
		const vip = "<@666797401859817521>";
		const embed = new Discord.MessageEmbed()
			.setTitle('✨ Você achou um comando exclusivo! ✨')
			.setDescription(`Uau, como conseguiu? Legal, né?\nPorém, esse comando é esclusivo de ${vip}, ou seja, apenas ele consegue usar isso.\nSe quiser ter um comando exclusivo seu, contate <@707197370898579496> para fazer seu pedido!`)
			.setColor("#efff00")
			.setFooter("Comandos VIP™. Sempre apenas para você!")
			.setTimestamp();

		if(message.author.id !== exclusive) return message.channel.send(embed);

		var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
		var random = Math.round(Math.random() * numbers.length);
		var number = numbers[random];

		message.channel.send(`Ok, ${message.author}, eu escolhi um número __entre **1** e **100**__. Tente achá-lo!`)
		console.log(number);

		for(var i = 0; i < 10; i++){
			message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 60000})
			.then(collected => {
				// only accept messages by the user who sent the command
				// accept only 1 message, and return the promise after 60000ms = 1min

				var attempt = collected.first();
				// first (and, in this case, only) message of the collection
				if (collected.first().content.toLowerCase() === number) {
					attempt.react('✅');
					message.channel.send(`🎉 Parabéns, ${message.author}, você acertou!! 🎉\n**Número escolhido:** ${number}`);
				} else
				attempt.react('❌');
				}).catch(() => {
					message.channel.send(`Sem ideias? Lamento, mas qualquer coisa, o número era **${number}**! 😉`);
				});
		};
	},
};