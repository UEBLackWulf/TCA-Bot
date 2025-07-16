const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Zeigt eine Liste mit allen verfügbaren Befehle'),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });

        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Befehlsübersicht')
            .setDescription('Hier sind alle verfügbaren Befehle. Moderator-Befehle erfordern die Moderator-Rolle.')
            .addFields(
                {
                    name: '/anmeldung',
                    value: 'Melde dich für TCA an.\n**Optionen:** `name` (erforderlich)',
                    inline: false
                },
                { 
                    name: '/ping', 
                    value: 'Der Bot antwortet mit "Pong!"', 
                    inline: false 
                },
                { 
                    name: '/ban', 
                    value: 'Bannt ein Mitglied vom Server.\n**Optionen:** `user` (erforderlich), `reason` (optional)', 
                    inline: false 
                },
                { 
                    name: '/clear', 
                    value: 'Löscht eine bestimmte Anzahl von Nachrichten in einem Kanal.\n**Optionen:** `amount` (erforderlich)', 
                    inline: false 
                },
                { 
                    name: '/roleninfo', 
                    value: 'Zeigt Informationen über eine Rolle an.\n**Optionen:** `role` (erforderlich)', 
                    inline: false 
                },
                {
                    name: '/server',
                    value: 'Zeigt Informationen über den Server an.',
                    inline: false
                },
                {
                    name: '/user',
                    value: 'Zeigt Informationen über einen Benutzer an.\n**Optionen:** `user` (optional, Standard ist der Befehl auslösende Benutzer)',
                    inline: false
                },
                { 
                    name: '/help', 
                    value: 'Zeigt diese Hilfe an.', 
                    inline: false 
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Nur Moderatoren können Moderationsbefehle ausführen.' });

        await interaction.editReply({ embeds: [embed], ephemeral: true });
    },
};