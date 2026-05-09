const { Client, GatewayIntentBits, ActionRowBuilder, StringSelectMenuBuilder, Collector, ComponentType } = require('discord.js');
const axios = require('axios');
require('dotenv').config();
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

function trx2koptpt1() {

    client.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;
        if (interaction.commandName === 'trx-nba2k') {
            if  (interaction.options.get("options").value === '25ledb') {
                await interaction.reply({ content:`# 2K25 Leaderboard
## updated on 9/1/25
1. Xen {PG, SG} (97) -
2. Mir {PG, SG, SF} (92) -
3. Greek {SF, PF, C} (92) -
4. Mike {PF, C} (89) -
5. Soma {SF, PF} (88) -
5. Tony {SG, SF} (87) -
6. Daye {PG, C} (85) -
7. Sean {SG, SF} (84) -
9. Drew {SF} (83) -
10. Max {PG} (80) -
10. Keem {C} (80) -
12. Sufion {C} (69) - `
                })
            }}});

    client.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;
        if (interaction.commandName === 'trx-nba2k') {
            if  (interaction.options.get("options").value === '26ledb') {
const leaderboardDD = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
                    .setCustomId('select-leaderboard')
                    .setPlaceholder('Select a leaderboard')
                    .addOptions(
                        {
                            label: 'Playmaking',
                            description: 'Shows the Playmaking leaderboard',
                            value: `play-making`,
                        },
                        {
                            label: 'Defense',
                            description: 'Shows the Defense leaderboard',
                            value: 'def-ense',
                        },
                        {
                            label: 'Finishing',
                            description: 'Shows the Finishing leaderboard',
                            value: `fin-ishing`,
                        },
                        {
                            label: 'Shooting',
                            description: 'Shows the Shooting leaderboard',
                            value: 'sho-oting',
                        },
                    ),
    );
    await interaction.reply({ content:`# 2K26 Leaderboard
## updated on 2/22/26
1. Xen {PG} (93) -
2. Greek {SF, PF} (89) -
3. Mike {SG, PF} (88) -
4. Tony {SF} (86) -
5. Daye {SG, SF, C} (86) -
6. Keem {C} (85) ↓
7. Sufion {C} (84) -
8. Mir {SG} (84) -
9. Drew {SG} (82) -
10. Soma {SF} (80) -
11. Sean {PF} (78) -
12. Mia {PG} (76) -
13. Max {PG} (75) -






check additional leaderboards ↓`, components: [leaderboardDD] });
    const channel = client.channels.cache.get('1100195387609989240');
              const ledblog = {
                type: `rich`,
                color: 16763904,
                title: `Command Log for </trx-nba2k:1329860603514191893>:`,
                description: `<@${interaction.member.id}> has used the </trx-nba2k:1329860603514191893> in https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${interaction.id}`,
                timestamp: new Date().toISOString(),
                footer: {
                  text: 'Powered by TRX',
                  icon_url: 'https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png',
                },
              };
              channel.send({ embeds: [ledblog] });

        let answered = false;

        const collector = interaction.channel.createMessageComponentCollector({
            ComponentType: ComponentType.StringSelectMenuBuilder,
            time: 10_000,
        });

        collector.on('end', () => {
        if (!answered) {
            interaction.editReply({ components: []})
            interaction.channel.send(
                `You didn't pick an option in time.`
            );
        }
        else {
            interaction.editReply({ components: []})
        }
        })

        collector.on('collect', async interaction => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId === 'select-leaderboard') {
            
            await interaction.values.forEach(async value => {
                if (value === 'play-making') {
                    answered = true;
                    await interaction.reply({ content:`
# Playmaking Leaderboard
## updated on 2/22/26
1. Xen (95) -
2. Mike (87) -
3. Mir (82) -
4. Tony (81) ↑
5. Daye (78) ↑
6. Sufion (75) -
7. Greek (71) -
8. Soma (70) -
9. Keem (67) -
10. Mia (65) -
11. Sean (64) -
12. Drew (62) -
13. Max (60) - ` })
                }
                else if (value === 'def-ense') {
                    answered = true;
                    await interaction.reply({ content:`
# Defense Leaderboard
## updated on 2/22/26
1. Mike (92) -
2. Greek (89) -
3. Xen (88) ↑
4. Mir (83) -
5. Daye (82) ↑
6. Tony (81) ↓
7. Soma (80) ↓
8. Sufion (80) -
9. Keem (78) -
10. Sean (74) -
11. Drew (71) -
12. Mia (64) -
13. Max (60) - ` })
                }
                else if (value === 'fin-ishing') {
                    answered = true;
                    await interaction.reply({ content:`
# Finishing Leaderboard
## updated on 2/22/26
1. Greek (96) -
2. Xen (94) -
3. Mir (92) -
4. Tony (91) -
5. Mike (90) -
6. Keem (88) ↑
7. Soma (84) -
8. Daye (83) -
9. Sean (81) -
10. Sufion (80) -
11. Drew (75) -
12. Mia (60) -
13. Max (60) - ` })
                }
                else if (value === 'sho-oting') {
                    answered = true;
                    await interaction.reply({ content:`
# Shooting Leaderboard
## updated on 2/22/25
1. Xen (97) -
2. Greek (94) ↑
3. Keem (90) ↓
4. Mir (89) ↓
5. Tony (88) -
6. Mike (88) ↑
7. Soma (87) -
8. Daye (85) -
9. Drew (82) -
10. Sean (79) -
11. Sufion (78) -
12. Mia (65) -
13. Max (60) - ` })
                };
            })
        }
    })
}}
});

}

module.exports = trx2koptpt1
client.login(process.env.TOKEN);