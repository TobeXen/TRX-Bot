const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function TRXexecutor() {
client.on('messageCreate', async message => {
  if(/\bTRX Executor\b/i.test(message.content)) {
    if (message.author.id === client.user.id) return;
    axios
            .get('https://raw.githubusercontent.com/TobeXen/trx-api/main/trx-api.json', {
              headers: {
                'Accept': 'application/json'
              }
            })
            .then((res) => {
      message.reply({ content: `You said **${message.content}**?

Current TRX Hub version is ${res.data.trxexecutorversion} as of ${res.data.trxexecutorupdate} {EST} **Available on the website: https://bit.ly/3m98R3g**` +` Status: 
TRX Executor: ${res.data.trxexecutorstatus}
TRX Scripts: ${res.data.trxscriptsstatus} 
TRX Ludicrous: ${res.data.trxludicrousstatus}`});
            })
}
})
}



module.exports = TRXexecutor
client.login(process.env.TOKEN);