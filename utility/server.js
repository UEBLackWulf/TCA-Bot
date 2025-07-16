const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Stellt Informationen über den Server bereit.'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`Dieser Server heißt ${interaction.guild.name} und hat ${interaction.guild.memberCount} Mitglieder.`);
	},
};
