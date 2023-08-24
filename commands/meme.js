const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('Renvoie un meme'),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        const url = await fetch("https://www.reddit.com/r/memes/random/.json");
        const random = await url.json();

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Random Meme | ${random[0].data.children[0].data.title}`)
            .setImage(random[0].data.children[0].data.url)
        
        interaction.reply({ embeds: [embed] });
    }
}