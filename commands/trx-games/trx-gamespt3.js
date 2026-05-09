const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function trxgamespt3() {

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'trx-games') {
      if  (interaction.options.get("games").value === 'SF6') {
          await interaction.reply(`## Street Fighter 6
To activate the game make a ticket in <#1212152967894016050>

Have a game request? Go to <#1287940554105032705> and make a suggestion.

Prices: <#1287938873371918387>
Game Version: [Build 17612776](https://steamdb.info/patchnotes/17612776/)
Game Files: https://drive.google.com/file/d/1uf7ciTnlNBe7ZFLYCon6lbKi5xJ9aOc5/view?usp=sharing`);
const channel = client.channels.cache.get('1100195387609989240');
        const SF6log = {
          type: `rich`,
          color: 16763904,
          title: `Command Log for </trx-games:1291045039149027348>:`,
          description: `<@${interaction.member.id}> has used the </trx-games:1291045039149027348> in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
          timestamp: new Date().toISOString(),
          footer: {
            text: 'Powered by TRX',
            icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
          },
        };
        channel.send({ embeds: [SF6log] });
  }}
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'trx-games') {
        if  (interaction.options.get("games").value === 'KTJL') {
            await interaction.reply(`## Suicide Squad Kill the Justice League
To activate the game make a ticket in <#1212152967894016050>
      
Have a game request? Go to <#1287940554105032705> and make a suggestion.
      
Prices: <#1287938873371918387>
Game Version: [Build 17223101](https://steamdb.info/patchnotes/17223101/)
Game Files: https://drive.google.com/file/d/1CDqNWUQ6HuTAE1kvxrZixrcPuy03f2o_/view?usp=sharing`);
    const channel = client.channels.cache.get('1100195387609989240');
        const KTJLlog = {
            type: `rich`,
            color: 16763904,
            title: `Command Log for </trx-games:1291045039149027348>:`,
            description: `<@${interaction.member.id}> has used the </trx-games:1291045039149027348> in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
            timestamp: new Date().toISOString(),
            footer: {
                text: 'Powered by TRX',
                icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
            },
            };
            channel.send({ embeds: [KTJLlog] });
    }}
    })

}

module.exports = trxgamespt3
client.login(process.env.TOKEN);