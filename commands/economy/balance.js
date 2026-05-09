const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const economy = require('../../economy'); // Path corrected to root if that's where you put it
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function balance() {
    client.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;
      
        if (interaction.commandName === 'balance') {
            // If a user was mentioned in options, use them; otherwise, use the person who typed the command
            const target = interaction.options.getUser('user') || interaction.user;
            const userBalance = economy.getBalance(target.id);
            
            const balEmbed = {
                type: `rich`,
                color: 16763904,
                title: `💰 Wallet Balance`,
                description: `## <@${target.id}>\nCurrent balance: **${userBalance}** coins!`,
                thumbnail: { url: target.displayAvatarURL({ dynamic: true }) }, // Adds PFP
                footer: {
                    text: 'Powered by TRX • https://discord.gg/veBQPXGVxN',
                    icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
                },
            };

            await interaction.reply({ embeds: [balEmbed] });

            const channel = client.channels.cache.get('1100195387609989240');
            const log = {
                type: `rich`,
                color: 16763904,
                title: `Command Log for </balance:1502583833281822774>:`,
                description: `<@${interaction.member.id}> has used the </balance:1502583833281822774> in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
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

module.exports = balance;
client.login(process.env.TOKEN);