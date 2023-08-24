const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');
const randomPuppy = require("random-puppy");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('Renvoie un meme'),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        const subReddits = ["dankmeme", "meme", "me_irl", "AnimeFunny", "animememes"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        
        const img = await randomPuppy(random);

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
        
        interaction.reply({ embeds: [embed] });
    }
}