module.exports = {
	name: "rate",
	description: "Avalie algo ou alguém!",
	execute(message, args) {
		let ratus = message.mentions.members.first() || args.slice(0).join(" ");
		if(!ratus) return message.reply("mencione algo/alguém para avaliar!");

		let rates = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

		let result = Math.floor((Math.random() * rates.length));

		let perfect = ["718176833102807041", "707197370898579496"];
		for(var i = 0; i < perfect.length; i++){
			if(ratus.id === perfect[i]) {
				return message.channel.send(`Eu dou nota **∞** para ${ratus}. Perfeição encarnada, baby!`)
			}
		}

		if(isNaN(ratus)){
			message.channel.send(`Eu dou nota **${result}** para **__${ratus}__**`);
		} else
		message.channel.send(`Eu dou nota **${result}** para ${ratus}`);
	},
}