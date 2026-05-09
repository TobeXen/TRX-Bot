const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function fluxus() {
  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'apicheck') {
      if  (interaction.options.get("api").value === 'fluxus') {
      axios
            .get('https://api.whatexploitsare.online/status', {
              headers: {
                'Accept': 'application/json'
              }
            })
            .then(async (res) => {
              let fluxusitem = res.data[7];
              for (let fluxusname in fluxusitem) {
                const UnixTime = fluxusitem[fluxusname].last_update_unix
                const DateObj = new Date(UnixTime * 1000)
                const DateTime = DateObj.toLocaleString()
                if (fluxusitem[fluxusname].updated === true) { 
                  let fluxusupdatedcheck = '🟢';
                  let fluxusupdatedword = 'is currently updated and working.';
      const fluxus = {
    type: `rich`,
    color: 16763904,
    title: `${fluxusupdatedcheck} Fluxus`,
    description: `__Current Version:__ ${fluxusitem[fluxusname].exploit_version}
__Last Updated:__ ${DateTime}
      
**Fluxus ${fluxusupdatedword}**`,
    footer: {
      text: 'Powered by TRX • Timezone: EST',
      icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
    },
  };
  await interaction.reply({ embeds: [fluxus] });
  const channel = client.channels.cache.get('1100195387609989240');
  const apichecklog = {
    type: `rich`,
    color: 16763904,
    title: `Command Log for </apicheck:1098029846917042193>:`,
    description: `<@${interaction.member.id}> has used the </apicheck:1098029846917042193> (Fluxus) in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
    timestamp: new Date().toISOString(),
    footer: {
      text: 'Powered by TRX',
      icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
    },
  };
  channel.send({ embeds: [apichecklog] });
                }
                else {fluxusitem[fluxusname].updated === false
                let updatedcheck = '🔴';
                let updatedword = 'is currently not working.';
                const fluxus = {
                  type: `rich`,
                  color: 16763904,
                  title: `${updatedcheck} Fluxus`,
                  description: `__Current Version:__ ${fluxusitem[fluxusname].exploit_version}
__Last Updated:__ ${DateTime}
                    
**Fluxus ${updatedword}**`,
                  footer: {
                    text: 'Powered by TRX • Timezone: EST',
                    icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
                  },
                };
                await interaction.reply({ embeds: [fluxus] });
                const channel = client.channels.cache.get('1100195387609989240');
                const apichecklog = {
                  type: `rich`,
                  color: 16763904,
                  title: `Command Log for </apicheck:1098029846917042193>:`,
                  description: `<@${interaction.member.id}> has used the </apicheck:1098029846917042193> (Fluxus) in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
                  timestamp: new Date().toISOString(),
                  footer: {
                    text: 'Powered by TRX',
                    icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
                  },
                };
                channel.send({ embeds: [apichecklog] });
                              }                       
                            }
                          })
  .catch((err) => {
    {
      console.error('ERR:', err);
    }
  })
  }
}
  })
}

module.exports = fluxus
client.login(process.env.TOKEN);