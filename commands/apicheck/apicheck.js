const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function apicheck() {
  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'apicheck') {
      if  (interaction.options.get("api").value === 'apicheck') {
      axios
        .get('https://api.whatexploitsare.online/status', {
          headers: {
            'Accept': 'application/json'
          }
        })
        .then(async (res) => {
          let krnlitem = res.data[2];
          let fluxusitem = res.data[7];
          let oxygenitem = res.data[6];
          let wrditem = res.data[5];
          let scriptwareitem = res.data[1];
          let synapseitem = res.data[0];
          let robloxitem = res.data[11];
          for (let krnlname in krnlitem) {
            for (let fluxusname in fluxusitem) {
              for (let oxygenname in oxygenitem) {
                for (let wrdname in wrditem) {
                  for (let scriptwarename in scriptwareitem) {
                    for (let synapsename in synapseitem) {
                      for (let robloxname in robloxitem) {
                        const krnlcheck = (krnlitem[krnlname].updated);
                        const krnlstatus = krnlcheck ? "🟢" : "🔴";
                        const fluxuscheck = (fluxusitem[fluxusname].updated);
                        const fluxusstatus = fluxuscheck ? "🟢" : "🔴";
                        const oxygencheck = (oxygenitem[oxygenname].updated);
                        const oxygenstatus = oxygencheck ? "🟢" : "🔴";
                        const wrdcheck = (wrditem[wrdname].updated);
                        const wrdstatus = wrdcheck ? "🟢" : "🔴";
                        const scriptwarecheck = (scriptwareitem[scriptwarename].updated);
                        const scriptwarestatus = scriptwarecheck ? "🟢" : "🔴";
                        const synapsecheck = (synapseitem[synapsename].updated);
                        const synpapsestatus = synapsecheck ? "🟢" : "🔴";
                        const krnlUnixTime = krnlitem[krnlname].last_update_unix
                        const krnlDateObj = new Date(krnlUnixTime * 1000)
                        const krnlDateTime = krnlDateObj.toLocaleString()
                        const fluxusUnixTime = fluxusitem[fluxusname].last_update_unix
                        const fluxusDateObj = new Date(fluxusUnixTime * 1000)
                        const fluxusDateTime = fluxusDateObj.toLocaleString()
                        const oxygenUnixTime = oxygenitem[oxygenname].last_update_unix
                        const oxygenDateObj = new Date(oxygenUnixTime * 1000)
                        const oxygenDateTime = oxygenDateObj.toLocaleString()
                        const wrdUnixTime = wrditem[wrdname].last_update_unix
                        const wrdDateObj = new Date(wrdUnixTime * 1000)
                        const wrdDateTime = wrdDateObj.toLocaleString()
                        const scriptwareUnixTime = scriptwareitem[scriptwarename].last_update_unix
                        const scriptwareDateObj = new Date(scriptwareUnixTime * 1000)
                        const scriptwareDateTime = scriptwareDateObj.toLocaleString()
                        const synapseUnixTime = synapseitem[synapsename].last_update_unix
                        const synapseDateObj = new Date(synapseUnixTime * 1000)
                        const synapseDateTime = synapseDateObj.toLocaleString()
                        const apicheck = {
                          type: `rich`,
                          color: 16763904,
                          title: `Current working api's for roblox update __${robloxitem[robloxname].version}__:`,
                          description: `**Included with TRX Hub:**
${krnlstatus} KRNL | (${krnlitem[krnlname].exploit_version}) ${krnlDateTime} 
${fluxusstatus} Fluxus | (${fluxusitem[fluxusname].exploit_version}) ${fluxusDateTime}
${oxygenstatus} Oxygen | (${oxygenitem[oxygenname].exploit_version}) ${oxygenDateTime}
${wrdstatus} WeAreDevs | (${wrditem[wrdname].exploit_version}) ${wrdDateTime}
**Other**
${scriptwarestatus} Script-Ware | (${scriptwareitem[scriptwarename].exploit_version}) ${scriptwareDateTime}
${synpapsestatus} Synapse | (${synapseitem[synapsename].exploit_version}) ${synapseDateTime}`,
                          footer: {
                            text: 'Powered by TRX • Timezone: EST',
                            icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
                          },
                        };
                        await interaction.reply({ embeds: [apicheck] });
                        const channel = client.channels.cache.get('1100195387609989240');
                        const apichecklog = {
                          type: `rich`,
                          color: 16763904,
                          title: `Command Log for </apicheck:1098029846917042193>:`,
                          description: `<@${interaction.member.id}> has used the </apicheck:1098029846917042193> (API Check) in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
                          timestamp: new Date().toISOString(),
                          footer: {
                            text: 'Powered by TRX',
                            icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
                          },
                        };
                        channel.send({ embeds: [apichecklog] });
                      }
                    }
                  }
                }
              }
            }
          }
        })
        .catch((err) => {
          {
            console.error('ERR:', err);
          }
        });
    }
  }
  });
}

module.exports = apicheck
client.login(process.env.TOKEN);