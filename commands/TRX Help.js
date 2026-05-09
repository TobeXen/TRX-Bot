const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function TRXhelp() {
client.on('messageCreate', message => {
  if(/\bhelp with trx\b|\btrx help\b|\bhelp on trx\b|\bhelp trx\b/i.test(message.content)) {
    if (message.author.id === client.user.id) return;
      message.reply({ content: `You said **${message.content}**?

Go to https://discord.com/channels/785700232859746345/1212152967894016050`});
    }
  }
)
}

module.exports = TRXhelp
client.login(process.env.TOKEN);