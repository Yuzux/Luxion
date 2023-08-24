const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anime')
        .setDescription('Renvoie un anime random'),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        const url = await fetch("https://api.jikan.moe/v4/random/anime");
        const anime = await url.json();

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Random Anime | ${anime.data.titles[0].title}`)
            .setURL(anime.data.url)
            .setImage(anime.data.images.jpg.large_image_url)
            .setDescription(anime.data.synopsis)
            .setFooter(`Note: ${anime.data.score} | Episodes: ${anime.data.episodes} | Status: ${anime.data.status}`)
        
        interaction.reply({ embeds: [embed] });   
    }
}