const {
    MessageEmbed,
    MessageActionRow,
    Modal,
    TextInputComponent
} = require("discord.js");
const fs = require('fs');
module.exports = {
    "name": "games",
    "description": "Get a game role",
    "options": [
        {
            name: 'games',
            description: 'Pick a game from our list (Suggest more with /suggest)',
            type: 'STRING',
            choices: JSON.parse(fs.readFileSync("./games.json")),
            required: true
        }
    ],
    "setDMPermission": false,
    async execute(interaction){
        if(interaction.options.getString("games") == "other"){
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
            const GameURL = new TextInputComponent()
                .setCustomId('GameURL')
                // The label is the prompt the user sees for this input
                .setLabel("A URL to the games offical site or Steam")
		        // Short means only a single line of text
			    .setStyle('SHORT');
            const Game2 = new MessageActionRow().addComponents(GameURL);
            modal.addComponents(Game, Game2);
		    await interaction.showModal(modal);
        }else{
            let roleName = interaction.options.getString("games");
            //find if role exists on server
            let role = interaction.guild.roles.cache.find(role => role.name === roleName);
            // console.log(role)
            // let role = interaction.guild.roles.cache.find(x => x.name === roleName);
                if (!role) {
                    //role does not exist, create it
                    interaction.guild.roles.create({name: roleName, permissions: [], reason: `Role did not exist before`}).then(role => {
                        //add role to user
                        interaction.member.roles.add(role);
                    }).catch(err => {
                        console.log(err);
                    })
                    //after creating role give to user
                    // await interaction.member.roles.add(role);
                } else {
                    //if exists give role to user
                    await interaction.member.roles.add(role);
                }
            let Games = new MessageEmbed();
            Games.setDescription(`Role ${interaction.options.getString("games")} given.`);
            Games.setTitle("Games");
            Games.setColor(color);
            Games.setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
            await interaction.reply({ embeds: [Games], ephemeral: true });
            let Update = new MessageEmbed();
            Update.setDescription(`Role ${interaction.options.getString("games")} given to <@${interaction.user.id}>.`);
            Update.setTitle("Game added");
            Update.setColor(color);
            Update.setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
            client.channels.cache.get(process.env.AUDITID).send({ embeds: [Update] });
        }
    }
}