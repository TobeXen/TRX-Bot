const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function wiki() {
  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'animegamewiki') {
    const wiki = {
  type: `rich`,
	color: 16763904,
	title: `Wikis`,
  description: `Project Slayers: https://project-slayers.fandom.com/wiki/Project_Slayers_Wiki
Project New World: https://trello.com/b/nn8bpTB0/project-new-world
Blox Fruits: https://blox-fruits.fandom.com/wiki/Blox_Fruits
Grand Piece Online: https://grand-piece-online.fandom.com/wiki/Grand_Piece_Online_Wiki
Shindo Life: https://shindo-life-rell.fandom.com/wiki/Shindo_Life_Wiki
Reaper 2: https://reaper-2-roblox.fandom.com/wiki/Reaper_2_Roblox_Wiki
Kaizen: https://trello.com/b/Ak4omUkf/kaizen-trello
Roblox is Unbreakable: https://trello.com/b/INMhQrb2/roblox-is-unbreakable
King Legacy: https://king-legacy.fandom.com/wiki/King_Legacy_Wiki`,
	footer: {
		text: 'Powered by TRX',
		icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
	},
};
await interaction.reply({ embeds: [wiki] })
const channel = client.channels.cache.get('1100195387609989240');
const animegamewikilog = {
  type: `rich`,
  color: 16763904,
  title: `Command Log for </animegamewiki:1098029847109976194:`,
  description: `<@${interaction.member.id}> has used the </animegamewiki:1098029847109976194: in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
  timestamp: new Date().toISOString(),
  footer: {
    text: 'Powered by TRX',
    icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
  },
};
channel.send({ embeds: [animegamewikilog] });
  }
  })
  }

module.exports = wiki
client.login(process.env.TOKEN);