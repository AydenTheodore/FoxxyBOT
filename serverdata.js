module.exports = {
	name: 'serverdata',
	description: 'Mostra alguns detalhes sobre o seu server!',
	execute(message, args) {
		message.channel.send(`Nome do servidor : ${message.guild.name}\nTotal de membros: ${message.guild.memberCount}\nData de criação: ${message.guild.createdAt}\nRegião: ${message.guild.region}`);
	},
};