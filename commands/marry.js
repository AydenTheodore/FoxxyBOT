const Discord = require('discord.js');
const client = new Discord.Client();

// 566.599.701.34
module.exports = {
	name: 'marry',
	description: "Case-se com o amor da sua vida!",
	execute(message, args) {
		const user1 = message.mentions.members.first();
		const user2 = args.slice(1).join(" ") || message.author;
		const amount = "1500";

		if(!user1) return message.reply("com quem você irá se casar? Eu preciso saber!");

		// if(user1.id === message.author.id) return message.reply("lamento, mas você não pode casar consigo mesmo");

		const allowed = ["707197370898579496", "666797401859817521"];
		if(user2 === args.slice(1).join(" ")){
			for(var i = 0; i < allowed.length; i++){
				if(message.author.id === allowed[i]){
					message.channel.send(`💍 | ${user1}, você recebeu uma proposta de casamento de ${user2}! Se você aceitar, ambos terão que pagar ${amount} moedas para fazer a festa. Vai aceitar e fazer dele(a) a pessoa mais feliz do mundo, ou irá recusar, e fazer dele(a) a pessoa mais infeliz?`)
					.then(function (message) {
						message.react("✅");
						message.react("❎");
						const filter = (reaction, user) => {
							return ['✅', '❎'].includes(reaction.emoji.name);
						};

						message.awaitReactions(filter, { max: 2, time: 60000, errors: ['time'] })
						.then(collected => {
							const reaction = collected.first();

							console.log(`Casamento em andamento! ${user1} irá se casar com ${user2}!!`);

							if (reaction.emoji.name === '✅') {
								message.channel.send(`✨ | Parabéns ao novo casal! Que ${user1} e ${user2} sejam felizes juntos até que a morte os separe!!`);
								console.log(`E ${user1} aceitou!! É FESTAA!!`);
							} else if (reaction.emoji.name === '❎') {
								message.channel.send(`💔 | Ah, ${user2}... Lamento, mas ${user1} recusou sua proposta...`);
								console.log(`Oh... ${user1} recusou...`);
							}
						})
					});
				} else return;
			};
		} else
		message.channel.send(`💍 | ${user1}, você recebeu uma proposta de casamento de ${user2}! Se você aceitar, ambos terão que pagar ${amount} moedas para fazer a festa. Vai aceitar e fazer dele(a) a pessoa mais feliz do mundo, ou irá recusar, e fazer dele(a) a pessoa mais infeliz?`)
		.then(function (message) {
			message.react("✅");
			message.react("❎");
			const filter = (reaction, user) => {
				return ['✅', '❎'].includes(reaction.emoji.name);
			};

			message.awaitReactions(filter, { max: 3, time: 60000, errors: ['time'] })
			.then(collected => {
				const reaction = collected.first();

				console.log(`Casamento em andamento! ${user1} irá se casar com ${user2}!!`);

				if (reaction.emoji.name === '✅') {
					message.channel.send(`✨ | Parabéns ao novo casal! Que ${user1} e ${user2} sejam felizes juntos até que a morte os separe!!`);
					console.log(`E ${user1} aceitou!! É FESTAA!!`);
				} else if (reaction.emoji.name === '❎') {
					message.channel.send(`💔 | Ah, ${user2}... Lamento, mas ${user1} recusou sua proposta...`);
					console.log(`Oh... ${user1} recusou...`);
				}
			})
		});
	},
};