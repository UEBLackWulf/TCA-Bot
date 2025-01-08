const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anmeldung')
        .setDescription('Anmeldung für den Minecraft Server')
        .addStringOption(option => 
            option.setName('benutzername')
                .setDescription('Dein Minecraft Benutzername')
                .setRequired(true))
        .addStringOption(option => 
            option.setName('discord')
                .setDescription('Dein Discord Benutzername')
                .setRequired(true)),
    async execute(interaction) {
        const benutzername = interaction.options.getString('benutzername');
        const discord = interaction.options.getString('discord');

        await interaction.reply(`Vielen Dank für deine Anmeldung, ${benutzername}! Wir haben deinen Discord Benutzernamen (${discord}) erhalten.`);
    }
}