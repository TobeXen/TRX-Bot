const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function bankai() {
  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'bankai') {
      const users = interaction.options.get("user").value;
  let gifs = [
  'https://c.tenor.com/sAKepudEgaAAAAAC/bankai-bleach.gif',
  'https://c.tenor.com/UPVOb9kg6SQAAAAd/anime-bleach.gif',
  'https://c.tenor.com/ukmiPAn5KT8AAAAd/ichigo-bleach.gif',
  'https://c.tenor.com/qsdqhlumpMYAAAAC/anime-bankai.gif',
  'https://c.tenor.com/xiYpkstw-_QAAAAd/bankai.gif',
  'https://c.tenor.com/rSbGnvoC59kAAAAC/toshiro-ice.gif',
  'https://c.tenor.com/TdhPUmsti28AAAAC/bankai-bleach.gif',
  'https://c.tenor.com/yMRpdoR-spMAAAAC/bankai-bleach.gif',
  'https://c.tenor.com/zyueNIJUmuMAAAAC/anime-bankai.gif',
  'https://c.tenor.com/Z6dVl_sP8twAAAAC/pxoo-kenpachi.gif',
  'https://c.tenor.com/1VkPT5WgUJcAAAAC/bleach-bleach-anime.gif',
  'https://c.tenor.com/XVGhWO0LK10AAAAd/aizen-bleach.gif',
  'https://c.tenor.com/YRrBTVYWCLIAAAAC/bleach-kisuke.gif',
  'https://c.tenor.com/Kn1vuHbD7ZIAAAAd/bankai-sword.gif',
  'https://c.tenor.com/YJhw8X5C8s0AAAAC/komamura-bankai-bleach.gif',
  'https://c.tenor.com/gGz0skFTE8QAAAAd/yhwach-bleach.gif',
];
  let randomgifs = gifs[Math.floor(Math.random() * gifs.length)];
  const bankai = {
  type: `rich`,
	color: 16763904,
	title: ``,
	description: `<@${interaction.member.id}> "BANKAI!!!!! It's over ${users}"`,
    image: {
          url: `${randomgifs}`,
    },
	footer: {
		text: 'Powered by TRX • https://discord.gg/veBQPXGVxN',
		icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
	},
};
await interaction.reply({ embeds: [bankai] });  
const channel = client.channels.cache.get('1100195387609989240');
const bankailog = {
  type: `rich`,
  color: 16763904,
  title: `Command Log for </bankai:1098029846917042186>:`,
  description: `<@${interaction.member.id}> has used the </bankai:1098029846917042186> against ${users} in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
  timestamp: new Date().toISOString(),
  footer: {
    text: 'Powered by TRX',
    icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
  },
};
channel.send({ embeds: [bankailog] });
}
})
}

module.exports = bankai
client.login(process.env.TOKEN);