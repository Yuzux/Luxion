const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('manga')
        .setDescription('Renvoie un manga random'),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        const url = await fetch("https://api.jikan.moe/v4/random/manga");
        const manga = await url.json();

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Random Manga | ${manga.data.titles[0].title}`)
            .setURL(manga.data.url)
            .setImage(manga.data.images.jpg.large_image_url)
            .setDescription(manga.data.synopsis)
            .setFooter(`Note: ${manga.data.score} | Chapitres: ${manga.data.chapters} | Status: ${manga.data.status}`)
        
        interaction.reply({ embeds: [embed] });   
    }
}