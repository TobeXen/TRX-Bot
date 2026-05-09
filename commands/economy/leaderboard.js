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

function leaderboard() {
    client.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;
      
        if (interaction.commandName === 'leaderboard') {
            const topUsers = economy.getTop();
            
            // Format the list: 1. User (Amount)
            let list = "";
            topUsers.forEach((user, index) => {
                const userId = user[0];
                const balance = user[1];
                list += `${index + 1}. <@${userId}> (**${balance}** coins)\n`;
            });

            const lbEmbed = {
                type: `rich`,
                color: 16763904,
                title: `🏆 Global Leaderboard`,
                description: `## Top 10 Richest Users\n${list}`,
                footer: {
                    text: 'Powered by TRX • https://discord.gg/veBQPXGVxN',
                    icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
                },
            };

            await interaction.reply({ embeds: [lbEmbed] });

            const channel = client.channels.cache.get('1100195387609989240');
            const log = {
                type: `rich`,
                color: 16763904,
                title: `Command Log for </leaderboard:1502590676217630792>:`,
                description: `<@${interaction.member.id}> has used the </leaderboard:1502590676217630792> in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
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

module.exports = leaderboard;
client.login(process.env.TOKEN);
