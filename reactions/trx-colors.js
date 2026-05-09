const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, REST, Routes } = require('discord.js');
require('dotenv').config();
const client = new Client({ intents: [ 
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,]});

function colors() {
client.on('interactionCreate', async interaction => {
    if (interaction.isButton()) {
        const buttonID = interaction.customId;
        if (buttonID === 'yellowbutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('986634526618955887')) { // if they already have the role
                member.roles.remove('986634526618955887'); // remove it
                return interaction.reply({
                    content: 'Successfully removed Yellow role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('986634526618955887'); // add it
                return interaction.reply({
                    content: 'Successfully added Yellow role!',
                    ephemeral: true
                })
            }
        }
      if (buttonID === 'redbutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('986634731225501787')) { // if they already have the role
                member.roles.remove('986634731225501787'); // remove it
                return interaction.reply({
                    content: 'Successfully removed Red role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('986634731225501787'); // add it
                return interaction.reply({
                    content: 'Successfully added Red role!',
                    ephemeral: true
                })
            }
        }
      if (buttonID === 'greenbutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('986634787563397120')) { // if they already have the role
                member.roles.remove('986634787563397120'); // remove it
                return interaction.reply({
                    content: 'Successfully removed Green role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('986634787563397120'); // add it
                return interaction.reply({
                    content: 'Successfully added Green role!',
                    ephemeral: true
                })
            }
        }
      if (buttonID === 'purplebutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('986634790889459742')) { // if they already have the role
                member.roles.remove('986634790889459742'); // remove it
                return interaction.reply({
                    content: 'Successfully removed Purple role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('986634790889459742'); // add it
                return interaction.reply({
                    content: 'Successfully added Purple role!',
                    ephemeral: true
                })
            }
        }
      if (buttonID === 'bluebutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('986634793812901958')) { // if they already have the role
                member.roles.remove('986634793812901958'); // remove it
                return interaction.reply({
                    content: 'Successfully removed Blue role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('986634793812901958'); // add it
                return interaction.reply({
                    content: 'Successfully added Blue role!',
                    ephemeral: true
                })
            }
        }
      if (buttonID === 'orangebutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('986634796434350081')) { // if they already have the role
                member.roles.remove('986634796434350081'); // remove it
                return interaction.reply({
                    content: 'Successfully removed Orange role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('986634796434350081'); // add it
                return interaction.reply({
                    content: 'Successfully added Orange role!',
                    ephemeral: true
                })
            }
        }
      if (buttonID === 'whitebutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('986634799080960043')) { // if they already have the role
                member.roles.remove('986634799080960043'); // remove it
                return interaction.reply({
                    content: 'Successfully removed White role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('986634799080960043'); // add it
                return interaction.reply({
                    content: 'Successfully added White role!',
                    ephemeral: true
                })
            }
        }
      if (buttonID === 'brownbutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('986634802033754193')) { // if they already have the role
                member.roles.remove('986634802033754193'); // remove it
                return interaction.reply({
                    content: 'Successfully removed Brown role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('986634802033754193'); // add it
                return interaction.reply({
                    content: 'Successfully added Brown role!',
                    ephemeral: true
                })
            }
        }
      if (buttonID === 'blackbutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('986634804734857226')) { // if they already have the role
                member.roles.remove('986634804734857226'); // remove it
                return interaction.reply({
                    content: 'Successfully removed Black role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('986634804734857226'); // add it
                return interaction.reply({
                    content: 'Successfully added Black role!',
                    ephemeral: true
                })
            }
        }
    }
});

  client.on('messageCreate', message => {
  if (message.content === `${process.env.PREFIX}1011011011010100100100101010100101010`) {
    message.delete()
    const colorm = {
  type: `rich`,
	color: 16763904,
	title: `Role:`,
	description: `🟨 - Yellow
🟥 - Red
🟩 - Green
🟪 - Purple
🟦 - Blue
🟧 - Orange
⬜ - White
🟫 - Brown
⬛ - Black`,
	footer: {
		text: 'Powered by TRX',
		icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
	},
};
    const colorb = new ActionRowBuilder()
    .addComponents(
				new ButtonBuilder()
          .setCustomId('yellowbutton')
          .setEmoji('🟨')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
          .setCustomId('redbutton')
          .setEmoji('🟥')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
          .setCustomId('greenbutton')
          .setEmoji('🟩')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
          .setCustomId('purplebutton')
          .setEmoji('🟪')
					.setStyle(ButtonStyle.Secondary),
        new ButtonBuilder()
          .setCustomId('bluebutton')
          .setEmoji('🟦')
					.setStyle(ButtonStyle.Secondary),
      );
const colorb2 = new ActionRowBuilder()
.addComponents(
				new ButtonBuilder()
          .setCustomId('orangebutton')
          .setEmoji('🟧')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
          .setCustomId('whitebutton')
          .setEmoji('⬜')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
          .setCustomId('brownbutton')
          .setEmoji('🟫')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
          .setCustomId('blackbutton')
          .setEmoji('⬛')
					.setStyle(ButtonStyle.Secondary),
      );
message.channel.send({ embeds: [colorm], components: [colorb, colorb2] });
  }
})
}

module.exports = colors
client.login(process.env.TOKEN);