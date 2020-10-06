const Discord = require('discord.js');
const request = require('request');

module.exports = {
	name: "cat",
	description: "MIAAU!! Envie uma imagem aleatória de um gato!",
	execute(message, args) {
		request('https://edgecats.net/random', function(error, response, body){
			if(!error && response.statusCode == 200){
				var footers = ["Gatu gatu gatu!", "Cat cat pat!", "The random cat", "Cattu!", "-cat", "MEOOOOOOOOOOWW!!!!"];
				var random = Math.floor(Math.random() * footers.length);

				let emb = new Discord.MessageEmbed()
					.setImage(body)
					.setColor("#00ff00")
					.setTitle("MEOOOW! 😺")
					.setFooter(footers[random])

				message.channel.send(emb)
			}
		})
	},
}