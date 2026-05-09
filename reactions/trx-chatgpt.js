const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, REST, Routes } = require('discord.js');
require('dotenv').config();
const client = new Client({ intents: [ 
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,]});

function chatgpt() {
client.on('interactionCreate', async interaction => {
    if (interaction.isButton()) {
        const buttonID = interaction.customId;
        if (buttonID === 'chatgptbutton') { // get button by customId set below
            const member = interaction.member; // get member from the interaction - person who clicked the button
if (member.roles.cache.has('1065068176091643926')) { // if they already have the role
                member.roles.remove('1065068176091643926'); // remove it
                return interaction.reply({
                    content: 'Successfully removed ChatGPT Access!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('1065068176091643926'); // add it
                return interaction.reply({
                    content: 'Successfully added ChatGPT Access go to <#1065068731497197618> to use it!',
                    ephemeral: true
                })
            }
        }
    }
});

  client.on('messageCreate', message => {
  if (message.content === `${process.env.PREFIX}10101011010101010101010101010101010010001001110101`) {
    message.delete()
    const chatgptm = {
  type: `rich`,
	color: 16763904,
	title: `Role:`,
	description: `Press the button below to gain access the new TRX ChatGPT AI Discord Bot`,
	footer: {
		text: 'Powered by TRX',
		icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
	},
};
    const chatgptb = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
          .setCustomId('chatgptbutton')
					.setLabel('AI Access')
					.setStyle(ButtonStyle.Secondary),
			);
message.channel.send({ embeds: [chatgptm], components: [chatgptb] });
  }
})
}

module.exports = chatgpt
client.login(process.env.TOKEN);