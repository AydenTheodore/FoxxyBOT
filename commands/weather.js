const weather = require('weather-js');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: "weather",
	description: "Verifica o clima de uma região",
	execute(message, args) {
		weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
			// 'C' can be changed to 'F' for farneheit results
			if(error) return message.channel.send(error);
			if(!args[0]) return message.channel.send('Especifique uma localização')

			if(result === undefined || result.length === 0) return message.channel.send(`Creio que ${args[0]} não é um lugar`);

			var current = result[0].current;
			var location = result[0].location;

			const weatherinfo = new Discord.MessageEmbed()
				.setDescription(`**${current.skytext}**`)
				.setAuthor(`Previsão do tempo para ${current.observationpoint}`)
				.setThumbnail(current.imageUrl)
				.setColor(0x111111)
				.addField('Fuso horário', `UTC${location.timezone}`, true)
				.addField('Tipo de Grau', 'Celsius', true)
				.addField('Temperatura', `${current.temperature}°`, true)
				.addField('Vento', current.winddisplay, true)
				.addField('Sensação Térmica', `${current.feelslike}°`, true)
				.addField('Umidade', `${current.humidity}%`, true);

			message.channel.send(weatherinfo);
		})
	},
};