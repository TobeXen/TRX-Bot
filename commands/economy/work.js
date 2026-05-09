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

function work() {
    client.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;
      
        if (interaction.commandName === 'work') {
            // Generate a random amount of money
            const amount = Math.floor(Math.random() * 150) + 50;
            // Update the balance in the JSON file
            const newBalance = economy.addBalance(interaction.user.id, amount);

            const workEmbed = {
                type: `rich`,
                color: 16763904,
                title: `🛠️ Shift Complete`,
                description: `## Earnings: **${amount}** coins\nYour total balance is now **${newBalance}** coins.`,
                footer: {
                    text: 'Powered by TRX • https://discord.gg/veBQPXGVxN',
                    icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
                },
            };

            await interaction.reply({ embeds: [workEmbed] });

            const channel = client.channels.cache.get('1100195387609989240');
            const log = {
                type: `rich`,
                color: 16763904,
                title: `Command Log for </work:1502583833281822775>:`,
                description: `<@${interaction.member.id}> has used the </work:1502583833281822775> in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
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

module.exports = work;
client.login(process.env.TOKEN);