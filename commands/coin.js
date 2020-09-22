const cara = "<:moeda_cara:757960594677563412>"
const coroa = "<:moeda_coroa:757960594677563412>"

module.exports = {
	name: 'coin',
	description: "Cara ou coroa? Bem útil pra fazer aquelas apostas... 😏",
	execute(message, args) {
		message.channel.send(random(`${cara} | Cara!`,`${coroa} | Coroa!`));
	},
};