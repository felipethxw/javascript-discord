export default class PingCommand {
    constructor() {
        this.name = 'coinflip'
        this.name_localizations = {
            'en-US': 'coinflip',
            'pt-BR': 'girarmoeda'
        }
        this.description = '[ Diversão ] Spin the coin and see if it lands heads or tails.'
        this.description_localizations = {
            'en-US': '[ Diversão ] Spin the coin and see if it lands heads or tails.',
            'pt-BR': '[ Diversão ] Gire a moeda e veja se irá cair cara ou coroa.'
        }
    };

    execute(client, interaction) {
        let lados = ['Cara', 'Coroa'];
        let lado = lados[Math.floor(Math.random() * lados.length)];
        interaction.reply({
            content: `:coin: **|** ${lado}.`
        });
    };
}