const sad = "<:sad:754838629536497797>";
const heartyeyes = "<:hearty_eyes:754846478794489926>";

module.exports = {
	name: 'react',
	description: "Reagirei da maneira que desejar.",
	execute(message, args) {
		message.react(args.join(''));
	},
};