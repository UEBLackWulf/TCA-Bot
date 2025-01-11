const { InteractionContextType, PermissionFlagsBits, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bant einen USer!')
        .addUserOption(option =>
			option
				.setName('target')
				.setDescription('Das mitglied das gebannt werden soll')
				.setRequired(true))
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