const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');
const NSFW = require("nsfw-discord");

const nsfw = new NSFW();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hentai')
        .setDescription('Renvoie un hentai'),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        if(!interaction.channel.nsfw){
            return interaction.reply('Cette commande ne peut être utilisée que dans les channels marqués nsfw.')
        }

        const image = await nsfw.hentai();

        const embed = new MessageEmbed()
            .setColor('#202225')
            .setTitle(`Hentai is life`)
            .setImage(image)
        await interaction.reply({ embeds: [embed] });
    }
}