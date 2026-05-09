const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function wrd() {
  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'apicheck') {
      if  (interaction.options.get("api").value === 'wrd') {
    axios
          .get('https://api.whatexploitsare.online/status', {
            headers: {
              'Accept': 'application/json'
            }
          })
          .then(async (res) => {
            let wrditem = res.data[5];
            for (let wrdname in wrditem) {
              const UnixTime = wrditem[wrdname].last_update_unix
              const DateObj = new Date(UnixTime * 1000)
              const DateTime = DateObj.toLocaleString()
              if (wrditem[wrdname].updated === true) { 
                let wrdupdatedcheck = '🟢';
                let wrdupdatedword = 'is currently updated and working.';
    const wrd = {
  type: `rich`,
	color: 16763904,
	title: `${wrdupdatedcheck} WeAreDevs`,
	description: `__Current Version:__ ${wrditem[wrdname].exploit_version}
__Last Updated:__ ${DateTime}
    
**WeAreDevs API ${wrdupdatedword}**`,
	footer: {
		text: 'Powered by TRX • Timezone: EST',
		icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
	},
};
await interaction.reply({ embeds: [wrd] });
const channel = client.channels.cache.get('1100195387609989240');
const apichecklog = {
  type: `rich`,
  color: 16763904,
  title: `Command Log for </apicheck:1098029846917042193>:`,
  description: `<@${interaction.member.id}> has used the </apicheck:1098029846917042193> (WeAreDevs) in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
  timestamp: new Date().toISOString(),
  footer: {
    text: 'Powered by TRX',
    icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
  },
};
channel.send({ embeds: [apichecklog] });
              }
              else {wrditem[wrdname].updated === false
              let updatedcheck = '🔴';
              let updatedword = 'is currently not working.';
              const wrd = {
                type: `rich`,
                color: 16763904,
                title: `${updatedcheck} WeAreDevs`,
                description: `__Current Version:__ ${wrditem[wrdname].exploit_version}
__Last Updated:__ ${DateTime}
                  
**WeAreDevs API ${updatedword}**`,
                footer: {
                  text: 'Powered by TRX • Timezone: EST',
                  icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
                },
              };
              await interaction.reply({ embeds: [wrd] });
              const channel = client.channels.cache.get('1100195387609989240');
              const apichecklog = {
                type: `rich`,
                color: 16763904,
                title: `Command Log for </apicheck:1098029846917042193>:`,
                description: `<@${interaction.member.id}> has used the </apicheck:1098029846917042193> in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
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

module.exports = wrd
client.login(process.env.TOKEN);