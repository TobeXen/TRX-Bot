const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, REST, Routes } = require('discord.js');
require('dotenv').config();
const client = new Client({ intents: [ 
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,]});

function invite() {
    client.on('interactionCreate', async interaction => {
        if (interaction.isButton()) {
            const buttonID = interaction.customId;
            if (buttonID === 'invitebutton') { // get button by customId set below
                interaction.reply({
                    content: `Thank you for inviting <@${client.user.id}>`,
                    ephemeral: true
                })
            }
        }
      });

  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'invite') {
    const invitem = {
      type: `rich`,
      color: 16763904,
      title: `Invitation!`,
      description: `If you want to support TRX and/or want the fun commands that come with <@${client.user.id}> please invite the bot to your server!`,
      footer: {
        text: 'Powered by TRX • https://discord.gg/veBQPXGVxN',
        icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
      },
    };
  
  const inviteb = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
          .setLabel("Invite!")
          .setURL('https://discord.com/api/oauth2/authorize?client_id=961425434392813578&permissions=65416580824311&scope=bot')
          .setStyle(ButtonStyle.Link)
    )
    await interaction.reply({ embeds: [invitem], components: [inviteb] });
    const channel = client.channels.cache.get('1100195387609989240');
    const invitelog = {
      type: `rich`,
      color: 16763904,
      title: `Command Log for </invite:1099078205463339008>:`,
      description: `<@${interaction.member.id}> has used the </invite:1099078205463339008> in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
      timestamp: new Date().toISOString(),
      footer: {
        text: 'Powered by TRX',
        icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
      },
    };
    channel.send({ embeds: [invitelog] });
  }
  })
}

module.exports = invite
client.login(process.env.TOKEN);