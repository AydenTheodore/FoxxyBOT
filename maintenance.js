const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token, ownerID } = require('./config.json');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag} with Maintenance Mode!`);
	client.user.setStatus('Idle')
	client.user.setActivity(`🛠 Em manutenção...`, {type: "WATCHING"}).catch(console.error);
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	if(message.author.id !== ownerID) return message.channel.send("🏗 Em manutenção, tente novamente mais tarde... 🛠");

	const args = message.content.slice(prefix.length).trim().split(/ +/);

	const banned = ["732790870192947311", "710544984096505897", "672747450489896972"];
	for(var b = 0; b < banned.length; b++) { //go through each element
			if(args.includes(banned[b])) { //if they match...
			message.reply("você não pode usar isso, pois foi banido! <a:triggeredtato:759888514338127902>"); //...then moderate!
			message.delete();
			return console.log(`${message.author.tag}(banido) foi bloqueado tentando enviar isso: ` + args.join(" "));
		}
	}

	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('Eu não posso executar esse comando dentro de DMs!');
	}

	if (command.args && !args.length) {
		let reply = `Você não deu nenhum argumento, ${message.author}!`;

		if (command.usage) {
			reply += `\nO uso correto seria: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`por favor espere ${timeLeft.toFixed(1)} segundo(s) antes de usar o comando\`${command.name}\`!`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('houve um erro tentando executar aquele comando!');
	}
});

client.on('guildMemberAdd', member =>{
	const channel = member.guild.channels.cache.find(ch => ch.name.includes("geral"))
	if(!channel) return;
	channel.send(`<:wavetato:759888504732778517> Bem vindo ao nosso server, ${member}, por favor leia as regras antes de conversar no server! <:blobowo:759888494805516298>`)
});

client.on('guildMemberRemove', member =>{
	const channel = member.guild.channels.cache.find(ch => ch.name.includes("geral"))
	if(!channel) return;
	channel.send(`<:byetato:759888498437521439> ${member} saiu do server... Espero que volte algum dia.`)
});

client.login(token);