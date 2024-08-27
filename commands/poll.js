const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Créer un sondage a 4 options')
        .addStringOption(option => 
            option.setName('question')
            .setDescription('La question du sondage')
            .setRequired(true))
        .addStringOption(option =>
            option.setName('option1')
            .setDescription('Option 1')
            .setRequired(true))
        .addStringOption(option =>
            option.setName('option2')
            .setDescription('Option 2')
            .setRequired(true))
        .addStringOption(option =>
            option.setName('option3')
            .setDescription('Option 3')
            .setRequired(false))
        .addStringOption(option =>
            option.setName('option4')
            .setDescription('Option 4')
            .setRequired(false)),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        //create a custom poll embed and react in discord v13
        const question = interaction.options.getString('question');
        const option1 = interaction.options.getString('option1');
        const option2 = interaction.options.getString('option2');
        const option3 = interaction.options.getString('option3');
        const option4 = interaction.options.getString('option4');

        const pollEmbed = {
            color: 0x0099ff,
            title: question,
            description: `1️⃣ ${option1}\n\n2️⃣ ${option2}`,
            timestamp: new Date(),
            footer: {
                text: 'Réagissez pour voter !',
            },
        };

        //add option 3 and 4 if they exist
        if(option3) pollEmbed.description += `\n\n3️⃣ ${option3}`;
        if(option4) pollEmbed.description += `\n\n4️⃣ ${option4}`;

        await interaction.reply({ embeds: [pollEmbed] })
            .then(async () => {
                const message = await interaction.fetchReply();
                await message.react('1️⃣');
                await message.react('2️⃣');
                if(option3) await message.react('3️⃣');
                if(option4) await message.react('4️⃣');
            })
            .catch(error => console.error(error));

        return interaction.editReply('Sondage créé !');
        
    }
}