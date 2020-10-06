module.exports = {
	name: "reverse",
	description: "Reverte sua mensagem",
	aliases: ['revert'],
	execute(message, args) {
		var reverted = args.join(" ").split("").reverse().join("");
		if(!args[0]) return message.reply("você tem que adicionar um texto para ser revertido!");

		message.channel.send(reverted);
	},
}