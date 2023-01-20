import { Colors, EmbedBuilder, PermissionFlagsBits } from 'discord.js';
import { QuickDB } from 'quick.db';
const db = new QuickDB();

export default class PingCommand {
    constructor() {
        this.name = 'servidor'
    };

    async execute(client, message, args) {
        let subcommand = args[0];
        switch (subcommand) {
            case 'prefixo':
                if (!message.member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setDescription(`❌ **|** Você não pode utilizar este comando, para utilizar este comando você precisa da permissão \`Gerenciar Mensagens\`.`)
                            .setColor(Colors.Red)
                    ]
                });

                let novoPrefixo = args[1];

                if (!novoPrefixo) return message.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setDescription(`❌ **|** Não encontrei o novo **prefixo** desejado.`)
                            .setColor(Colors.Red)
                    ]
                });

                if (novoPrefixo.length > 5 && novoPrefixo !== 'resetar') return message.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setDescription(`❌ **|** O **novo prefixo** não pode ser maior que **5** letras.`)
                            .setColor(Colors.Red)
                    ]
                });

                if (novoPrefixo == 'resetar') {
                    await db.delete(`prefix_${message.guild.id}`);

                    message.reply({
                        embeds: [
                            new EmbedBuilder()
                                .setDescription(`✅ **|** Prefixo do Servidor resetado com sucesso. \`star!\`.`)
                                .setColor(Colors.Green)
                        ]
                    });
                } else {
                    await db.set(`prefix_${message.guild.id}`, novoPrefixo);

                    message.reply({
                        embeds: [
                            new EmbedBuilder()
                                .setDescription(`✅ **|** Prefixo do Servidor alterado para \`${novoPrefixo}\` com sucesso.`)
                                .setColor(Colors.Green)
                        ]
                    });
                };
                break
        };
    };
}