const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');

require('dotenv').config()

const handleCommand = require('./helpers/command');

const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command)
}

client.once('ready', () => {
    console.log('Ready!!');
});

client.on('interactionCreate', async interaction => {
    if(interaction.isCommand()) handleCommand(client, interaction);
});

client.login(process.env.TOKEN);