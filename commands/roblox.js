const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function roblox() {
  client.on('messageCreate', async message => {
    if(/\broblox update\b|\brobloxupdate\b|\broblox-update\b/i.test(message.content)) {
      if (message.author.id === client.user.id) return;
    axios
          .get('https://api.whatexploitsare.online/status', {
            headers: {
              'Accept': 'application/json'
            }
          })
          .then((res) => {
          let robloxitem = res.data[11];
          for (let robloxname in robloxitem) {
            const UnixTime = robloxitem[robloxname].last_update_unix
            const DateObj = new Date(UnixTime * 1000)
            const DateTime = DateObj.toLocaleString()

        message.reply({ content: `You said **${message.content}**?
  
  The latest roblox update was ${robloxitem[robloxname].version} as of ${DateTime} {EST} Latest Release Notes - https://create.roblox.com/docs/resources/release-note/Release-Note-for-572`});
          }
          })
        }
      })
    }

module.exports = roblox
client.login(process.env.TOKEN);