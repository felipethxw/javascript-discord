import fs from 'fs';
import { client } from '../Client/index.js';

export default class CommandsMananger {
    constructor() {
        this.client = client;
    }

    async loadCommands() {
        const cmds = [];
        const commands = fs.readdirSync('./src/commands/slashcommands').filter(x => x.endsWith('.js'));
        if (commands.length == 0) return console.log('[ ❌ ] Nenhum Slash Command carregado.');
        for (let comando of commands) {
            const { default: CommandClass } = await import(`../commands/slashcommands/${comando}`);
            const command = new CommandClass();
            this.client.slashcommands.set(command.name, command);
            cmds.push(command);
        };

        this.client.once('ready', () => this.client.application.commands.set(cmds).then(() => console.log(`[ ⭐ STAR - DISCORD 🤖 ] ${cmds.length == '1' ? '1 comando' : `${cmds.length} comandos`} slash carregados com sucesso.`)));
    }
};