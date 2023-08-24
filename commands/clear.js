const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, Permissions } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Permet d\'effacer des messages')
        .addStringOption(option => 
            option.setName('nbmsg')
            .setDescription('Le nombre de message')
            .setRequired(true)),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const amount = interaction.options.getString('nbmsg');

        if(!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return interaction.reply("nop pas les permissions");

        if(isNaN(amount)){
            return interaction.reply("Ce n'est pas un nombre valide !");
        }
        else if(amount <= 1 || amount > 100){
            return interaction.reply("Tu dois saisir un nomdre entre 1 et 99 !");
        }

        await interaction.channel.bulkDelete(amount)
            .then(messages => console.log(`${messages.size} messages supprimer`))
            .catch(console.error);
        
        return interaction.reply(`${amount} messages supprimer`)
    }
}