//import discord
const discord = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder, ContextMenuCommandBuilder } = require('@discordjs/builders');
client = new discord.Client({ intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES] });
//import colors
const colors = require('colors');
//import fs
const fs = require('fs');
//grab app version
const appversion = require('./package.json').version;
//import env
require('dotenv').config();

//globals
global.footer = "Created by Gamers Unite devs • Version " + appversion;
global.developers = [
    '200612445373464576',
    '323534734749597696'
];
global.devservers = [
    '986084748784992328'
];

console.log('➤  '.gray + "Started loading commands".gray);
client.commands = new discord.Collection();
let commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith('.js'));
commandFiles.forEach(commandName => {
    let command = require(`./commands/${commandName}`);
    console.log('➤  '.gray + `Loading command: ${command.name}`.gray);
    client.commands.set(command.name, command);
})
console.log('➤  '.gray + "Finished loading commands".gray);

async function refreshSlashCommands(){
    function setStandardOptions(baseoption, optiondata){
        baseoption.setName(optiondata.name);
        baseoption.setDescription(optiondata.description);
        baseoption.setRequired(optiondata.required ?? false);
        return baseoption;
    }
    const slashcollection = [];
    client.commands.forEach(command => {
        const slashcommand = new SlashCommandBuilder()
            .setName(command.name)
            .setDescription(command.description ?? utility.getText("english", command.name, "commandDescription"));
        if(command.options) command.options.forEach(option => {
            if(option.type == "USER"){
                slashcommand.addUserOption(useroption => {
                    return setStandardOptions(useroption, option);
                });
            }else if(option.type == "STRING"){
                slashcommand.addStringOption(stringoption => {
                    return setStandardOptions(stringoption, option);
                });
            }else if(option.type == "CHANNEL"){
                slashcommand.addChannelOption(channeloption => {
                    return setStandardOptions(channeloption, option);
                });
            }else if(option.type == "INTEGER"){
                slashcommand.addIntegerOption(integeroption => {
                    return setStandardOptions(integeroption, option);
                });
            }else if(option.type == "USER"){
                slashcommand.addUserOption(useroption => {
                    return setStandardOptions(useroption, option);
                });
            }else if(option.type == "ROLE"){
                slashcommand.addRoleOption(roleoption => {
                    return setStandardOptions(roleoption, option);
                });
            }else if(option.type == "SUB_COMMAND"){
                return slashcommand.addSubcommand(subcommand => {
                    subcommand.setName(option.name);
                    subcommand.setDescription(option.description);
                    option.options.forEach(option => {
                        if(option.type == "USER"){
                            subcommand.addUserOption(useroption => {
                                return setStandardOptions(useroption, option);
                            });
                        }else if(option.type == "STRING"){
                            subcommand.addStringOption(stringoption => {
                                return setStandardOptions(stringoption, option);
                            });
                        }else if(option.type == "CHANNEL"){
                            subcommand.addChannelOption(channeloption => {
                                return setStandardOptions(channeloption, option);
                            });
                        }else if(option.type == "INTEGER"){
                            subcommand.addIntegerOption(integeroption => {
                                return setStandardOptions(integeroption, option);
                            });
                        }else if(option.type == "USER"){
                            subcommand.addUserOption(useroption => {
                                return setStandardOptions(useroption, option);
                            });
                        }else if(option.type == "ROLE"){
                            subcommand.addRoleOption(roleoption => {
                                return setStandardOptions(roleoption, option);
                            });
                        }
                    });
                    return subcommand;
                });
            }else if(option.type == "SUB_COMMAND_GROUP"){
                return slashcommand.addSubcommandGroup(subcommandgroup => {
                    subcommandgroup.setName(option.name);
                    subcommandgroup.setDescription(option.description);
                    option.options.forEach(option => {
                        return subcommandgroup.addSubcommand(subcommand => {
                            subcommand.setName(option.name);
                            subcommand.setDescription(option.description);
                            option.options.forEach(option => {
                                if(option.type == "USER"){
                                    subcommand.addUserOption(useroption => {
                                        return setStandardOptions(useroption, option);
                                    });
                                }else if(option.type == "STRING"){
                                    subcommand.addStringOption(stringoption => {
                                        return setStandardOptions(stringoption, option);
                                    });
                                }else if(option.type == "CHANNEL"){
                                    subcommand.addChannelOption(channeloption => {
                                        return setStandardOptions(channeloption, option);
                                    });
                                }else if(option.type == "INTEGER"){
                                    subcommand.addIntegerOption(integeroption => {
                                        return setStandardOptions(integeroption, option);
                                    });
                                }else if(option.type == "USER"){
                                    subcommand.addUserOption(useroption => {
                                        return setStandardOptions(useroption, option);
                                    });
                                }else if(option.type == "ROLE"){
                                    subcommand.addRoleOption(roleoption => {
                                        return setStandardOptions(roleoption, option);
                                    });
                                }
                            });
                            return subcommand;
                        });
                    });
                    return subcommandgroup;
                });
            }
        });
        slashcollection.push(slashcommand);
    });
    const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
    console.log("Refreshing slash commands");
    await rest.put(
        Routes.applicationCommands(client.user.id),
        { body: slashcollection },
    );
    console.log("Refreshed slash commands");
};

