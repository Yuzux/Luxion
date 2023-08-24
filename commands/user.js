const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed} = require('discord.js');
const moment = require('moment');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Information sur un utilisateur')
        .addUserOption(option => 
            option.setName('usr')
            .setDescription('Utilisateur')
            .setRequired(true)),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {

        const user = interaction.options.getUser('usr');

        const userinfo = new MessageEmbed()
            .setColor("RANDOM")
            .setThumbnail(user.displayAvatarURL())
            .addField(`${user.tag}`, `${user}`, true)
            .addField("ID:", `${user.id}`, true)
            .addField("Pseudo:", `${user.username}`, true)
            .addField("Dans le serveur", interaction.guild.name, true)
            .addField("Bot:", `${user.bot}`, true)
            .addField("Compte créé le:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 

        await interaction.reply({ embeds: [userinfo] });
    }
}