const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'Lista de todos os meus comandos ou informação sobre um comando específico.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Aqui está uma lista de todos os meus comandos:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nVocê pode enviar \`${prefix}help [command name]\` para obter informações específicas sobre um comando!`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('Eu te enviei uma DM com todos os meus comandos!');
				})
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply('parece que eu não posso the enviar uma DM! Você está com suas DMs desabilitadas?');
				});
		}
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('isso não é um comando válido!');
		}

		data.push(`**Nome:** ${command.name}`);

		if (command.aliases) data.push(`**Apelidos:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Descrição:** ${command.description}`);
		if (command.usage) data.push(`**Uso:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

		message.channel.send(data, { split: true });
	},
};