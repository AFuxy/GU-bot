const {
    MessageEmbed
} = require("discord.js");
module.exports = {
    "name": "ping",
    "description": "Check the ping to discord",
    async execute(interaction){
        var pingEmbed = new MessageEmbed()
            .setColor("#0000|FF")
            .setTitle("Ping")
            .setDescription(`Pong! ${client.ws.ping ? `The ping is ${Math.round(client.ws.ping)}ms.` : ''}`)
            .setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
        interaction.reply({ embeds: [pingEmbed], ephemeral: true });
    }
}