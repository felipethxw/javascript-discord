import { QuickDB } from 'quick.db';
const db = new QuickDB();

export default class InteractionCreate {
    constructor() {
        this.eventName = 'messageCreate'
    }

    async execute(client, message) {
        let prefixo = await db.get(`prefix_${message.guild.id}`) || 'star!'
        if (!message.content.startsWith(prefixo)) return;

        let args = message.content.trim().slice(prefixo.length).split(' ');
        let command = args.shift();

        let comando = client.prefixcommands.get(command);
        if (!comando) return;
        try {
            comando.execute(client, message, args);
        } catch (e) {
            console.error(e);
        };
    };
};