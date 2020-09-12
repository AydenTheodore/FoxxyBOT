const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./config.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.login(token);

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (message.content.startsWith(`${prefix}say`)) {
    message.delete();
    message.channel.send(message.content.replace(`${prefix}say`, ''));
  } else 
  if (message.content === (`${prefix}serverdata`)) {
    message.channel.send(`Nome do servidor : ${message.guild.name}\nTotal de membros: ${message.guild.memberCount}\nData de criação: ${message.guild.createdAt}\nRegião: ${message.guild.region}`);
  } else 
  if (message.content === (`${prefix}userdata`)) {
      message.channel.send(`Seu nome de usuário: ${message.author.username}\nSeu ID: ${message.author.id}\nAvatar: ${message.author.displayAvatarURL()}`);
  } else 
  if (message.content.startsWith(`${prefix}clear`)) {
    const amount = parseInt(args[0]) + 1;
    if (isNaN(amount)) {
      return message.reply('esse não parece ser um número válido.');
      } else if (amount <= 1 || amount > 100) {
      return message.reply('você tem que colocar um número entre 1 e 99.');
    }
    message.channel.bulkDelete(amount, true).catch(err => {
      console.error(err);
      message.channel.send('Houve um erro tentando apagar mensagens neste canal!');
    });
    message.reply(`eu deletei ${amount} mensagens, conforme pediu.`);
  }
});
