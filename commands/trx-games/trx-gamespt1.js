const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function trxgamespt1() {

  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'trx-games') {
        if  (interaction.options.get("games").value === 'ACM') {
            await interaction.reply(`## Assassins Creed Mirage
To activate the game make a ticket in <#1212152967894016050>
  
Have a game request? Go to <#1287940554105032705> and make a suggestion.
  
Prices: <#1287938873371918387>
Game Version: [Build 17444354](https://steamdb.info/patchnotes/17444354/)
Game Files: https://drive.google.com/file/d/1QTcRrCHsYEfTWl0gd3YlkMcRp7XwZtfa/view?usp=sharing`);
  const channel = client.channels.cache.get('1100195387609989240');
          const ACMlog = {
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
          channel.send({ embeds: [ACMlog] });
    }}
  })

  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'trx-games') {
        if  (interaction.options.get("games").value === 'ACS') {
            await interaction.reply(`## Assassins Creed Shadows
To activate the game make a ticket in <#1212152967894016050>
  
Have a game request? Go to <#1287940554105032705> and make a suggestion.
  
Prices: <#1287938873371918387>
Game Version: [Build 18095944](https://steamdb.info/patchnotes/18095944/)
Game Files: https://drive.google.com/file/d/1YbzP0nA8suaWOjJsGtv7EKsEfLHamNyN/view?usp=sharing`);
  const channel = client.channels.cache.get('1100195387609989240');
          const ACSlog = {
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
          channel.send({ embeds: [ACSlog] });
    }}
  })

  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'trx-games') {
        if  (interaction.options.get("games").value === 'AFOP') {
            await interaction.reply(`## Avatar Frontiers of Pandora
To activate the game make a ticket in <#1212152967894016050>
  
Have a game request? Go to <#1287940554105032705> and make a suggestion.
  
Prices: <#1287938873371918387>
Game Version: [Build 17864554](https://steamdb.info/patchnotes/17864554/)
Game Files: https://drive.google.com/file/d/11gvnlhUs6KS-tA2dAGobJbl1aoX8rxTS/view?usp=sharing`);
  const channel = client.channels.cache.get('1100195387609989240');
          const AFOPlog = {
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
          channel.send({ embeds: [AFOPlog] });
    }}
  })

  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'trx-games') {
        if  (interaction.options.get("games").value === 'BMW') {
            await interaction.reply(`## Black Myth Wukong
To activate the game make a ticket in <#1212152967894016050>

Have a game request? Go to <#1287940554105032705> and make a suggestion.

Prices: <#1287938873371918387>
Game Version: [Build 18095325](https://steamdb.info/patchnotes/18095325/)
Game Files: https://drive.google.com/file/d/1sHj0FvdYkuyXETrARCaAhry4GBC5SaoA/view?usp=sharing`);
const channel = client.channels.cache.get('1100195387609989240');
          const BMWlog = {
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
          channel.send({ embeds: [BMWlog] });
    }}
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'trx-games') {
      if  (interaction.options.get("games").value === 'DSK') {
          await interaction.reply(`## Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles
To activate the game make a ticket in <#1212152967894016050>

Have a game request? Go to <#1287940554105032705> and make a suggestion.

Prices: <#1287938873371918387>
Game Version: [Build 10714413](https://steamdb.info/patchnotes/10714413/)
Game Files: https://drive.google.com/file/d/1oePblFrZgrpPYbqQeZ5gvNpdOrxaAxTy/view?usp=sharing`);
const channel = client.channels.cache.get('1100195387609989240');
        const DSKlog = {
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
        channel.send({ embeds: [DSKlog] });
  }}
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'trx-games') {
        if  (interaction.options.get("games").value === 'DD2') {
            await interaction.reply(`## Dragon's Dogma 2
To activate the game make a ticket in <#1212152967894016050>

Have a game request? Go to <#1287940554105032705> and make a suggestion.

Prices: <#1287938873371918387>
Game Version: [Build 17948110](https://steamdb.info/patchnotes/17948110/)
Game Files: https://drive.google.com/file/d/1QIwGTObByuWvmSzB_sQFJGPLqJSl_vg0/view?usp=sharing`);
const channel = client.channels.cache.get('1100195387609989240');
          const DD2log = {
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
          channel.send({ embeds: [DD2log] });
    }}
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'trx-games') {
      if  (interaction.options.get("games").value === 'FC6') {
          await interaction.reply(`## Far Cry 6
To activate the game make a ticket in <#1212152967894016050>

Have a game request? Go to <#1287940554105032705> and make a suggestion.

Prices: <#1287938873371918387>
Game Version: [Build 11359732](https://steamdb.info/patchnotes/11359732/)
Game Files: https://drive.google.com/file/d/1RywAwmU95Loo-21vL_vIXGrXzq3lKyQe/view?usp=sharing`);
const channel = client.channels.cache.get('1100195387609989240');
        const FC6log = {
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
        channel.send({ embeds: [FC6log] });
  }}
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'trx-games') {
      if  (interaction.options.get("games").value === 'HWL') {
          await interaction.reply(`## Hogwarts Legacy
To activate the game make a ticket in <#1212152967894016050>

Have a game request? Go to <#1287940554105032705> and make a suggestion.

Prices: <#1287938873371918387>
Game Version: [Build 18052110](https://steamdb.info/patchnotes/18052110/)
Game Files: https://drive.google.com/file/d/1KjNWh8T-3b1BRWAwmlyeuakCzfM4XPxT/view?usp=sharing`);
const channel = client.channels.cache.get('1100195387609989240');
        const HWLlog = {
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
        channel.send({ embeds: [HWLlog] });
  }}
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'trx-games') {
      if  (interaction.options.get("games").value === 'MNFL25') {
          await interaction.reply(`## EA SPORTS Madden NFL 25
To activate the game make a ticket in <#1212152967894016050>

Have a game request? Go to <#1287940554105032705> and make a suggestion.

Prices: <#1287938873371918387>
Game Version: [Build 18045767](https://steamdb.info/patchnotes/18045767/)
Game Files: https://drive.google.com/file/d/1kwDi7VDHGXL5ZfFLklAgxegbgl3E_vN_/view?usp=sharing`);
const channel = client.channels.cache.get('1100195387609989240');
const MNFL25log = {
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
channel.send({ embeds: [MNFL25log] });
  }}
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'trx-games') {
      if  (interaction.options.get("games").value === 'MNFL26') {
          await interaction.reply(`## EA SPORTS Madden NFL 26
To activate the game make a ticket in <#1212152967894016050>

Have a game request? Go to <#1287940554105032705> and make a suggestion.

Prices: <#1287938873371918387>
Game Version: [Build 19434749](https://steamdb.info/patchnotes/19434749/)
Game Files: *NOT AVAILABLE YET*`);
const channel = client.channels.cache.get('1100195387609989240');
const MNFL26log = {
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
channel.send({ embeds: [MNFL26log] });
  }}
})

}

module.exports = trxgamespt1
client.login(process.env.TOKEN);