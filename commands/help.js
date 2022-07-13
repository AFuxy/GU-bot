const {
    MessageEmbed, discord
} = require("discord.js");
module.exports = {
    "name": "help",
    "description": "Show all commands",
    "setDMPermission": false,
    async execute(interaction){
        var commandOrder = [
            'help',
            'games',
            'suggest',
			// 'ping',
            'devs'
        ];
        var commandlist = "";
        commandOrder.forEach(commandName => {
            let command = client.commands.get(commandName);
            commandlist = commandlist + `**/${commandName}** | \`${command.description}\`\n`;
        });
        var Help = new MessageEmbed()
            .setColor(color)
            .setTitle("Help")
            .addField("Commands", commandlist)
            .setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
        await interaction.reply({ embeds: [Help], ephemeral: true });
    }
}