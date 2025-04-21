const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Löscht eine bestimmte Anzahl von Nachrichten im Kanal')
        .addIntegerOption(option =>
            option
                .setName('anzahl')
                .setDescription('Die Anzahl der zu löschenden Nachrichten')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
    async execute(interaction) {
        const anzahl = interaction.options.getInteger('anzahl');

        if (anzahl < 1 || anzahl > 100) {
            return interaction.reply({ content: 'Bitte gib eine Zahl zwischen 1 und 100 ein.', ephemeral: true });
        }

        const fetched = await interaction.channel.messages.fetch({ limit: anzahl });
        await interaction.channel.bulkDelete(fetched)
            .catch(error => interaction.reply({ content: `Fehler beim Löschen der Nachrichten: ${error}`, ephemeral: true }));

        await interaction.reply({ content: `${anzahl} Nachrichten wurden gelöscht.`, ephemeral: true });
    },
};