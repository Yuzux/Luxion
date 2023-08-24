const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');
const nekoclient = require('nekos.life');

const neko = new nekoclient()

module.exports = {
    data: new SlashCommandBuilder()
        .setName('feed')
        .setDescription('Renvoie un feed')
        .addUserOption(option => 
            option.setName('usr')
            .setDescription('Utilisateur')
            .setRequired(false)),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {

        const usertarget = interaction.options.getUser('usr');
        const user = interaction.user.username;

        if (!usertarget) {
            const GIF = await neko.feed();
            const embed = new MessageEmbed()
                .setColor('#202225')
                .setTitle(`${user} feeded themsselves`)
                .setImage(GIF.url)
            await interaction.reply({ embeds: [embed] });
        } else {
            const GIF = await neko.feed();
            const embed = new MessageEmbed()
                .setColor('#202225')
                .setTitle(`${user} feeded ${usertarget.tag}`)
                .setImage(GIF.url)
            await interaction.reply({ embeds: [embed] });
        }
    }
}