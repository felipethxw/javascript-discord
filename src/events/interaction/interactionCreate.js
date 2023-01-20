export default class InteractionCreate {
    constructor() {
        this.eventName = 'interactionCreate'
    }

    execute(client, interaction) {
        if (interaction.isCommand()) {
            let command = client.slashcommands.get(interaction.commandName);
            if (!command) return;
            try {
                command.execute(client, interaction);
            } catch (e) {
                console.error(e);
            };
        };
    };
};