const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roleinfo')
        .setDescription('Zeigt Informationen über eine Rolle an')
        .addRoleOption(option => 
            option.setName('role')
                .setDescription('Die Rolle, über die Informationen angezeigt werden sollen')
                .setRequired(true)),
    async execute(interaction) {
        const role = interaction.options.getRole('role');

        const embed = new EmbedBuilder()
            .setTitle(`Informationen über die Rolle: ${role.name}`)
            .setColor(role.color)
            .addFields(
                { name: 'Rollen-ID', value: role.id, inline: true },
                { name: 'Farbe', value: role.hexColor, inline: true },
                { name: 'Erstellt am', value: role.createdAt.toDateString(), inline: true },
                { name: 'Erwähnbar', value: role.mentionable ? 'Ja' : 'Nein', inline: true },
                { name: 'Position', value: role.position.toString(), inline: true },
                { name: 'Anzahl der Mitglieder', value: role.members.size.toString(), inline: true }
            );

        await interaction.reply({ embeds: [embed] });
    },
};