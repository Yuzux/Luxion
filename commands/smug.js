const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');
const nekoclient = require('nekos.life');

const neko = new nekoclient()

module.exports = {
    data: new SlashCommandBuilder()
        .setName('smug')
        .setDescription('Renvoie un smug'),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        const GIF = await neko.smug();

        const embed = new MessageEmbed()
            .setColor('#202225')
            .setTitle(`Smug`)
            .setImage(GIF.url)
        await interaction.reply({ embeds: [embed] });
    }
}