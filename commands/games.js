const {
    MessageEmbed,
    MessageActionRow,
    Modal,
    TextInputComponent
} = require("discord.js");
module.exports = {
    "name": "games",
    "description": "Get a game role",
    "options": [
        {
            name: 'games',
            description: 'Pick a game from our list (Suggest more with /suggest)',
            type: 'STRING',
            choices: [
                {name: "Minecraft", value: "minecraft"},
                {name: "COD", value: "cod"},
                {name: "FNAF", value: "fnaf"},
                {name: "PC Building Sim", value: "pcbuild"},
                {name: "GMOD", value: "gmod"},
                {name: "VRchat", value: "vrchat"},
                {name: "Rec Room", value: "recroom"},
                {name: "Web Games", value: "webgames"},
                {name: "Watch Dogs", value: "watchdogs"},
                {name: "Among Us", value: "amongus"},
                {name: "Astroneer", value: "astroneer"},
                {name: "Cluster Truck", value: "clustertruck"},
                {name: "Skyrim", value: "skyrim"},
                {name: "Farm Together", value: "farmtogether"},
                {name: "GTA", value: "gta"},
                {name: "Unturned", value: "unturned"},
                {name: "hacknet", value: "hacknet"},
                {name: "Rust", value: "rust"},
                {name: "Muck", value: "muck"},
                {name: "Other (Will bring up a menu)", value: "other"},
            ],
            required: true
        }
    ],
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
            modal.addComponents(Game);
		    await interaction.showModal(modal);
        }else{
            let Games = new MessageEmbed();
            Games.setDescription(`${interaction.options.getString("games")}`);
            Games.setTitle("Games");
            Games.setColor("#0000ff");
            Games.setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
            interaction.reply({ embeds: [Games], ephemeral: true });
        }
    }
}