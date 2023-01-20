import { ApplicationCommandOptionType, EmbedBuilder } from 'discord.js';

export default class PingCommand {
    constructor() {
        this.name = 'servidor'
        this.name_localizations = {
            'en-US': 'server',
            'pt-BR': 'servidor'
        }
        this.description = "[ Informations ] View a server's Discord badges."
        this.description_localizations = {
            'en-US': "[ Informations ] View a server's Discord badges.",
            'pt-BR': '[ Informações ] Veja as insignas de um servidor'
        }
        this.options = [
            {
                type: ApplicationCommandOptionType.Subcommand,
                name: 'badges',
                name_localizations: {
                    'en-US': 'badges',
                    'pt-BR': 'insignas'
                },
                description: "[ Informations ] View a server's Discord badges.",
                description_localizations: {
                    'en-US': "[ Informations ] View a server's Discord badges.",
                    'pt-BR': '[ Informações ] Veja as insignas de um servidor'
                }
            }
        ]
    };

    execute(client, interaction) {
        let ActiveDeveloper = interaction.guild.members.cache.filter(x => x.user.flags.has('ActiveDeveloper'));
        interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
                    .setDescription(`<:active_developer:1045519215223914496> **|** ${ActiveDeveloper.map(x => x.id).length}`)
                    .setColor('Yellow')
            ]
        });
    };
}