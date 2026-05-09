const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function whack() {
  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'whack') {
      const users = interaction.options.get("user").value;
  let gifs = [
  'https://c.tenor.com/EfhPfbG0hnMAAAAM/slap-handa-seishuu.gif',
  'https://c.tenor.com/FJsjk_9b_XgAAAAM/anime-hit.gif',
  'https://c.tenor.com/wOCOTBGZJyEAAAAM/chikku-neesan-girl-hit-wall.gif',
  'https://c.tenor.com/zwDh3RLs1O8AAAAM/dandidave-pingpong.gif',
  'https://c.tenor.com/1hgUG2DpefkAAAAM/yuya-sakaki-yuzu-hiiragi.gif',
  'https://c.tenor.com/TTYSsgn_8esAAAAM/anime-drag.gif',
  'https://c.tenor.com/PQ_imJXimaMAAAAM/smack-tongue.gif',
  'https://c.tenor.com/hGclJ34JeSIAAAAM/one-punch.gif',
  'https://c.tenor.com/9C_NY-GObhUAAAAM/anime-muv-luv.gif',
  'https://c.tenor.com/dyp57YWeUY0AAAAM/oreimo-dumb.gif',
  'https://c.tenor.com/jgImPggI1ZMAAAAM/bakugo-anime-slap.gif',
  'https://c.tenor.com/h_qFkmXJnYQAAAAM/cat-attack.gif',
  'https://c.tenor.com/fz-V6dZ1PiQAAAAM/how-to-raise-a-boring-girlfriend-saenai.gif',
  'https://c.tenor.com/mDW_8w1yi90AAAAM/mad-anime.gif',
  'https://c.tenor.com/yBQeNxKbo20AAAAM/money-stare.gif',
  'https://c.tenor.com/Irk80uToJA0AAAAM/slap-anime.gif',
  'https://c.tenor.com/WcYvM-SqPkoAAAAM/baka-slap.gif',
  'https://c.tenor.com/0RUsQuQb0FAAAAAM/money-anime.gif',
  'https://c.tenor.com/gzxNd5-Jk4gAAAAM/atari-anime.gif',
  'https://c.tenor.com/klNTzZNDmEgAAAAM/slap-hit.gif',
  'https://c.tenor.com/2vgDx1DCgf8AAAAM/hunter-x-hunter-bisky.gif',
  'https://c.tenor.com/N9IPOYXJKmEAAAAM/killua-hunter-x-hunter.gif',
  'https://c.tenor.com/2pTVPsXlkWMAAAAM/hunter-x-hunter.gif',
  'https://media.tenor.com/oRdS4K405wUAAAAC/loid-forger-yor-forger.gif',
  'https://media.tenor.com/xjmUl9LaR0oAAAAC/bnha-boku.gif',
];
  let randomgifs = gifs[Math.floor(Math.random() * gifs.length)];
  const whack = {
  type: `rich`,
	color: 16763904,
	title: ``,
	description: `<@${interaction.member.id}> whacked ${users}`,
    image: {
          url: `${randomgifs}`,
    },
	footer: {
		text: 'Powered by TRX • https://discord.gg/veBQPXGVxN',
		icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
	},
};
await interaction.reply({ embeds: [whack] });   
const channel = client.channels.cache.get('1100195387609989240');
          const whacklog = {
            type: `rich`,
            color: 16763904,
            title: `Command Log for </whack:1098029846917042190>:`,
            description: `<@${interaction.member.id}> has used the </whack:1098029846917042190> against ${users} in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
            timestamp: new Date().toISOString(),
            footer: {
              text: 'Powered by TRX',
              icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
            },
          };
          channel.send({ embeds: [whacklog] });
  }
})
}

module.exports = whack
client.login(process.env.TOKEN);