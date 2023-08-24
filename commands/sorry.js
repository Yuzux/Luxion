const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sorry')
        .setDescription('Renvoie un sorry'),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        
        await interaction.reply({ files: ['./media/sorry.mp4'] });
    }
}