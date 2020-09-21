module.exports = {
	name: 'invite',
	description: 'Me convide para seu server!',
	execute(message, args) {
		const embed = {
		"title": "*Olá, eu sou o Foxxy, um bot criado por Error! Sans#5168*",
		"description": "\n[Me adicione](https://discord.com/api/oauth2/authorize?client_id=718176833102807041&permissions=67618886&scope=bot) no seu server!\nDúvidas ou sugestões? Entre no [server oficial](https://discord.io/EnderParadise)!\nUse -help para obter meus comandos!\n\n\n\n**(Dica: Membros do __server oficial__ podem receber funções exclusivas no bot!)**",
		"color": 16098851,
 		"timestamp": "2020-09-12T19:06:52.625Z",
		"footer": {
			"icon_url": "https://i.imgur.com/vFFzQHC.png",
			"text": "Made by Error! Sans#5168"
		},
		"thumbnail": {
			"url": "https://i.imgur.com/vFFzQHC.png"
		},
		"image": {
			"url": "https://i.imgur.com/BcHalO9.png"
		},
		"author": {
			"name": "Foxxy#8717",
			"url": "https://discord.com/channels/@me/718183048310423594",
			"icon_url": "https://i.imgur.com/BcHalO9.png"
		}
		};
		message.channel.send({ embed });
	},
};