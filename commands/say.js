const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function say() {
  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'say') {
      const SayMessage = interaction.options.get("promt").value;
      await interaction.reply({content: `${SayMessage}`})
      const channel = client.channels.cache.get('1100195387609989240');
      const saylog = {
        type: `rich`,
        color: 16763904,
        title: `Command Log for </say:1098029846917042194>:`,
        description: `<@${interaction.member.id}> has used the </say:1098029846917042194> and said ${SayMessage} in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
        timestamp: new Date().toISOString(),
        footer: {
          text: 'Powered by TRX',
          icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
        },
      };
      channel.send({ embeds: [saylog] });
    }
});
}

module.exports = say
client.login(process.env.TOKEN);