const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Stellt Informationen über den Benutzer bereit.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(`Dieser Befehl wurde ausgeführt von ${interaction.user.username}, der dem Server  ${interaction.member.joinedAt}.`);
	},
};
