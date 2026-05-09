const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function kill() {
  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'kill') {
      const users = interaction.options.get("user").value;
  let gifs = [
  'https://c.tenor.com/NbBCakbfZnkAAAAC/die-kill.gif',
  'https://c.tenor.com/AGTqt-wXyiEAAAAC/nichijou-minigun.gif',
  'https://c.tenor.com/G4SGjQE8wCEAAAAC/mikey-tokyo.gif',
  'https://c.tenor.com/vK9H3WMBoogAAAAC/hxh-killua.gif',
  'https://media.tenor.com/JBjznqwlUAYAAAAC/naruto-kakashi.gif',
  'https://c.tenor.com/T65klyK2cXIAAAAC/gon-freecss.gif',
];
  let randomgifs = gifs[Math.floor(Math.random() * gifs.length)];

  const kill = {
  type: `rich`,
	color: 16763904,
	title: ``,
	description: `<@${interaction.member.id}> killed ${users}`,
    image: {
          url: `${randomgifs}`,
    },
	footer: {
		text: 'Powered by TRX • https://discord.gg/veBQPXGVxN',
		icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
	},
};
await interaction.reply({ embeds: [kill] });   
const channel = client.channels.cache.get('1100195387609989240');
const killlog = {
  type: `rich`,
  color: 16763904,
  title: `Command Log for </kill:1098029846917042191>:`,
  description: `<@${interaction.member.id}> has used the </kill:1098029846917042191> against ${users} in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
  timestamp: new Date().toISOString(),
  footer: {
    text: 'Powered by TRX',
    icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
  },
};
channel.send({ embeds: [killlog] });
  }
})
  }

module.exports = kill
client.login(process.env.TOKEN);