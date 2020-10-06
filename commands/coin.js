const Discord = require('discord.js');
const client = new Discord.Client();
const userCurrency = 500;
const selfCurrency = 1000;

module.exports = {
	name: 'coin',
	description: "Cara ou coroa? Aposte com seus amigos ou simplesmente jogue uma moeda e veja no que dá.",
	aliases: ['coinflip', 'flipcoin'],
	execute(message, args) {
		if(args[0] === "bet"){
			const user = message.mentions.members.first();
			const amount = args.slice(2).join(' ');	

			// Requires a mention
			if(!user) return message.reply("mencione alguém para apostar!");

			// Return if user is the message author
			if(user.id === message.author.id) return message.reply('como você irá apostar consigo mesmo?? Você não ganhará nada no final!');

			// Requires a amount of money
			if(!amount) return message.reply('mencione uma quantidade de dinheiro para apostar!');

			// Return if amount is too short
			if(amount < 10) return message.reply('aposte mais dinheiro! Sua aposta é insignificante demais :pensive:');

			// Return if message author haven't that amount of money
			if(selfCurrency < amount) return message.reply('você não tem tantas modedas!');

			// Return if user haven't that amount of money
			if(userCurrency < amount) return message.reply(`${user} não tem tantas modedas!`);

			const tax = amount / 10;
			const reward = amount - tax;
			message.channel.send(`🔷 | ${user}, ${message.author} quer fazer uma aposta com você! Cada um irá pagar **${amount} moedas** **(${tax} moedas de impostos xD)**. Se der **Cara**, você irá ganhar **${reward} moedas**, se cair Coroa, ${message.author} irá ganhar **${reward} moedas**! E aí, vai encarar?`)
				.then(function (message) {
					message.react("✅")
				}).catch(function() {
					console.log(error);
				});

			client.on('messageReactionAdd', (reaction, user) => {
				let emoji = reaction.emoji;
				var bet = [user, message.author];
				var coin = Math.floor(Math.random() * bet.length);
				const winner = bet[coin];

				if(reaction.author.bot) return;
				if(emoji.name == '✅'){
					message.channel.send(`${coin[flip]}\nParabéns ${winner}, você ganhou **${reward} moedas**!`);
				}
			});
		} else 
		var faces = ["**<:mcara:759888533594439720> | Cara!**", "**<:mcoroa:759888533983854642> | Coroa!**"];
		var flip = Math.floor(Math.random() * faces.length);
		message.channel.send(faces[flip]);
	},
};