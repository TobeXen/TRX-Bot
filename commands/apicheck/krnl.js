const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function krnl() {
  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'apicheck') {
    if  (interaction.options.get("api").value === 'krnl') {
      axios
            .get('https://api.whatexploitsare.online/status', {
              headers: {
                'Accept': 'application/json'
              }
            })
            .then(async (res) => {
              let krnlitem = res.data[2];
              for (let krnlname in krnlitem) {
                const UnixTime = krnlitem[krnlname].last_update_unix
                const DateObj = new Date(UnixTime * 1000)
                const DateTime = DateObj.toLocaleString()
                if (krnlitem[krnlname].updated === true) { 
                  let krnlupdatedcheck = '🟢';
                  let krnlupdatedword = 'is currently updated and working.';
      const krnl = {
    type: `rich`,
    color: 16763904,
    title: `${krnlupdatedcheck} KRNL`,
    description: `__Current Version:__ ${krnlitem[krnlname].exploit_version}
__Last Updated:__ ${DateTime}
      
**KRNL ${krnlupdatedword}**`,
    footer: {
      text: 'Powered by TRX • Timezone: EST',
      icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
    },
  };
  await interaction.reply({ embeds: [krnl] });
  const channel = client.channels.cache.get('1100195387609989240');
  const krnllog = {
    type: `rich`,
    color: 16763904,
    title: `Command Log for </apicheck:1098029846917042193>:`,
    description: `<@${interaction.member.id}> has used the </apicheck:1098029846917042193> (KRNL) in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
    timestamp: new Date().toISOString(),
    footer: {
      text: 'Powered by TRX',
      icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
    },
  };
  channel.send({ embeds: [krnllog] });
                }
                else {krnlitem[krnlname].updated === false 
                let updatedcheck = '🔴';
                let updatedword = 'is currently not working.';
                const krnlb = {
                  type: `rich`,
                  color: 16763904,
                  title: `${updatedcheck} KRNL`,
                  description: `__Current Version:__ ${krnlitem[krnlname].exploit_version}
__Last Updated:__ ${DateTime}
                    
**KRNL ${updatedword}**`,
                  footer: {
                    text: 'Powered by TRX • Timezone: EST',
                    icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
                  },
                };
                await interaction.reply({ embeds: [krnlb] });
                const channel = client.channels.cache.get('1100195387609989240');
                const krnllog = {
                  type: `rich`,
                  color: 16763904,
                  title: `Command Log for </apicheck:1098029846917042193>:`,
                  description: `<@${interaction.member.id}> has used the </apicheck:1098029846917042193> (KRNL) in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
                  timestamp: new Date().toISOString(),
                  footer: {
                    text: 'Powered by TRX',
                    icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
                  },
                };
                channel.send({ embeds: [krnllog] });
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

module.exports = krnl
client.login(process.env.TOKEN);