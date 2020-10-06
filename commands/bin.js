const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'bin',
	description: "Tente descobrir o número em que estou pensando!",
	aliases: ['binary', 'rnumber'],
	execute(message, args) {
		const exclusive = "707197370898579496";
		const embed = new Discord.MessageEmbed()
			.setTitle('✨ Você achou um comando exclusivo! ✨')
			.setDescription(`Uau, como conseguiu? Legal, né?\nPorém, esse comando é esclusivo de LooserXD#1853, ou seja, apenas ele consegue usar isso.\nSe quiser ter um comando exclusivo seu, contate Ayden T. Foxxy#2468 para fazer seu pedido!`)
			.setColor("#efff00")
			.setFooter("Comandos VIP™ - Sempre apenas para você!")
			.setTimestamp();

		if(message.author.id !== exclusive) return message.channel.send(embed);

		var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"];
		var random = Math.round(Math.random() * numbers.length);
		var number = numbers[random];

		console.log(number);
		message.channel.send(`Ok, ${message.author}, eu escolhi um número __entre **1** e **100**__. Tente achá-lo!`);
		
		var answer = function(){
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
				if(attempt > number){
					message.channel.send("Meu número é menor que esse");
					attempt.react('➖');
					call();
				} else
				if(attempt < number){
					message.channel.send("Meu número é maior que esse");
					attempt.react('➕');
					call();
				} else
				if(attempt === 'stop'){
					message.channel.send('Certeza de que deseja fazer isso?');
					message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 60000})
					.then(collected => {
						if (collected.first().content.toLowerCase() == 'sim') {
							attempt.react('✅');
							message.channel.send(`😔 Lamento que você tenha desistido... Bem, você pode tentar de novo! Ah, aliás, o número era **${number}**! 😉`);
						} else
						message.channel.send('Operação cancelada. Você já pode continuar a jogar.');
						call();
					});
				}
			}).catch(() => {
				if(!attempt) return message.channel.send(`🤔 Sem ideias? Lamento, mas qualquer coisa, o número era **${number}**! 😉`);
			});
		};
		var call = function(){
			answer();
		};
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
			if(attempt > number){
				message.channel.send("Meu número é menor que esse");
				attempt.react('➖');
				answer();
			} else
			if(attempt < number){
				message.channel.send("Meu número é maior que esse");
				attempt.react('➕');
				answer();
			} else
			if(attempt === 'stop'){
				message.channel.send('Certeza de que deseja fazer isso?');
				message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 60000})
				.then(collected => {
					if (collected.first().content.toLowerCase() == 'sim') {
						attempt.react('✅');
						message.channel.send(`😔 Lamento que você tenha desistido... Bem, você pode tentar de novo! Ah, aliás, o número era **${number}**! 😉`);
					} else
					message.channel.send('Operação cancelada. Você já pode continuar a jogar.');
					answer();
				});
			}
		}).catch(() => {
			if(!attempt) return message.channel.send(`🤔 Sem ideias? Lamento, mas qualquer coisa, o número era **${number}**! 😉`);
		});
	},
};
