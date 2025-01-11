const { InteractionContextType, PermissionFlagsBits, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bant einen User!')
        .addUserOption(option =>
			option
				.setName('target')
				.setDescription('Das Mitglied das gebannt werden soll')
				.setRequired(true))
				.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('Der grund für den ban'))
                .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
                .setContexts(InteractionContextType.Guild),
                async execute(interaction) {
                    const target = interaction.options.getUser('target');
                    const reason = interaction.options.getString('reason') ?? 'No reason provided';
            
                    await interaction.reply(`Banning ${target.username} for reason: ${reason}`);
                    await interaction.guild.members.ban(target);
                },
};