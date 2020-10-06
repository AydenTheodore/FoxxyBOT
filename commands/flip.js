const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
// Start with the character '!'
const OFFSET = '!'.charCodeAt(0);

module.exports = {
	name: 'flip',
	description: 'Inverte sua mensagem!',
	aliases: ['invert'],
	usage: '<message>',
	execute(message, args) {
		if (!args.length) return message.reply("você tem que enviar um texto para inverter!");

		message.channel.send(args.join(' ').split('').map(c => c.charCodeAt(0) - OFFSET).map(c => mapping[c] || ' ').reverse().join(''));
	},
};