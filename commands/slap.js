const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function slap() {
  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'slap') {
      const users = interaction.options.get("user").value;
  let gifs = [
  'https://media.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
  'https://media.giphy.com/media/gSIz6gGLhguOY/giphy.gif',
  'https://media.giphy.com/media/uG3lKkAuh53wc/giphy.gif',
];
  let randomgifs = gifs[Math.floor(Math.random() * gifs.length)];
  const slap = {
  type: `rich`,
	color: 16763904,
	title: ``,
	description: `<@${interaction.member.id}> slaped ${users}`,
    image: {
          url: `${randomgifs}`,
    },
	footer: {
		text: 'Powered by TRX • https://discord.gg/veBQPXGVxN',
		icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
	},
};
await interaction.reply({ embeds: [slap] });   
const channel = client.channels.cache.get('1100195387609989240');
          const slaplog = {
            type: `rich`,
            color: 16763904,
            title: `Command Log for </slap:1098029846917042188>:`,
            description: `<@${interaction.member.id}> has used the </slap:1098029846917042188> against ${users} in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
            timestamp: new Date().toISOString(),
            footer: {
              text: 'Powered by TRX',
              icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
            },
          };
          channel.send({ embeds: [slaplog] });
  }
})
}

module.exports = slap
client.login(process.env.TOKEN);