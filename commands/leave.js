module.exports = {
	name: 'leave',
	description: 'Não gostou do server? ENTÃO SAIA AGORA!!',
	execute(message, args) {
		message.channel.send(`Ah é??, Não gostou do server, ${message.author}??? Então SAI DELE AGORA!! :face_with_symbols_over_mouth:`);
	},
};