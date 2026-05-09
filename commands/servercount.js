const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function servercount() {
  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'servercount') {
    const servercount = {
  type: `rich`,
	color: 16763904,
	title: `Server Count:`,
	description: `<@${client.user.id}> is currently in **${client.guilds.cache.size}** servers!`,
	footer: {
		text: 'Powered by TRX • https://discord.gg/veBQPXGVxN',
		icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
	},
};
await interaction.reply({ embeds: [servercount] });
const channel = client.channels.cache.get('1100195387609989240');
          const servercountlog = {
            type: `rich`,
            color: 16763904,
            title: `Command Log for </servercount:1098029846917042192>:`,
            description: `<@${interaction.member.id}> has used the </servercount:1098029846917042192> in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
            timestamp: new Date().toISOString(),
            footer: {
              text: 'Powered by TRX',
              icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
            },
          };
          channel.send({ embeds: [servercountlog] });
  }
})
}

module.exports = servercount
client.login(process.env.TOKEN);