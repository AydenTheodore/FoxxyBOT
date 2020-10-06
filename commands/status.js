const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('../config.json');

module.exports = {
	name: 'status',
	description: "Defina meu status",
	execute(message, args) {
		const servers = client.guilds.cache.size;
		const normal = [`${servers} servers`, `${prefix}help`, "algumas séries...", "tutoriais para me expandir!"];
		var status;

		if(!args[0]){
			var random = Math.floor(Math.random() * normal.length);
			status = normal[random];

			client.user.setActivity(normal[random], {type: "WATCHING"}).catch(console.error);
		} else
		status = args.join(" ");

		client.user.setActivity(status, {type: "WATCHING"}).catch(console.error);
		console.log(`Changed ${client.user.tag} status to ${status}`);	
		message.reply(`status mudado para ${status} com sucesso.`);
	},
};