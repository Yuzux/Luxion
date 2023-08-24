const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');
const nekoclient = require('nekos.life');

const neko = new nekoclient()

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nekogif')
        .setDescription('Renvoie un GIF de neko'),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        const GIF = await neko.nekoGif();

        const embed = new MessageEmbed()
            .setColor('#202225')
            .setTitle(`Neko but GIF`)
            .setImage(GIF.url)
        await interaction.reply({ embeds: [embed] });
    }
}