const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,]});

function sufionjoke() {


  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'sufionjoke') {
    
    axios
        .get('https://icanhazdadjoke.com/', {
          headers: {
            'Accept': 'application/json',
            "User-Agent": "axios 0.21.1"
          }
        })
        .then((res) => {
          const joke = res.data.joke;
          interaction.reply(`${joke}`);
          const channel = client.channels.cache.get('1100195387609989240');
          const sufionjokelog = {
            type: `rich`,
            color: 16763904,
            title: `Command Log for </sufionjoke:1098029846917042189>:`,
            description: `<@${interaction.member.id}> has used the </sufionjoke:1098029846917042189> in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
            timestamp: new Date().toISOString(),
            footer: {
              text: 'Powered by TRX',
              icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
            },
          };
          channel.send({ embeds: [sufionjokelog] });
        })
        .catch((err) => {
          {
            console.error('ERR:', err);
          }
        });
      }
  });
}

module.exports = sufionjoke
client.login(process.env.TOKEN);