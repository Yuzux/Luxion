const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const intents = ["GUILDS", "GUILD_MEMBERS",];

require('dotenv').config()

const handleCommand = require('./helpers/command');

const client = new Client({intents: intents, ws:{intents: intents}});

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

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'général');
    if(!channel) return;
    channel.send(`Bienvenue sur le serveur, ${member}!`);
    console.log(`${member} a rejoint le serveur`);
});

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'général');
    if(!channel) return;
    channel.send(`Au revoir, ${member}!`);
    console.log(`${member} a quitté le serveur`);
});

client.login(process.env.TOKEN);