const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function trxgamespt2() {

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'trx-games') {
        if  (interaction.options.get("games").value === 'MMS') {
            await interaction.reply(`## Marvel's Midnight Suns
To activate the game make a ticket in <#1212152967894016050>

Have a game request? Go to <#1287940554105032705> and make a suggestion.

Prices: <#1287938873371918387>
Game Version: [Build 11378663](https://steamdb.info/patchnotes/11378663/)
Game Files: https://drive.google.com/file/d/1aEhEKNloysPKwcsOpcFarQs3v3u54JU6/view?usp=sharing`);
const channel = client.channels.cache.get('1100195387609989240');
const MMSlog = {
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
channel.send({ embeds: [MMSlog] });
    }}
})

  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'trx-games') {
        if  (interaction.options.get("games").value === 'MHW') {
            await interaction.reply(`## Monster Hunter Wilds
To activate the game make a ticket in <#1212152967894016050>
  
Have a game request? Go to <#1287940554105032705> and make a suggestion.
  
Prices: <#1287938873371918387>
Game Version: [Build 18100160](https://steamdb.info/patchnotes/18100160/)
Game Files: https://drive.google.com/file/d/1ldyd9cvklnqvtOdVFwWNCkUfIugzNLTz/view?usp=sharing`);
  const channel = client.channels.cache.get('1100195387609989240');
  const MHWlog = {
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
  channel.send({ embeds: [MHWlog] });
    }}
  })

  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'trx-games') {
        if  (interaction.options.get("games").value === 'MK1') {
            await interaction.reply(`## Mortal Kombat 1
To activate the game make a ticket in <#1212152967894016050>
  
Have a game request? Go to <#1287940554105032705> and make a suggestion.
  
Prices: <#1287938873371918387>
Game Version: [Build 17941244](https://steamdb.info/patchnotes/17941244/)
Game Files: https://drive.google.com/file/d/1nvtbYgdUFsPy2-w5U4Q42qh47wJM5N2L/view?usp=sharing`);
  const channel = client.channels.cache.get('1100195387609989240');
  const MK1log = {
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
  channel.send({ embeds: [MK1log] });
    }}
  })

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'trx-games') {
      if  (interaction.options.get("games").value === 'NBA2K24') {
          await interaction.reply(`## NBA 2K24
To activate the game make a ticket in <#1212152967894016050>

Have a game request? Go to <#1287940554105032705> and make a suggestion.

Prices: <#1287938873371918387>
Game Version: [Build 17177048](https://steamdb.info/patchnotes/17177048/)
Game Files: https://drive.google.com/file/d/1CSRaIqmL8hywoKNpbOJih-n1d9ZH0Q19/view?usp=sharing`);
const channel = client.channels.cache.get('1100195387609989240');
        const NBA2K24log = {
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
        channel.send({ embeds: [NBA2K24log] });
  }}
})

client.on('interactionCreate', async interaction => {
if (!interaction.isChatInputCommand()) return;
if (interaction.commandName === 'trx-games') {
    if  (interaction.options.get("games").value === 'NBA2K25') {
        await interaction.reply(`## NBA 2K25
To activate the game make a ticket in <#1212152967894016050>

Have a game request? Go to <#1287940554105032705> and make a suggestion.

Prices: <#1287938873371918387>
Game Version: [Build 18244204](https://steamdb.info/patchnotes/18244204/)
Game Files: https://drive.google.com/file/d/1qVAN4Y0ZdASZnoa9_NpxKgDOj68iBAcN/view?usp=sharing`);
const channel = client.channels.cache.get('1100195387609989240');
      const NBA2K25log = {
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
      channel.send({ embeds: [NBA2K25log] });
}}
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'trx-games') {
      if  (interaction.options.get("games").value === 'P3R') {
          await interaction.reply(`## Persona 3 Reload
To activate the game make a ticket in <#1212152967894016050>

Have a game request? Go to <#1287940554105032705> and make a suggestion.

Prices: <#1287938873371918387>
Game Version: [Build 17964130](https://steamdb.info/patchnotes/17964130/)
Game Files: https://drive.google.com/file/d/1A9gO56mUVtRelD868L0nt_EM-_nwvPf5/view?usp=sharing`);
const channel = client.channels.cache.get('1100195387609989240');
        const P3Rlog = {
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
        channel.send({ embeds: [P3Rlog] });
  }}
})

  client.on('interactionCreate', async interaction => {
      if (!interaction.isChatInputCommand()) return;
      if (interaction.commandName === 'trx-games') {
          if  (interaction.options.get("games").value === 'P4AU') {
              await interaction.reply(`## Persona 4 Arena Ultimax
To activate the game make a ticket in <#1212152967894016050>
  
Have a game request? Go to <#1287940554105032705> and make a suggestion.
  
Prices: <#1287938873371918387>
Game Version: [Build 10836033](https://steamdb.info/patchnotes/10836033/)
Game Files: https://drive.google.com/file/d/167GuisXRT_r-6bpAqAdW0VvEr98AtvnW/view?usp=sharing`);
  const channel = client.channels.cache.get('1100195387609989240');
            const P4AUlog = {
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
            channel.send({ embeds: [P4AUlog] });
      }}
  })

  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'trx-games') {
        if  (interaction.options.get("games").value === 'P4G') {
            await interaction.reply(`## Persona 4 Golden
To activate the game make a ticket in <#1212152967894016050>

Have a game request? Go to <#1287940554105032705> and make a suggestion.

Prices: <#1287938873371918387>
Game Version: [Build 9549348](https://steamdb.info/patchnotes/9549348/)
Game Files: https://drive.google.com/file/d/13wjL8QXkL3e8Cm2RQYAf0poAe8czVZVn/view?usp=sharing`);
const channel = client.channels.cache.get('1100195387609989240');
          const P4Glog = {
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
          channel.send({ embeds: [P4Glog] });
    }}
})

  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'trx-games') {
        if  (interaction.options.get("games").value === 'P5S') {
            await interaction.reply(`## Persona 5 Strikers
To activate the game make a ticket in <#1212152967894016050>

Have a game request? Go to <#1287940554105032705> and make a suggestion.

Prices: <#1287938873371918387>
Game Version: [Build 7471875](https://steamdb.info/patchnotes/7471875/)
Game Files: https://drive.google.com/file/d/1QytAkwwVnoPU_d0l66W1g9W4WNhY0oV2/view?usp=sharing`);
const channel = client.channels.cache.get('1100195387609989240');
          const P5Slog = {
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
          channel.send({ embeds: [P5Slog] });
    }}
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'trx-games') {
      if  (interaction.options.get("games").value === 'SWO') {
          await interaction.reply(`## Star Wars Outlaws
To activate the game make a ticket in <#1212152967894016050>

Have a game request? Go to <#1287940554105032705> and make a suggestion.

Prices: <#1287938873371918387>
Game Version: [Build 17848890](https://steamdb.info/patchnotes/17848890/)
Game Files: https://drive.google.com/file/d/12P7h2lFYBp3cpOzTjRpisfbuRE43CYKN/view?usp=sharing`);
const channel = client.channels.cache.get('1100195387609989240');
        const SWOlog = {
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
        channel.send({ embeds: [SWOlog] });
  }}
})

}

module.exports = trxgamespt2
client.login(process.env.TOKEN);