const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Zeigt eine Liste mit allen verfügbaren Befehle'),
    async execute(interaction) {
        const commands = interaction.client.commands;
        let reply = 'Hier sind die verfügbaren Befehle:\n';
        
        commands.forEach(command => {
            reply += `**/${command.data.name}**: ${command.data.description}\n`;
        });

        await interaction.reply(reply);
    },
};