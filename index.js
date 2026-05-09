console.log('Checking for updates...')
console.log('Updated')
const rc = require("./register-commands")
console.log('Logging into bot...')
require('dotenv').config();
const { Discord, Client, GatewayIntentBits, Routes } = require('discord.js');
const axios = require('axios')
const trxgamespt1 = require("./commands/trx-games/trx-gamespt1")
const trxgamespt2 = require("./commands/trx-games/trx-gamespt2")
const trxgamespt3 = require("./commands/trx-games/trx-gamespt3")
const say = require("./commands/say")
const embedsay = require("./commands/embedsay")
const TRXexecutor = require("./commands/TRX Executor")
const bankai = require("./commands/bankai")
const punch = require("./commands/punch")
const roblox = require("./commands/roblox")
const sufionjoke = require("./commands/sufionjoke")
const TRXDiscord = require("./commands/TRX Discord")
const TRXhelp = require("./commands/TRX Help")
const slap = require("./commands/slap")
const whack = require("./commands/whack")
const servercount = require("./commands/servercount")
const kill = require("./commands/kill")
const wiki = require("./commands/wiki")
const codes = require("./commands/codes")
const chatgpt = require("./reactions/trx-chatgpt")
const verify = require("./reactions/trx-verify")
const announcement = require("./reactions/trx-announcement")
const colors = require("./reactions/trx-colors")
const clanroles = require("./reactions/soldierlife2-clanroles")
const gameroles = require("./reactions/trx-gaming")
const invite = require("./reactions/invite")
const help = require("./commands/help")
const trx2koptpt1 = require("./commands/trx-2kopt-pt1")
const nuke = require("./commands/nuke")
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

client.on('ready', () => {
client.user.setPresence({ activities: [{   name: `TEST | release ${process.env.Versions}`, url: 'https://twitch.tv/thetrusoma', ActivityType: `PLAYING` }], status: 'dnd' });
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.deferReply();
    
    const reply = await interaction.fetchReply();

    interaction.editReply(`👾 Pong! <@${client.user.id}>: **${reply.createdTimestamp - interaction.createdTimestamp}** ms. Websocket: **${client.ws.ping}** ms.`);
  }
});

rc()
trxgamespt1()
trxgamespt2()
trxgamespt3()
say()
embedsay()
TRXexecutor()
bankai()
punch()
sufionjoke()
roblox()
TRXDiscord()
TRXhelp()
slap()
whack()
servercount()
kill()
wiki()
codes()
chatgpt()
verify()
announcement()
colors()
clanroles()
gameroles()
invite()
help()
trx2koptpt1()
//nuke()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN);