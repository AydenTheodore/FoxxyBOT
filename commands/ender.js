module.exports = {
	name: "ender",
	description: "Traduza algo para a língua Ender",
	aliases: ['enderize'],
	execute(message, args) {
		var normal = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h","H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];
		var ender = ["i", "I", "v", "V", "p", "P", "j", "J", "a", "A", "b", "B", "s", "S", "h", "H", "o", "O", "w", "W", "g", "G", "t", "T", "k", "K", "f", "F", "e", "E", "z", "Z", "q", "Q", "c", "C", "l", "L", "x", "X", "u", "U", "r", "R", "d", "D", "m", "M", "n", "N", "y", "Y"];
		if(!args[0]) return message.reply("você tem que incluir um texto para traduzir!");
		var text = args.join(" ").split("").join("");

		for(var i = 0; i < normal.lenght; i++) { //go through each element
			if(text.includes(normal[i])) { //if they match...
				 text = text + ender[i]; // then you get it!
			}
		}

		message.channel.send(text);
	},
}