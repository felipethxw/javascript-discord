import fs from 'fs';
import { client } from '../Client/index.js';

export default class CommandsMananger {
    constructor() {
        this.client = client;
    }

    async loadCommands() {
        const cmds = [];
        const commands = fs.readdirSync('./src/commands/prefix').filter(x => x.endsWith('.js'));
        if (commands.length == 0) return console.log('[ ❌ ] Nenhum Comando Prefixo carregado.');
        for (let comando of commands) {
            const { default: CommandClass } = await import(`../commands/prefix/${comando}`);
            const command = new CommandClass();
            this.client.prefixcommands.set(command.name, command);
            cmds.push(command);
        };

        this.client.once('ready', () => console.log(`[ ⭐ STAR - DISCORD 🤖 ] ${cmds.length == '1' ? '1 comando' : `${cmds.length} comandos`} prefixo carregados com sucesso.`));
    }
};