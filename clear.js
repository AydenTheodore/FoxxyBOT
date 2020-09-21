module.exports = {
	name: 'clear',
	description: 'Apague algumas mensagens que você quiser!',
	execute(message, args) {
		const amount = args[0];
		if (isNaN(amount)) {
			return message.reply('esse não parece ser um número válido.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('você tem que colocar um número entre 1 e 99.');
		}
		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('Houve um erro tentando apagar mensagens neste canal!');
		});
		message.reply(`eu deletei ${amount} mensagens, conforme pediu.`);
	},
};