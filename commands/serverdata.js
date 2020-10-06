module.exports = {
	name: 'serverdata',
	description: 'Mostra alguns detalhes sobre o seu server!',
	execute(message, args) {
		const serverEmbed = new Discord.MessageEmbed()
			.setColor('#00ff26')
			.setTitle(`**----- Banco de Dados -----**`)
			.setDescription(`Nome do servidor : ${message.guild.name}\nTotal de membros: ${message.guild.memberCount}\nData de criação: ${message.guild.createdAt}\nRegião: ${message.guild.region}`)
			.setFooter("-serverdata");

		message.channel.send(serverEmbed);
	},
};