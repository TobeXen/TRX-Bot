const { Client, GatewayIntentBits, REST, Routes, ApplicationCommandOptionType } = require('discord.js');
require('dotenv').config();
const client = new Client({ intents: [ 
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,]});

function rc() {
const commands = [
  {
    name: "bankai",
    description: "Summons a bankai",
    options: [
      {
        name: "user",
        description: "the user you want to attack",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ]
  },
  {
    name: "punch",
    description: "Punches your target",
    options: [
      {
        name: "user",
        description: "the user you want to attack",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ]
  },
  {
    name: "slap",
    description: "Slaps your target",
    options: [
      {
        name: "user",
        description: "the user you want to attack",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ]
  },
  {
    name: "sufionjoke",
    description: "You can hear all of sufion's corny jokes",
  },
  {
    name: "whack",
    description: "Whacks your target",
    options: [
      {
        name: "user",
        description: "the user you want to attack",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ]
  },
  {
    name: "kill",
    description: "Kills your target",
    options: [
      {
        name: "user",
        description: "the user you want to attack",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ]
  },
  {
    name: "servercount",
    description: "Shows you how many servers the TRX bot is in",
  },
  {
    name: 'trx-games',
    description: `Shows the game files of TRX Games`,
    options: [
      {
        name: "games",
        description: "show more information of selected games",
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [
          {
            name: 'Assassins Creed Mirage',
            value: 'ACM',
          },
          {
            name: 'Assassins Creed Shadows',
            value: 'ACS',
          },
          {
            name: 'Avatar Frontiers of Pandora',
            value: 'AFOP',
          },
          {
            name: 'Black Myth Wukong',
            value: 'BMW',
          },
          {
            name: 'Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles',
            value: 'DSK',
          },
          {
            name: 'Dragons Dogma 2',
            value: 'DD2',
          },
          {
            name: 'Far Cry 6',
            value: 'FC6',
          },
          {
            name: 'Hogwarts Legacy',
            value: 'HWL',
          },
          {
            name: 'Madden NFL 25',
            value: 'MNFL25',
          },
          {
            name: 'Madden NFL 26',
            value: 'MNFL26',
          },
          {
            name: 'Marvels Midnight Suns',
            value: 'MMS',
          },
          {
            name: 'Monster Hunter Wilds',
            value: 'MHW',
          },
          {
            name: 'Mortal Kombat 1',
            value: 'MK1',
          },
          {
            name: 'NBA 2K24',
            value: 'NBA2K24',
          },
          {
            name: 'NBA 2K25',
            value: 'NBA2K25',
          },
          {
            name: 'Persona 3 Reload',
            value: 'P3R',
          },
          {
            name: 'Persona 4 Arena Ultimax',
            value: 'P4AU',
          },
          {
            name: 'Persona 4 Golden',
            value: 'P4G',
          },
          {
            name: 'Persona 5 Strikers',
            value: 'P5S',
          },
          {
            name: 'Star Wars Outlaws',
            value: 'SWO',
          },
          {
            name: 'Street Fighter 6',
            value: 'SF6',
          },
          {
            name: 'Suicide Squad Kill the Justice League',
            value: 'KTJL',
          },
        ]
      },
    ]
  },
  {
    name: 'trx-nba2k',
    description: `Shows everything about the 2K players in the TRX server`,
    options: [
      {
        name: "options",
        description: "allows you to see specific options",
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [
          {
            name: '2K25 Leaderboard',
            value: '25ledb',
          },
          {
            name: '2K26 Leaderboard',
            value: '26ledb',
          },
        ]
      },
    ]
  },
  {
    name: "say",
    description: "Repeats your message as the bot",
    options: [
      {
        name: "promt",
        description: "what the bot will repeat",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ]
  },
  {
    name: 'ping',
    description: 'Shows ping of bots response time',
  },
  {
    name: "animegamewiki",
    description: "Shows wiki links for specific roblox anime games",
  },
  {
    name: "animegamecodes",
    description: "shows code links for specific roblox anime games",
  },
  {
    name: "invite",
    description: "Allows you to invite the TRX Bot to any server you want.",
  },
  {
    name: "help",
    description: "Shows where to get help and info of all the commands!",
  },
  //{
    //name: "nuke",
    //description: "hehe",
  //},
    {
    name: "balance",
    description: "Check your or another user's balance",
    options: [
      {
        name: "user",
        description: "The user you want to check",
        type: ApplicationCommandOptionType.User,
        required: false,
      },
    ]
  },
  {
    name: "work",
    description: "Work to earn some virtual coins (50-199)",
  },
  {
    name: "pay",
    description: "Transfer coins to another user",
    options: [
      {
        name: "target",
        description: "The user you want to pay",
        type: ApplicationCommandOptionType.User,
        required: true,
      },
      {
        name: "amount",
        description: "How many coins to send",
        type: ApplicationCommandOptionType.Integer,
        required: true,
      },
    ]
  },
  {
    name: "leaderboard",
    description: "Shows the top 10 richest users in the bot",
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
}

module.exports = rc
client.login(process.env.TOKEN);