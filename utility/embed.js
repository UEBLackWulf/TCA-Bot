const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Sendet einen normalen Embed'),
    async execute(interaction) {
        const embed1 = new EmbedBuilder()
            .setTitle('DC Rules')
            .setDescription('Bitte die Regeln beachten!')
            .addFields(
                { name: 'Regel 1', value: 'Sei respektvoll gegenüber anderen Mitgliedern.'},
                { name: 'Regel 2', value: 'Keine Werbung ohne Erlaubnis.'},
                { name: 'Regel 3', value: 'Kein Spam.'},
                { name: 'Regel 4', value: 'Keine NSFW-Inhalte.'},
                { name: 'Regel 5', value: 'Habe Spaß und genieße die Zeit hier!'}
            )
            .setColor(0x3498db)
            .setFooter({ text: 'Diese Regeln gelten für alle Mitglieder und für alle neuen Mitglieder.' })
            .setAuthor({ name: 'UEBlackWulfGHG', iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
            .setTimestamp();

        const embed2 = new EmbedBuilder()
            .setTitle('MC Rules')
            .setDescription('Bitte die Regeln beachten!')
            .addFields(
                { name: 'Regel 1', value: 'Kein Griefing.'},
                { name: 'Regel 2', value: 'Keine Hacks oder Cheats.'},
                { name: 'Regel 3', value: 'Wer sich gegen mich und die Admins stellt, wird gebannt.'},
                { name: 'Regel 4', value: 'Keine Werbung für andere Server.'},
                { name: 'Regel 5', value: 'Habe Spaß und genieße das Spiel!'}
            )
            .setColor(0x5865F2)
            .setFooter({ text: 'Diese Regeln gelten für alle Mitglieder und für alle neuen Mitglieder.'})
            .setAuthor({ name: 'UEBlackWulfGHG', iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
            .setTimestamp();
        await interaction.reply({ embeds: [embed1, embed2] });
        console.log(`Embed sent by ${interaction.user.tag} in ${interaction.channel.name}`);
    }
};