var emojis = ["<:wavetato:759888504732778517>", "<:tadatato:759888504434982933>", "<:shadetato:759888500144472075>", "<:popcorntato:759888504540627004>", "<:pingtato:759888503050993694>", "<:owotato:759888503244587058>", "<:mcoroa:759888533983854642>", "<:mcara:759888533594439720>", "<:hearty_eyes:759888506188464218>", "<:ewtato:759888496344825927>", "<:cooltato:759888493215350786>", "<:christato:759888496147038322>", "<:byetato:759888498437521439>", "<:blobowo:759888494805516298>", "<a:wobbletato:759888506415087677>", "<a:triggeredtato:759888514338127902>", "<a:infinite:759888503369760796>", "<a:hidingtato:759888535389470801>"];

module.exports = {
	name: 'emoji',
	description: "Use para enviar um emoji aleatório.",
	execute(message, args) {
		var randomoji = Math.floor(Math.random() * emojis.length);
		message.channel.send(emojis[randomoji]);
		message.delete(); 
	},                                                         
};