const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');
const nekoclient = require('nekos.life');

const neko = new nekoclient()

module.exports = {
    data: new SlashCommandBuilder()
        .setName('waifu')
        .setDescription('Renvoie une waifu'),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        const GIF = await neko.waifu();

        const embed = new MessageEmbed()
            .setColor('#202225')
            .setTitle(`No waifu, no laifu`)
            .setImage(GIF.url)
        await interaction.reply({ embeds: [embed] });
    }
}