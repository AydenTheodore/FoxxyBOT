const Discord = require('discord.js');
const { prefix } = require('../config.json');
const pagination = require('discord.js-pagination');

module.exports = {
	name: 'help',
	description: 'Lista de todos os meus comandos ou informação sobre um comando específico.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		//Sort your commands into categories, and make seperate embeds for each category

		const data = [];
		const { commands } = message.client;

		const moderation = new Discord.MessageEmbed()
			.setTitle('Moderação')
			.setColor("#730000")
			.addField('`-kick`', 'Expulsa um membro do seu server via menção ou ID')
			.addField('`-ban`', 'Bane um membro do seu server via menção ou ID')
			.addField('`-clear`', 'Deleta mensagens')
			.setFooter(`Você pode enviar ${prefix}help [command name] para obter informações específicas sobre um comando!`)
			.setTimestamp();

		const fun = new Discord.MessageEmbed()
			.setTitle('Diversão')
			.setColor("#00b533")
			.addField('`-cat`', 'Miau! Envie um GIF aleatório de uma gato!')
			.addField('`-8ball`', 'Pergunte suas perguntas mais profundas...')
			.addField('`-say`', 'Diga-me o que dizer')
			.addField('`-coin`', 'Jogue uma moeda e veja no que dá')
			.addField('`-invite`', 'Shippe dois usuários (Dica: O segundo usuário não precisa ser um usuário! 😜)')
			.addField('`-emoji`', 'Envie um emoji aleatório da biblioteca do Foxxy')
			.addField('`-leave`', "Se quer sair, SAIA LOGO (não te expulsa/bane do server)")
			.addField('`-rate`', 'Avalie algo/alguém!')
			.addField('`-reverse`', '!radnam êcov euq o etreveR')
			.addField('`-flip`', 'Às vezes as coisas ficam interressantes de ponta cabeça...')
			.setFooter(`Você pode enviar ${prefix}help [command name] para obter informações específicas sobre um comando!`)
			.setTimestamp();

		const utility = new Discord.MessageEmbed()
			.setTitle('Utilidade')
			.setColor("#4f0073")
			.addField('`-invite`', 'Envia um Embed para convidar o Foxxy')
			.addField('`-ping`', 'Pong! Mostra a velocidade de resposta do Foxxy')
			.addField('`-serverdata`', 'Mostra dados sobre este server')
			.addField('`-userdata`', 'Mostra dados sobre você ou quem mencionar')
			.addField('`-weather`', 'Verifica o clima da localização provida')
			.addField('`-poll`', 'Faça uma votação sobre o assunto provido')
			.addField('`-calculate`', 'Use minhas habilidades matemáticas para resolver uma questão!')
			.setFooter(`Você pode enviar ${prefix}help [command name] para obter informações específicas sobre um comando!`)
			.setTimestamp();

		const pages = [
			moderation,
			fun,
			utility
		]

		const emojiList = ["⏪", "⏩"];

		const timeout = '120000';

		if(!args.length){
			return pagination(message, pages, emojiList, timeout);
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