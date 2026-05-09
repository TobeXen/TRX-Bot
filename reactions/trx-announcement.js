const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, REST, Routes } = require('discord.js');
require('dotenv').config();
const client = new Client({ intents: [ 
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,]});

function announcement() {
client.on('interactionCreate', async interaction => {
    if (interaction.isButton()) {
        const buttonID = interaction.customId;
        if (buttonID === 'mainabutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('980202512189648946')) { // if they already have the role
                member.roles.remove('980202512189648946'); // remove it
                return interaction.reply({
                    content: 'Successfully removed Main Announcements role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('980202512189648946'); // add it
                return interaction.reply({
                    content: 'Successfully added Main Announcements role!',
                    ephemeral: true
                })
            }
        }
      if (buttonID === 'otherabutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('980202542564794418')) { // if they already have the role
                member.roles.remove('980202542564794418'); // remove it
                return interaction.reply({
                    content: 'Successfully removed Other Announcements role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('980202542564794418'); // add it
                return interaction.reply({
                    content: 'Successfully added Other Announcements role!',
                    ephemeral: true
                })
            }
        }
      if (buttonID === 'giveawaybutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('982068626494484522')) { // if they already have the role
                member.roles.remove('982068626494484522'); // remove it
                return interaction.reply({
                    content: 'Successfully removed Giveaway role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('982068626494484522'); // add it
                return interaction.reply({
                    content: 'Successfully added Giveaway role!',
                    ephemeral: true
                })
            }
        }
      if (buttonID === 'eventbutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('984127021732986910')) { // if they already have the role
                member.roles.remove('984127021732986910'); // remove it
                return interaction.reply({
                    content: 'Successfully removed Event role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('984127021732986910'); // add it
                return interaction.reply({
                    content: 'Successfully added Event role!',
                    ephemeral: true
                })
            }
        }
    }
});

  client.on('messageCreate', message => {
  if (message.content === `${process.env.PREFIX}101010110100011001010101010101010101010101`) {
    message.delete()
    const announcementm = {
  type: `rich`,
	color: 16763904,
	title: `Role:`,
	description: `🎉 - Main Announcements
🤔 - Other Announcements
💀 - Giveaway
📌 - Event`,
	footer: {
		text: 'Powered by TRX',
		icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
	},
};
    const announcementb = new ActionRowBuilder()
    .addComponents(
				new ButtonBuilder()
          .setCustomId('mainabutton')
          .setEmoji('🎉')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
          .setCustomId('otherabutton')
          .setEmoji('🤔')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
          .setCustomId('giveawaybutton')
          .setEmoji('💀')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
          .setCustomId('eventbutton')
          .setEmoji('📌')
					.setStyle(ButtonStyle.Secondary),
      );
message.channel.send({ embeds: [announcementm], components: [announcementb] });
  }
})
}

module.exports = announcement
client.login(process.env.TOKEN);