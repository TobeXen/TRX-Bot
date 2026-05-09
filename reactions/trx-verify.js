const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, REST, Routes } = require('discord.js');
require('dotenv').config();
const client = new Client({ intents: [ 
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,]});

function verify() {
  client.on('interactionCreate', async interaction => {
    if (interaction.isButton()) {
        const buttonID = interaction.customId;
        if (buttonID === 'verifybutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
  if (member.roles.cache.has('907630360924389478')) { // if they already have the role
                member.roles.remove('907630360924389478'); // remove it
                return interaction.reply({
                    content: 'Successfully removed Verify role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('907630360924389478'); // add it
                return interaction.reply({
                    content: 'Successfully added Verify role!',
                    ephemeral: true
                })
            }
        }
    }
  });
  
  client.on('messageCreate', message => {
  if (message.content === `${process.env.PREFIX}1010101010001300101010010101010101001010101010101`) {
    message.delete()
    const verifym = {
      type: `rich`,
      color: 16763904,
      title: `Role:`,
      description: `✅ = Verify`,
      footer: {
        text: 'Powered by TRX',
        icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
      },
    };
  
  const verifyb = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
          .setCustomId('verifybutton')
          .setEmoji('✅')
          .setStyle(ButtonStyle.Secondary)
    )
    
  message.channel.send({ embeds: [verifym], components: [verifyb] });
  }
  })
}

module.exports = verify
client.login(process.env.TOKEN);