client.once('ready', async () => {
    if (!client.application?.owner) await client.application?.fetch();
    if(process.env.DEBUG == "true"){
        client.commands.forEach(async (command) => {
            if(!command.options) command.options = [];
            if(!command.developerOnly) command.developerOnly = false;
            if(!command.setDMPermission) command.setDMPermission = false;
            let data = {
                name: command.name,
                description: command.description,
                options: command.options,
                setDMPermission: !command.setDMPermission,
                defaultPermission: !command.developerOnly
            };
            await (client.guilds.cache.get('986084748784992328') ?? await client.guilds.fetch('986084748784992328')).commands.create(data);
        });
    }else{
        refreshSlashCommands();
    }
    console.log('✔  '.green + colors.green(`Bot is ready | ${appversion}`));
    client.user.setActivity(`V${appversion}`, { type: 'WATCHING' });
});

const data = new ContextMenuCommandBuilder()
	.setName('suggest')
	.setType(3);

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand() && !interaction.isButton() && !interaction.isModalSubmit() && !interaction.isContextMenu()) return;
    // console.log(interaction);
	
    if (interaction.isCommand()) {
        try{
            await client.commands.get(interaction.commandName).execute(interaction);
        }catch(err){
            console.log(`Command: ${interaction.commandName}, run by: ${interaction.user.username}#${interaction.user.discriminator} failed for the reason: ${err}`);
            await interaction.deferReply();
            await interaction.editReply({ content: "Something went wrong", ephemeral: true });
        }
    } else if (interaction.isButton()) {
        try{
            if (interaction.customId.startsWith("A") ){
                // let newA = interaction.customId.substring(1);
                let gameA = interaction.customId.substring(19);
                // await interaction.deleteReply();
                await interaction.reply({ content: `Accept message sent to <@${interaction.user.id}>`, ephemeral: true });
                //send a dm message
                await interaction.user.send({ content: `Your Suggestion has been accepted: ${gameA}` });
            }else if (interaction.customId.startsWith("D") ){
                // let newD = interaction.customId.substring(1);
                let gameD = interaction.customId.substring(19);
                // await interaction.deleteReply();
                await interaction.reply({ content: `Decline message sent to <@${interaction.user.id}>`, ephemeral: true });
                //send a dm message
                await interaction.user.send({ content: `Your Suggestion has been declined: ${gameD}` });
            }else{
                await interaction.reply({ content: "ERROR", ephemeral: true });
            }
        }catch(err){
            console.log(`Command: button press, run by: ${interaction.user.username}#${interaction.user.discriminator} failed for the reason: ${err}`);
            await interaction.reply({ content: "Something went wrong", ephemeral: true });
        }
    } else if (interaction.isModalSubmit()) {
        try{
            const Game = interaction.fields.getTextInputValue('GameName');
            const row = new discord.MessageActionRow()
		        .addComponents(
			    new discord.MessageButton()
                    .setCustomId(`A${interaction.user.id}${Game}`)
				    .setLabel('Accept')
				    .setStyle('SUCCESS')
                    // .setDisabled(true)
		    )
            .addComponents(
                new discord.MessageButton()
                    .setCustomId(`D${interaction.user.id}${Game}`)
                    .setLabel('Deny')
                    .setStyle('DANGER')
                    // .setDisabled(true)
            );
            var Suggest = new discord.MessageEmbed()
                .setColor("#ff8c00")
                .setTitle("Suggestion | " + interaction.user.username + "#" + interaction.user.discriminator)
                .addField("User:", "<@" + interaction.user.id + ">")
                .addField("Game:", Game)
                // .addField("Channel:", "<#" + interaction.channel.id + ">")
                .setTimestamp()
                .setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
            client.channels.cache.get(process.env.SUGGESTID).send({ content: `<@&${process.env.STAFFROLE}>`, embeds: [Suggest], components: [row] });
            interaction.reply({ content: "Your suggestion has been sent to staff", ephemeral: true});
        }catch(err){
            console.log(`Command: , run by: ${interaction.user.username}#${interaction.user.discriminator} failed for the reason: ${err}`);
            await interaction.reply({ content: "Something went wrong", ephemeral: true });
        }
    } else if (interaction.isContextMenu()){
        try{
            if (interaction.customId == "suggest"){
                const row = new discord.MessageActionRow()
                .addComponents(
                new discord.MessageButton()
                    .setCustomId('Accept')
                    .setLabel('Accept')
                    .setStyle('SUCCESS')
                    .setDisabled(true)
            )
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('Deny')
                    .setLabel('Deny')
                    .setStyle('DANGER')
                    .setDisabled(true)
            );
            const Game = interaction.fields.getTextInputValue('GameName');
            var Suggest = new discord.MessageEmbed()
                .setColor("#ff8c00")
                .setTitle("Suggestion | " + interaction.user.username + "#" + interaction.user.discriminator)
                .addField("User:", "<@" + interaction.user.id + ">")
                .addField("Game:", Game)
                // .addField("Channel:", "<#" + interaction.channel.id + ">")
                .setTimestamp()
                .setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
            client.channels.cache.get(process.env.AUDITID).send({ content: `<@&${process.env.STAFFROLE}>`, embeds: [Suggest], components: [row] });
            interaction.reply({ content: "Your suggestion has been sent to staff", ephemeral: true});
            }
        }catch(err){
            console.log(`Command: , run by: ${interaction.user.username}#${interaction.user.discriminator} failed for the reason: ${err}`);
            await interaction.reply({ content: "Something went wrong", ephemeral: true });
        }
    }
});

