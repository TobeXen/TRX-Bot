const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function TRXDiscord() {
client.on('messageCreate', message => {
  if(/\bTRX Discord\b|\bTRX Server\b/i.test(message.content)) {
    if (message.author.id === client.user.id) return;
      message.reply({ content: `You said **${message.content}**?

TRX Discord link: https://discord.gg/veBQPXGVxN`});
    }
  }
)
}

module.exports = TRXDiscord
client.login(process.env.TOKEN);