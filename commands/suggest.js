const {
    MessageEmbed,
    MessageActionRow,
    MessageButton,
    Modal,
    TextInputComponent
} = require("discord.js");
module.exports = {
    "name": "suggest",
    "description": "suggest a game we do not already have",
    // "options": [
    //     {
    //         name: 'game',
    //         description: 'Enter the name of the game you wish you see added',
    //         type: 'STRING',
    //         required: true
    //     }
    // ],
    "setDMPermission": false,
    async execute(interaction){
        const modal = new Modal()
			.setCustomId('GameSuggest')
			.setTitle('Suggest a game');
        const gameName = new TextInputComponent()
			.setCustomId('GameName')
		    // The label is the prompt the user sees for this input
			.setLabel("What is the name of the game?")
		    // Short means only a single line of text
			.setStyle('SHORT');
        const Game = new MessageActionRow().addComponents(gameName);
        modal.addComponents(Game);
		await interaction.showModal(modal);
        // const row = new MessageActionRow()
		// .addComponents(
		// 	new MessageButton()
        //         .setCustomId('Accept')
		// 		.setLabel('Accept')
		// 		.setStyle('SUCCESS')
        //         .setDisabled(true)
		// )
        // .addComponents(
        //     new MessageButton()
        //         .setCustomId('Deny')
        //         .setLabel('Deny')
        //         .setStyle('DANGER')
        //         .setDisabled(true)
        // );
        // var Suggest = new MessageEmbed()
        //     .setColor("#ff8c00")
        //     .setTitle("Suggestion | " + interaction.user.username + "#" + interaction.user.discriminator)
        //     .addField("User:", "<@" + interaction.user.id + ">")
        //     .addField("Game:", interaction.options.getString("game"))
        //     // .addField("Channel:", "<#" + interaction.channel.id + ">")
        //     .setTimestamp()
        //     .setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
        // await client.channels.cache.get(process.env.AUDITID).send({ content: `<@&${process.env.STAFFROLE}>`, embeds: [Suggest], components: [row] });
        // await interaction.reply({ content: "Your suggestion has been sent to staff", ephemeral: true});
    }
}