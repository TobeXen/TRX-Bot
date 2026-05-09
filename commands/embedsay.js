const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function embedsay() {
client.on('messageCreate', message => {
    if (message.content.startsWith(`${process.env.PREFIX}embedsay`)) {
      message.delete()
        if (message.author.bot) return;
        const SayMessage = message.content.slice(11).trim();
        const embedsay = {
  type: `rich`,
          author: {
      name: message.author.tag,
      icon_url: ``,
    },
	color: 16763904,
	title: ``,
	description: SayMessage,
	footer: {
		text: 'Powered by TRX • https://discord.gg/veBQPXGVxN',
		icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
	},
};
message.channel.send({ embeds: [embedsay] });
    }
});
}

module.exports = embedsay
client.login(process.env.TOKEN);