//if user deletes message send to auditid
client.on('messageDelete', async (message) => {
    if (message.author.bot) return;
    if (message.guild.id !== process.env.SERVERID) return;
    //embed
    const Delete = new discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle(`Message deleted in **#${message.channel.name}**`)
        .setAuthor({ name: `${message.author.tag}`, iconURL: `${message.author.avatarURL()}` })
        .setDescription(`${message.content}`)
        .setTimestamp()
        .setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
    //send embed to audit channel
    client.channels.cache.get(process.env.AUDITID).send({ embeds: [Delete] });
});

// Find Difference Between Two String and then sorround it with ``
function findDiff(str1, str2) {
    let diff = "";
    // let str11 = "test";
    // let str22 = "testnice";
    for (let i = 0; i < str2.length; i++) {
        if (str1[i] == str2[i]) {
            diff += ` \`${str2[i]}\``;
        }else{
            diff += `${str2[i]}`;
        }
    }
    // console.log(diff);
    return `${diff}`;
}

//if user edits message send to auditid
client.on('messageUpdate', async (oldMessage, newMessage) => {

    if (newMessage.author.bot) return;
    if (newMessage.guild.id !== process.env.SERVERID) return;
    //embed
    // const diff = findDiff(oldMessage.content, newMessage.content)
    const Edit = new discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle(`Message edited in **#${newMessage.channel.name}**`)
        .setAuthor({ name: `${newMessage.author.tag}`, iconURL: `${newMessage.author.avatarURL()}` })
        // .setDescription(`${findDiff(oldMessage.content, newMessage.content)}`)
        .addField('Old Message', `${oldMessage.content}`)
        .addField('New Message', `${newMessage.content}`)
        .setTimestamp()
        .setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
    //send embed to audit channel
    client.channels.cache.get(process.env.AUDITID).send({ embeds: [Edit] });
    // console.log();
});

client.on('memberJoin', async (member) => {
    if (member.guild.id !== process.env.SERVERID) return;
    //embed
    const Join = new discord.MessageEmbed()
        .setColor('#00ff00')
        .setTitle(`${member.user.tag} joined **${member.guild.name}**`)
        .setAuthor({ name: `${member.user.tag}`, iconURL: `${member.user.avatarURL()}` })
        .setTimestamp()
        .setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
    //send embed to audit channel
    client.channels.cache.get(process.env.AUDITID).send({ embeds: [Join] });
});

//discord login
client.login(process.env.TOKEN);