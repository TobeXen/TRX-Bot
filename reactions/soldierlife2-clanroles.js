const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, REST, Routes } = require('discord.js');
require('dotenv').config();
const client = new Client({ intents: [ 
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,]});

function clanroles() {
client.on('interactionCreate', async interaction => {
    if (interaction.isButton()) {
        const buttonID = interaction.customId;
        if (buttonID === 'marinebutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('1184548721376120952')) { // if they already have the role
                member.roles.remove('1184548721376120952'); // remove it
                return interaction.reply({
                    content: 'Successfully removed <@&1184548721376120952>!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('1184548721376120952'); // add it
                return interaction.reply({
                    content: 'Successfully added <@&1184548721376120952>!',
                    ephemeral: true
                })
            }
        }
      if (buttonID === 'piratebutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('933474418372513863')) { // if they already have the role
                member.roles.remove('933474418372513863'); // remove it
                return interaction.reply({
                    content: 'Successfully removed <@&933474418372513863>!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('933474418372513863'); // add it
                return interaction.reply({
                    content: 'Successfully added <@&933474418372513863>',
                    ephemeral: true
                })
            }
        }
    }
});

  client.on('messageCreate', message => {
  if (message.content === `${process.env.PREFIX}101100100110011011010101010101010101010010`) {
    message.delete()
    const clanrolem = {
  type: `rich`,
	color: 16763904,
	title: `Role:`,
	description: `Pick your preferred roles!`,
	footer: {
		text: 'Powered by TRX',
		icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
	},
};
    const clanroleb = new ActionRowBuilder()
    .addComponents(
				new ButtonBuilder()
          .setCustomId('marinebutton')
          .setLabel('Marine')
					.setStyle(ButtonStyle.Success),
				new ButtonBuilder()
          .setCustomId('piratebutton')
          .setLabel('Pirate')
					.setStyle(ButtonStyle.Danger),
				);
message.channel.send({ embeds: [clanrolem], components: [clanroleb] });
  }
})
}

module.exports = clanroles
client.login(process.env.TOKEN);