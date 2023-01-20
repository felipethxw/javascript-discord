import fs from 'fs';
import { client } from '../Client/index.js';

export default class EventsManager {
    constructor() {
        this.client = client;
    }

    async loadEvents() {
        const subfolders = fs.readdirSync('./src/events/');
        if (subfolders.length == 0) return console.log('[ 🤖 DISCORD ] Nenhum evento carregado (SubFolder não encontrada.).');

        for await (let subfolder of subfolders) {
            const events = fs.readdirSync(`./src/events/${subfolder}`);
            for (let event of events) {
                const { default: EventClass } = await import(`../events/${subfolder}/${event}`);
                const evento = new EventClass();
                this.client.on(evento.eventName, (...args) => evento.execute(this.client, ...args));
            };
        };
        setTimeout(() => console.log(`[ ⭐ STAR - DISCORD 🤖 ] Eventos carregados com sucesso.`), 500);
    };
};