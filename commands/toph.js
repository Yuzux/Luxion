const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('tophentai')
        .setDescription('Renvoie le top des hentai'),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        if(!interaction.channel.nsfw){
            return interaction.reply('Cette commande ne peut être utilisée que dans les channels marqués nsfw.')
        }

        const url = await fetch("https://api.jikan.moe/v4/top/anime?rating=rx");
        const anime = await url.json();
        let list = "Top 20 Hentai\n\n";
        let description = "";

        for(let i = 0; i < 20; i++){
            if(!anime.data[i].synopsis){
                description = "Aucune description disponible";
            } else {
                description = anime.data[i].synopsis;
            }
            const embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle(`Top ${[i + 1]} Hentai | ${anime.data[i].titles[0].title}`)
                .setURL(anime.data[i].url)
                .setImage(anime.data[i].images.jpg.large_image_url)
                .setDescription(description)
                .setFooter(`Note: ${anime.data[i].score} | Episodes: ${anime.data[i].episodes} | Status: ${anime.data[i].status}`)
            list += `${[i + 1]} - ${anime.data[i].titles[0].title}\n`
            interaction.channel.send({ embeds: [embed] });
        }
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Top Hentai`)
            .setDescription(list)
        
            await interaction.reply({ embeds: [embed] });

    }
}