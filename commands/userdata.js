module.exports = {
	name: 'userdata',
	description: 'Mostra alguns dados sobre você!',
	execute(message, args) {
		message.channel.send(`Seu nome de usuário: ${message.author.username}\nSeu ID: ${message.author.id}\nAvatar:`);
		message.channel.send(message.author.displayAvatarURL());
	},
};