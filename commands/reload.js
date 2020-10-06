module.exports = {
	name: 'reload',
	description: 'Recarrega um comando.',
	execute(message, args) {
		const ownerID = "707197370898579496";

		if(message.author.id !== ownerID) return message.reply(`lamento, porém você não tem permissão para usar este comando! <:blobowo:759888494805516298>`);

		if (!args.length) return message.channel.send(`Você não me passou nenhum comando para recarregar, ${message.author}!`);
		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) return message.channel.send(`Não há nenhum comando com nome ou apelido de \`${commandName}\`, ${message.author}!`);

		delete require.cache[require.resolve(`./${command.name}.js`)];

		try {
			const newCommand = require(`./${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
		} catch (error) {
			console.log(error);
			message.channel.send(`Houve um error enquanto estava recarregando o comando \`${command.name}\`:\n\`${error.message}\``);
		}
		message.channel.send(`Comando \`${command.name}\` foi recarregado!`);

	},
};