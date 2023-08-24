const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Information sur le serveur'),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {

        const serverinfo = new MessageEmbed()
            .setColor("#0099ff")
            .addField("Nom du serveur: ", `${interaction.guild.name}`, true)
            .addField("Date de création du serveur: ", `${interaction.guild.createdAt}`, true)
            .addField("Nombre d'utilisateurs: ", `${interaction.guild.memberCount}`, true)

        await interaction.reply({ embeds: [serverinfo] });
    }
}