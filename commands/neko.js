const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');
const nekoclient = require('nekos.life');

const neko = new nekoclient()

module.exports = {
    data: new SlashCommandBuilder()
        .setName('neko')
        .setDescription('Renvoie un neko'),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        const GIF = await neko.neko();

        const embed = new MessageEmbed()
            .setColor('#202225')
            .setTitle(`Neko`)
            .setImage(GIF.url)
        await interaction.reply({ embeds: [embed] });
    }
}