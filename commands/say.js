module.exports = {
	name: 'say',
	description: "Diga-me o que dizer.",
	execute(message, args) {
		message.channel.send(args.join(' '));
		message.delete();
	},
};