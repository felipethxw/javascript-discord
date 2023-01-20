export default class Ready {
    constructor() {
        this.eventName = 'ready'
        this.once = true
    }
    
    execute(client) {
        console.log(`[ 🤖 DISCORD ] Eventos carregados.`);
    };
};