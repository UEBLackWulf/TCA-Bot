const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anmeldung')
        .setDescription('Anmeldung für den Minecraft Server')
        .addStringOption(option => 
            option.setName('benutzername')
                .setDescription('Dein Minecraft Benutzername')
                .setRequired(true)),
    async execute(interaction) {
        const benutzername = interaction.options.getString('benutzername');

        // Nachricht an den Benutzer senden
        await interaction.reply({
            content: `Vielen Dank für deine Anmeldung! Wir haben deinen Minecraft Benutzername (${benutzername}) erhalten.`,
            ephemeral: true // Antwort ist nur für den Benutzer sichtbar
        });

        // Nachricht in einen bestimmten Kanal senden (z. B. Admin-Kanal)
        const adminChannel = interaction.guild.channels.cache.find(channel => channel.name === 'anmeldungs-logs'); // Ersetze 'anmeldungs-logs' mit dem Namen des gewünschten Kanals
        if (adminChannel) {
            // IDs der Admin-Rolle und des Serverbesitzers (ersetze diese mit den tatsächlichen IDs)
            const adminRoleId = '1310328240027734157'; // Ersetze mit der ID der Admin-Rolle
            const ownerId = interaction.guild.ownerId; // ID des Serverbesitzers

            // Nachricht mit Pings senden
            adminChannel.send({
                content: `Neue Anmeldung: Minecraft Benutzername: ${benutzername}\n<@&${adminRoleId}> <@${ownerId}>`,
                allowedMentions: { roles: [adminRoleId], users: [ownerId] } // Erlaubt das Pingen der Admin-Rolle und des Besitzers
            });
        } else {
            console.error('Admin-Kanal nicht gefunden.');
        }
    }
};