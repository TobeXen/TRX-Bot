const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, REST, Routes } = require('discord.js');
require('dotenv').config();
const client = new Client({ intents: [ 
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,]});

function gameroles() {
  client.on('interactionCreate', async interaction => {
    if (interaction.isButton()) {
        const buttonID = interaction.customId;
        if (buttonID === 'apexpbutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('1027315502114144307')) { // if they already have the role
                member.roles.remove('1027315502114144307'); // remove it
                return interaction.reply({
                    content: 'Successfully removed Apex Legends Player role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('1027315502114144307'); // add it
                return interaction.reply({
                    content: 'Successfully added Apex Legends Player role!',
                    ephemeral: true
                })
            }
        }
      if (buttonID === 'rlpbutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('1027316013064265758')) { // if they already have the role
                member.roles.remove('1027316013064265758'); // remove it
                return interaction.reply({
                    content: 'Successfully removed Rocket League Player role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('1027316013064265758'); // add it
                return interaction.reply({
                    content: 'Successfully added Rocket League Player role!',
                    ephemeral: true
                })
            }
        }
      if (buttonID === 'pokemonpbutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('1027316115157819555')) { // if they already have the role
                member.roles.remove('1027316115157819555'); // remove it
                return interaction.reply({
                    content: 'Successfully removed Pokemon Player role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('1027316115157819555'); // add it
                return interaction.reply({
                    content: 'Successfully added Pokemon Player role!',
                    ephemeral: true
                })
            }
        }
      if (buttonID === 'minecraftpbutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('1027316135164645456')) { // if they already have the role
                member.roles.remove('1027316135164645456'); // remove it
                return interaction.reply({
                    content: 'Successfully removed Minecraft Player role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('1027316135164645456'); // add it
                return interaction.reply({
                    content: 'Successfully added Minecraft Player role!',
                    ephemeral: true
                })
            }
        }
      if (buttonID === 'robloxpbutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('1027316138310385714')) { // if they already have the role
                member.roles.remove('1027316138310385714'); // remove it
                return interaction.reply({
                    content: 'Successfully removed Roblox Player role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('1027316138310385714'); // add it
                return interaction.reply({
                    content: 'Successfully added Roblox Player role!',
                    ephemeral: true
                })
            }
        }
    }
});

  client.on('messageCreate', message => {
  if (message.content === `${process.env.PREFIX}010110100110010101001010100101001010100101`) {
    message.delete()
    const gamingm = {
  type: `rich`,
	color: 16763904,
	title: `Role:`,
	description: `🔫 - Apex Legends Player
🚙 - Rocket League Player
🐲 - Pokemon Player
🌴 - Minecraft Player
🔳 - Roblox Player`,
	footer: {
		text: 'Powered by TRX',
		icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
	},
};
    const gamingb = new ActionRowBuilder()
    .addComponents(
				new ButtonBuilder()
          .setCustomId('apexpbutton')
          .setEmoji('🔫')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
          .setCustomId('rlpbutton')
          .setEmoji('🚙')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
          .setCustomId('pokemonpbutton')
          .setEmoji('🐲')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
          .setCustomId('minecraftpbutton')
          .setEmoji('🌴')
					.setStyle(ButtonStyle.Secondary),
        new ButtonBuilder()
          .setCustomId('robloxpbutton')
          .setEmoji('🔳')
					.setStyle(ButtonStyle.Secondary),
      );
message.channel.send({ embeds: [gamingm], components: [gamingb] });
  }
})
  }

module.exports = gameroles
client.login(process.env.TOKEN);