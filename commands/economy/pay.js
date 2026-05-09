const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const economy = require('../../economy');
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function pay() {
    client.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;
      
        if (interaction.commandName === 'pay') {
            // Get the user and amount from the slash command options
            const target = interaction.options.getUser('target');
            const amount = interaction.options.getInteger('amount');

            // Validation checks
            const senderBal = economy.getBalance(interaction.user.id);
            if (senderBal < amount || amount <= 0) {
                return interaction.reply({ content: '❌ You do not have enough coins or the amount is invalid!', ephemeral: true });
            }

            if (target.id === interaction.user.id) {
                return interaction.reply({ content: '❌ You cannot pay yourself!', ephemeral: true });
            }

            // Subtract from sender, add to target
            economy.addBalance(interaction.user.id, -amount);
            economy.addBalance(target.id, amount);

            const payEmbed = {
                type: `rich`,
                color: 16763904,
                title: `✅ Payment Sent`,
                description: `## Transfer Details\nSent **${amount}** coins to <@${target.id}>!`,
                footer: {
                    text: 'Powered by TRX • https://discord.gg/veBQPXGVxN',
                    icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
                },
            };

            await interaction.reply({ embeds: [payEmbed] });

            const channel = client.channels.cache.get('1100195387609989240');
            const log = {
                type: `rich`,
                color: 16763904,
                title: `Command Log for </pay:1502583833281822776>:`,
                description: `<@${interaction.member.id}> has used the </pay:1502583833281822776> in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
                timestamp: new Date().toISOString(),
                footer: {
                    text: 'Powered by TRX',
                    icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
                },
            };
            channel.send({ embeds: [log] });
        }
    })
}

module.exports = pay;
client.login(process.env.TOKEN);