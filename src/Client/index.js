import { Client, Collection, Partials } from 'discord.js';
import SlashCommandManager from '../handlers/SlashCommandsManager.js';
import EventsManager from '../handlers/EventsManager.js';
import PrefixCommandManager from '../handlers/PrefixCommandsManager.js';
import { config } from 'dotenv';
config();

const client = new Client({
    intents: ['Guilds', 'MessageContent', 'GuildMembers', 'GuildPresences', 'GuildMessages', 'DirectMessages'],
    partials: [Partials.GuildMember, Partials.Channel]
});

console.log('[ 🤖 - DISCORD ] Tentando conexão...')

client.login(process.env.token)
    .then(() => {
        new SlashCommandManager().loadCommands();
        new EventsManager().loadEvents();
        new PrefixCommandManager().loadCommands();
    });

client.slashcommands = new Collection();
client.prefixcommands = new Collection();

export { client };