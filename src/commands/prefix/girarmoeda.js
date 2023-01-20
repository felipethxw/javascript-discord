export default class PingCommand {
    constructor() {
        this.name = 'girarmoeda'
    };

    execute(client, message, args) {
        let lados = ['Cara', 'Coroa'];
        let lado = lados[Math.floor(Math.random() * lados.length)];
        message.reply({
            content: `:coin: **|** ${lado}.`
        });
    };
}