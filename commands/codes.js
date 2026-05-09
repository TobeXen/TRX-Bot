const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function codes() {
  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'animegamecodes') {
    const codes = {
  type: `rich`,
	color: 16763904,
	title: `Codes`,
  description: `Project Slayers: https://www.gfinityesports.com/roblox/project-slayers-codes/
  Project New World: https://www.pockettactics.com/project-new-world/codes
Blox Fruits: https://www.pockettactics.com/blox-fruits/codes
Grand Piece Online: https://www.dexerto.com/roblox/roblox-grand-piece-online-gpo-codes-rerolls-devil-fruit-stats-1742384/
Shindo Life: https://progameguides.com/roblox/roblox-shindo-life-codes/
Reaper 2: https://www.pockettactics.com/reaper-2/codes
Kaizen: https://tryhardguides.com/kaizen-codes/
Roblox is Unbreakable: None ATM
King Legacy: https://progameguides.com/roblox/roblox-king-legacy-codes/ `,
	footer: {
		text: 'Powered by TRX',
		icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
	},
};
await interaction.reply({ embeds: [codes] })
const channel = client.channels.cache.get('1100195387609989240');
          const codeslog = {
            type: `rich`,
            color: 16763904,
            title: `Command Log for </animegamecodes:1098029847109976195>:`,
            description: `<@${interaction.member.id}> has used the </animegamecodes:1098029847109976195> in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
            timestamp: new Date().toISOString(),
            footer: {
              text: 'Powered by TRX',
              icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
            },
          };
          channel.send({ embeds: [codeslog] });
  }
  })
  }

module.exports = codes
client.login(process.env.TOKEN);