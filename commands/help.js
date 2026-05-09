const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios')
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function help() {
    client.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;
      
        if (interaction.commandName === 'help') {
    const help = {
  type: `rich`,
	color: 16763904,
	title: `Here are all of the commands for the current version __${process.env.Versions}__`,
	description: `**Commands** ~
    </bankai:1098029846917042186> - summons a bankai
    </punch:1098029846917042187> - punches your target
    </slap:1098029846917042188> - slaps your target
    </sufionjoke:1098029846917042189> - you can hear all of sufion's corny jokes
    </whack:1098029846917042190> - whacks your target
    </kill:1098029846917042191> - kills your target
    </servercount:1098029846917042192> - shows you how many servers the TRX bot is in
    ~~</apicheck:1098029846917042193> - shows the current api's status in TRX Hub~~
    </say:1098029846917042194> - repeats your message as the bot
    </ping:1098029846917042195> - shows ping of bots response time
    </animegamewiki:1098029847109976194> - shows wiki links for specific roblox anime games
    </animegamecodes:1098029847109976195> - shows code links for specific roblox anime games
    </invite:1099078205463339008> - Allows you to invite the TRX Bot to any server you want.
    *you can say TRX Discord, TRX Hub, Roblox Update without prefix*`,
	footer: {
		text: 'Powered by TRX • https://discord.gg/veBQPXGVxNhttps://discord.gg/veBQPXGVxN',
		icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
	},
};
await interaction.reply({ embeds: [help] });
const channel = client.channels.cache.get('1100195387609989240');
          const helplog = {
            type: `rich`,
            color: 16763904,
            title: `Command Log for </help:1099078205463339009>:`,
            description: `<@${interaction.member.id}> has used the </help:1099078205463339009> in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
            timestamp: new Date().toISOString(),
            footer: {
              text: 'Powered by TRX',
              icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
            },
          };
          channel.send({ embeds: [helplog] });
  }
})
}

module.exports = help
client.login(process.env.TOKEN);