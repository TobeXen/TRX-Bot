const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function oxygen() {
  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'apicheck') {
      if  (interaction.options.get("api").value === 'oxygen') {
      axios
            .get('https://api.whatexploitsare.online/status', {
              headers: {
                'Accept': 'application/json'
              }
            })
            .then(async (res) => {
              let oxygenitem = res.data[6];
              for (let oxygenname in oxygenitem) {
                const UnixTime = oxygenitem[oxygenname].last_update_unix
                const DateObj = new Date(UnixTime * 1000)
                const DateTime = DateObj.toLocaleString()
                if (oxygenitem[oxygenname].updated === true) { 
                  let oxygenupdatedcheck = '🟢';
                  let oxygenupdatedword = 'is currently updated and working.';
      const oxygen = {
    type: `rich`,
    color: 16763904,
    title: `${oxygenupdatedcheck} Oxygen`,
    description: `__Current Version:__ ${oxygenitem[oxygenname].exploit_version}
__Last Updated:__ ${DateTime}
      
**Oxygen ${oxygenupdatedword}**`,
    footer: {
      text: 'Powered by TRX • Timezone: EST',
      icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
    },
  };
  await interaction.reply({ embeds: [oxygen] });
  const channel = client.channels.cache.get('1100195387609989240');
  const apichecklog = {
    type: `rich`,
    color: 16763904,
    title: `Command Log for </apicheck:1098029846917042193>:`,
    description: `<@${interaction.member.id}> has used the </apicheck:1098029846917042193> (Oxygen) in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
    timestamp: new Date().toISOString(),
    footer: {
      text: 'Powered by TRX',
      icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
    },
  };
  channel.send({ embeds: [apichecklog] });
                }
                else {oxygenitem[oxygenname].updated === false
                let updatedcheck = '🔴';
                let updatedword = 'is currently not working.';
                const oxygen = {
                  type: `rich`,
                  color: 16763904,
                  title: `${updatedcheck} Oxygen`,
                  description: `__Current Version:__ ${oxygenitem[oxygenname].exploit_version}
__Last Updated:__ ${DateTime}
                    
**Oxygen ${updatedword}**`,
                  footer: {
                    text: 'Powered by TRX • Timezone: EST',
                    icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
                  },
                };
                await interaction.reply({ embeds: [oxygen] });
                const channel = client.channels.cache.get('1100195387609989240');
                const apichecklog = {
                  type: `rich`,
                  color: 16763904,
                  title: `Command Log for </apicheck:1098029846917042193>:`,
                  description: `<@${interaction.member.id}> has used the </apicheck:1098029846917042193> (Oxygen) in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
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

module.exports = oxygen
client.login(process.env.TOKEN);