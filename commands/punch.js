const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function punch() {
  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'punch') {
      const users = interaction.options.get("user").value;
  let gifs = [
  'https://cdn.weeb.sh/images/B1rZP6b-z.gif',
  'https://cdn.weeb.sh/images/B1-ND6WWM.gif',
  'https://cdn.weeb.sh/images/HJqSvaZ-f.gif',
  'https://cdn.weeb.sh/images/SJR-PpZbM.gif',
  'https://cdn.weeb.sh/images/BkdyPTZWz.gif',
  'https://cdn.weeb.sh/images/SJvGvT-bf.gif',
  'https://cdn.weeb.sh/images/BJg7wTbbM.gif',
  'https://cdn.weeb.sh/images/SyYbP6W-z.gif',
  'https://cdn.weeb.sh/images/HJfGPTWbf.gif',
  'https://cdn.weeb.sh/images/SkFLH129z.gif',
  'https://cdn.weeb.sh/images/SJAfH5TOz.gif',
  'https://media.tenor.com/0gbYEN-8SEwAAAAS/anime-all-might.gif',
  'https://media.tenor.com/kw5lYGbw8oAAAAAC/one-punch-man.gif',
  'https://cdn.weeb.sh/images/rJHLDT-Wz.gif',
];
  let randomgifs = gifs[Math.floor(Math.random() * gifs.length)];
  const punch = {
  type: `rich`,
	color: 16763904,
	title: ``,
	description: `<@${interaction.member.id}> punched ${users}`,
    image: {
          url: `${randomgifs}`,
    },
	footer: {
		text: 'Powered by TRX • https://discord.gg/veBQPXGVxN',
		icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
	},
};
await interaction.reply({ embeds: [punch] });  
const channel = client.channels.cache.get('1100195387609989240');
const punchlog = {
  type: `rich`,
  color: 16763904,
  title: `Command Log for </punch:1098029846917042187>:`,
  description: `<@${interaction.member.id}> has used the </punch:1098029846917042187> against ${users} in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
  timestamp: new Date().toISOString(),
  footer: {
    text: 'Powered by TRX',
    icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
  },
};
channel.send({ embeds: [punchlog] });

  }
})
}

module.exports = punch
client.login(process.env.TOKEN);