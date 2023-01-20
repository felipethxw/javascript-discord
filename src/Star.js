import { client } from './Client/index.js';

export class StarDiscord {
    constructor() {
        this.client = client;
        console.log('[ ⭐ STAR ] Iniciando conexão...');
        this.client.on('ready', () => console.log(`[ 🤖 DISCORD ] Conexão com o Discord com sucesso! (${this.client.user.tag})`));
    }
}