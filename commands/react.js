const sad = "<:sad:754838629536497797>";
const heartyeyes = "<:hearty_eyes:754846478794489926>";

module.exports = {
	name: 'react',
	description: "Reagirei da maneira que desejar.",
	execute(message, args) {
		if (args[0] === 'sad') {
			message.react("<:sad:754838629536497797>");
		} else
		if (args[0] === 'hearty_eyes') {
			message.react("<:hearty_eyes:754846478794489926>");
		} else
		message.react(args.join(''));
	},
};
