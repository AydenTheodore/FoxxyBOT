module.exports = {
	name: 'say',
	description: 'Diga-me o que dizer.',
	execute(message, args) {
		message.delete();
		message.channel.send(message.content.replace(`${prefix}say`, ''));
	},
};