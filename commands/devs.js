const {
    MessageEmbed,
    MessageActionRow,
    MessageButton
} = require("discord.js");
module.exports = {
    "name": "devs",
    "description": "Show a list of devs",
    "setDMPermission": false,
    async execute(interaction){
        var DevList = "";
        developers.forEach(devID => {
            DevList = DevList + `<@${devID}>\n`
        });
		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setLabel('Github')
				.setStyle('LINK')
				.setURL(`https://github.com/AFuxy`),
		);
        var Help = new MessageEmbed()
            .setColor(color)
            .setTitle("Developers")
            .setDescription(DevList)
            .setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
        await interaction.deferReply();
        await interaction.editReply({ embeds: [Help], ephemeral: true, components: [row] });
    }
}