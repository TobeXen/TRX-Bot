const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function scriptware() {
  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'apicheck') {
      if  (interaction.options.get("api").value === 'script-ware') {
      axios
            .get('https://api.whatexploitsare.online/status', {
              headers: {
                'Accept': 'application/json'
              }
            })
            .then(async (res) => {
              let scriptwareitem = res.data[1];
              for (let scriptwarename in scriptwareitem) {
                const UnixTime = scriptwareitem[scriptwarename].last_update_unix
                const DateObj = new Date(UnixTime * 1000)
                const DateTime = DateObj.toLocaleString()
                if (scriptwareitem[scriptwarename].updated === true) { 
                  let scriptwareupdatedcheck = '🟢';
                  let scriptwareupdatedword = 'is currently updated and working.';
      const scriptware = {
    type: `rich`,
    color: 16763904,
    title: `${scriptwareupdatedcheck} Script-Ware`,
    description: `__Current Version:__ ${scriptwareitem[scriptwarename].exploit_version}
__Last Updated:__ ${DateTime}
      
**Script-Ware ${scriptwareupdatedword}**`,
    footer: {
      text: 'Powered by TRX • Timezone: EST',
      icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
    },
  };
  await interaction.reply({ embeds: [scriptware] });
  const channel = client.channels.cache.get('1100195387609989240');
  const apichecklog = {
    type: `rich`,
    color: 16763904,
    title: `Command Log for </apicheck:1098029846917042193>:`,
    description: `<@${interaction.member.id}> has used the </apicheck:1098029846917042193> (Script Ware) in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
    timestamp: new Date().toISOString(),
    footer: {
      text: 'Powered by TRX',
      icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
    },
  };
  channel.send({ embeds: [apichecklog] });
                }
                else {scriptwareitem[scriptwarename].updated === false
                let updatedcheck = '🔴';
                let updatedword = 'is currently not working.';
                const scriptware = {
                  type: `rich`,
                  color: 16763904,
                  title: `${updatedcheck} Script-Ware`,
                  description: `__Current Version:__ ${scriptwareitem[scriptwarename].exploit_version}
__Last Updated:__ ${DateTime}
                    
**Script-Ware ${updatedword}**`,
                  footer: {
                    text: 'Powered by TRX • Timezone: EST',
                    icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
                  },
                };
                await interaction.reply({ embeds: [scriptware] });
                const channel = client.channels.cache.get('1100195387609989240');
                const apichecklog = {
                  type: `rich`,
                  color: 16763904,
                  title: `Command Log for </apicheck:1098029846917042193>:`,
                  description: `<@${interaction.member.id}> has used the </apicheck:1098029846917042193> (Script Ware) in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
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

module.exports = scriptware
client.login(process.env.TOKEN);