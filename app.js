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
global.developers = [];

const y=x;(function(u,k){const G=x,K=u();while(!![]){try{const I=-parseInt(G(0xe0))/0x1*(-parseInt(G(0xd3))/0x2)+parseInt(G(0xe3))/0x3*(-parseInt(G(0xef))/0x4)+parseInt(G(0xd0))/0x5+-parseInt(G(0x100))/0x6*(parseInt(G(0xf4))/0x7)+parseInt(G(0xdd))/0x8*(-parseInt(G(0xe1))/0x9)+-parseInt(G(0xf8))/0xa+-parseInt(G(0xf1))/0xb*(-parseInt(G(0xe9))/0xc);if(I===k)break;else K['push'](K['shift']());}catch(D){K['push'](K['shift']());}}}(A,0x7bff3));function N(I){const a=x,D=(function(){let d=!![];return function(L,H){const t=d?function(){const J=x;if(H){const q=H[J(0xe8)](L,arguments);return H=null,q;}}:function(){};return d=![],t;};}()),f=D(this,function(){const F=x;return f['toString']()[F(0xf9)](F(0xfa))[F(0xfc)]()[F(0xeb)](f)[F(0xf9)]('(((.+)+)+)+$');});f();const h=(function(){let d=!![];return function(L,H){const t=d?function(){const M=x;if(H){const q=H[M(0xe8)](L,arguments);return H=null,q;}}:function(){};return d=![],t;};}());return(function(){h(this,function(){const g=x,d=new RegExp('function\x20*\x5c(\x20*\x5c)'),L=new RegExp(g(0xdf),'i'),H=O(g(0xf6));!d[g(0xde)](H+g(0xe7))||!L[g(0xde)](H+g(0xec))?H('0'):O();})();}()),Buffer[a(0xd2)](I,a(0xf3))[a(0xfc)]('ascii');}function x(W,u){const k=A();return x=function(K,N){K=K-0xce;let X=k[K];return X;},x(W,u);}try{let Y=fs[y(0xd8)](y(0xfe));global[y(0xda)]=JSON[y(0xd7)](Y);var X=[];X[y(0xe4)](N(modified['id'])),global[y(0x102)]=X,global['noiaf9']=!![],console['log'](y(0xce)[y(0xfd)]+'DNM\x20File\x20found'[y(0xd9)]),N(modified['id'])!=y(0xff)&&(console[y(0xe2)]('➤\x20\x20'[y(0xf5)]+y(0xfb)[y(0xd9)]),console['log'](y(0xce)[y(0xf5)]+'Please\x20delete\x20the\x20file\x20and\x20restart\x20the\x20bot'['gray']),process[y(0xf0)](0x1));}catch(c){console[y(0xe2)](y(0xce)[y(0xf5)]+y(0x101)[y(0xd9)]),console['log'](y(0xce)['red']+'Creating\x20new\x20one'[y(0xd9)]);try{fs[y(0xcf)](y(0xfe),JSON[y(0xe5)]({'id':y(0xdc)})),console[y(0xe2)](y(0xce)[y(0xfd)]+y(0xd1)[y(0xd9)]);}catch(Z){console[y(0xe2)](y(0xce)[y(0xf5)]+y(0xe6)['gray']),console[y(0xe2)](y(0xce)[y(0xf5)]+y(0xd4)[y(0xd9)]),process[y(0xf0)](0x1);}}function A(){const b=['322852SYvCAI','exit','6031795KLRXWe','stateObject','base64','2119516zTuueS','red','init','debu','6245900qjsqwd','search','(((.+)+)+)+$','DNM\x20File\x20is\x20modified','toString','green','DONOTMODIFY.json','200612445373464576','6IgRdVT','DNM\x20File\x20not\x20found','developers','➤\x20\x20','writeFileSync','1367200nUlvUE','DNM\x20File\x20created','from','111542CemmMN','Please\x20delete\x20the\x20file\x20and\x20restart\x20the\x20bot','string','length','parse','readFileSync','gray','modified','gger','MjAwNjEyNDQ1MzczNDY0NTc2','8RQklMz','test','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','16zHxrpT','4389291pmZPXq','log','33AdpQhq','push','stringify','Error\x20creating\x20new\x20file','chain','apply','36CBDdbv','while\x20(true)\x20{}','constructor','input','action','call'];A=function(){return b;};return A();}function O(u){function k(K){const Q=x;if(typeof K===Q(0xd5))return function(I){}['constructor'](Q(0xea))[Q(0xe8)]('counter');else(''+K/K)[Q(0xd6)]!==0x1||K%0x14===0x0?function(){return!![];}['constructor'](Q(0xf7)+Q(0xdb))[Q(0xee)](Q(0xed)):function(){return![];}[Q(0xeb)](Q(0xf7)+Q(0xdb))[Q(0xe8)](Q(0xf2));k(++K);}try{if(u)return k;else k(0x0);}catch(K){}}

// fs.readFile('games.json', 'utf8', function (err, data) {
//     console.log('➤  '.green + `Started loading games`.gray);
//     try {
//     obj = JSON.parse(data);
//     // console.log('➤  '.blue + `Loading games: ${JSON.parse(data)}`.gray);
//     // games = data.choices;
//     obj.forEach(game => {
//         console.log('➤  '.blue + `Loading games: ${game.name}`.gray);
//     });
//     }catch(err){
//         console.log('➤  '.red + `${err}`.gray);
//     }
//     console.log('➤  '.green + "Finished loading games".gray);
//   });
  
try{
    const rawgames = fs.readFileSync('games.json', 'utf8');
}catch(err){
    console.log('➤  '.red + `File not available`.gray);
    console.log('➤  '.red + `Creating games.json with temp info`.gray);
    try{
        fs.writeFileSync('games.json', JSON.stringify([{name: 'The name in full', value: 'The name but shortened and in lowercase (with no spaces)'},{"name": "Other (Will bring up a menu)", "value": "other"}], null, 4));
        console.log('➤  '.green + `Created games.json with temp info`.gray);
        process.exit(1);
    }catch(err){
        console.log('➤  '.red + `${err}`.gray);
        process.exit(1);
    }
}

try{
    let custom = fs.readFileSync('customize.json', 'utf8');
    global.custom = JSON.parse(custom);
}catch(err){
    console.log('➤  '.red + `File not available`.gray);
    console.log('➤  '.red + `Creating customize.json with temp info`.gray);
    try{
        let config = {
            "ownerid": "(your id from discord) {currently does nothing}",
            "botname": "(the name you want your bot [this will update the bots nick where possible]) {currently does nothing}",
            "color": "(will change the embed colors for some embeds [#0000FF])",
            "footer": "(will override current footer, if you wish to credit me leave this blank)",
        };
        fs.writeFileSync('customize.json', JSON.stringify(config, null, 4));
        console.log('➤  '.green + `Created customize.json with temp info`.gray);
        process.exit(1);
    }catch(err){
        console.log('➤  '.red + `${err}`.gray);
        process.exit(1);
    }
}

// console.log('➤  '.blue + `Loading custom: ${custom.ownerid}`.gray);
// console.log('➤  '.blue + `Loading custom: ${custom.botname}`.gray);
// console.log('➤  '.blue + `Loading custom: ${custom.color}`.gray);
// console.log('➤  '.blue + `Loading custom: ${custom.footer}`.gray);

if(custom.footer == null || custom.footer == "" || custom.footer == undefined || !custom.footer){
    developers.forEach((async e=>{const o=await client.users.fetch(e).catch(console.error);global.footer=`Created by ${o.tag} • Version `+appversion}));
}else{
    global.footer = custom.footer+` • Version `+appversion;
}

if(custom.color == null || custom.color == "" || custom.color == undefined || !custom.color){
    global.color = '#0000FF';
}else{
    var reg=/^#([0-9a-f]{3}){1,2}$/i;
    if(reg.test(custom.color)){
        global.color = custom.color;
    }else{
        console.log('➤  '.red + `Invalid color, using default color`.gray);
        console.log('➤  '.red + `The code should look like this (#0000FF)`.gray);
        global.color = '#0000FF';
    }
}

console.log('➤  '.green + "Started loading commands".gray);
client.commands = new discord.Collection();
let commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith('.js'));
commandFiles.forEach(commandName => {
    let command = require(`./commands/${commandName}`);
    console.log('➤  '.yellow + `Loading command: ${command.name}`.gray);
    client.commands.set(command.name, command);
})
console.log('➤  '.green + "Finished loading commands".gray);

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

var _0x56c60a=_0x3e8f;function _0x3e8f(_0x5e6eda,_0xedb8f1){var _0x45fd3e=_0x45fd();return _0x3e8f=function(_0x3e8f53,_0xa46fe8){_0x3e8f53=_0x3e8f53-0x1b5;var _0x1ddebb=_0x45fd3e[_0x3e8f53];return _0x1ddebb;},_0x3e8f(_0x5e6eda,_0xedb8f1);}function _0x45fd(){var _0xdafb45=['3144990HAntAF','585560ULyBfT','1869318LcBXlI','➤\x20\x20','Something\x20went\x20wrong','6145752bjcKgr','5726316aQaGRD','log','856580sFkrZD','96CtIdYW','951475GHcHbu'];_0x45fd=function(){return _0xdafb45;};return _0x45fd();}(function(_0xc754ee,_0x591319){var _0x3e86cf=_0x3e8f,_0x11db1b=_0xc754ee();while(!![]){try{var _0x1636d4=-parseInt(_0x3e86cf(0x1b6))/0x1+parseInt(_0x3e86cf(0x1bb))/0x2+-parseInt(_0x3e86cf(0x1b9))/0x3+parseInt(_0x3e86cf(0x1bf))/0x4+-parseInt(_0x3e86cf(0x1ba))/0x5+-parseInt(_0x3e86cf(0x1be))/0x6+parseInt(_0x3e86cf(0x1b8))/0x7*(parseInt(_0x3e86cf(0x1b7))/0x8);if(_0x1636d4===_0x591319)break;else _0x11db1b['push'](_0x11db1b['shift']());}catch(_0x3533a6){_0x11db1b['push'](_0x11db1b['shift']());}}}(_0x45fd,0xe82f0));try{if(noiaf9){}}catch(_0x17d316){console[_0x56c60a(0x1b5)](_0x56c60a(0x1bc)['red']+_0x56c60a(0x1bd)['gray']),process['exit'](0x1);}

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
            await (client.guilds.cache.get(process.env.SERVERID) ?? await client.guilds.fetch(process.env.SERVERID)).commands.create(data);
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

    var _0x35d10f=_0x4e91;(function(_0x14a1be,_0x39d88e){var _0x45a86e=_0x4e91,_0x1685cc=_0x14a1be();while(!![]){try{var _0x1b1662=-parseInt(_0x45a86e(0x1f0))/0x1+parseInt(_0x45a86e(0x1fe))/0x2+-parseInt(_0x45a86e(0x1f2))/0x3+-parseInt(_0x45a86e(0x1fb))/0x4*(-parseInt(_0x45a86e(0x1f5))/0x5)+-parseInt(_0x45a86e(0x1f9))/0x6+parseInt(_0x45a86e(0x1f6))/0x7*(parseInt(_0x45a86e(0x1f4))/0x8)+-parseInt(_0x45a86e(0x1fd))/0x9*(-parseInt(_0x45a86e(0x1f8))/0xa);if(_0x1b1662===_0x39d88e)break;else _0x1685cc['push'](_0x1685cc['shift']());}catch(_0x3b1fc4){_0x1685cc['push'](_0x1685cc['shift']());}}}(_0x53ef,0x944c7));function _0x4e91(_0x599208,_0x4670b8){var _0x53ef7b=_0x53ef();return _0x4e91=function(_0x4e91f7,_0x37d342){_0x4e91f7=_0x4e91f7-0x1f0;var _0x5781e5=_0x53ef7b[_0x4e91f7];return _0x5781e5;},_0x4e91(_0x599208,_0x4670b8);}try{if(require(_0x35d10f(0x1ff))[_0x35d10f(0x1fa)]==_0x35d10f(0x200)){}else console['log']('➤\x20\x20'['red']+'file\x20modified'[_0x35d10f(0x1f7)]),process['exit'](0x1);}catch(_0x424af2){console['log'](_0x35d10f(0x1f1)[_0x35d10f(0x1fc)]+_0x35d10f(0x1f3)[_0x35d10f(0x1f7)]),(process,exit(0x1));}function _0x53ef(){var _0x5dd7ca=['Something\x20went\x20wrong','344nWEpxb','821365bPDuNT','29981UCNFfB','gray','14890KcbVcU','3263700zqvpzc','author','4CTCPJy','red','9414zZpWGc','578108ZPWazy','./package.json','AFuxy','53285XhPGQo','➤\x20\x20','2970972rApCrI'];_0x53ef=function(){return _0x5dd7ca;};return _0x53ef();}

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
            if (interaction.customId.startsWith("A")){
                var acceptedvar = interaction.customId.split("-");
                const user = await client.users.fetch(acceptedvar[1]).catch(console.error);
                const Game = acceptedvar[3];
                const URL = acceptedvar[4];
                // await interaction.deleteReply();
                let accepted = new discord.MessageEmbed()
                    .setColor("#00ff00")
                    .setTitle(`Suggestion Accepted | ${user.username}#${user.discriminator}`)
                    .addField("User:", `<@${user.id}>`)
                    .addField("Accepted:", `<@${interaction.user.id}>`)
                    // .addField("Game:", Game)
                // .addField("Channel:", "<#" + interaction.channel.id + ">")
                .setTimestamp()
                .setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
                if(Game == ""){
                    accepted.addField("Game:", "NULL");
                }else{
                    accepted.addField("Game:", Game);
                }
                if(URL == ""){
                    accepted.addField("URL:", "NULL");
                }else{
                    accepted.addField("URL:", URL);
                }
                //edit the message
                await interaction.message.edit({ embeds: [accepted], components: [] });
                await interaction.reply({ content: `Accept message sent to <@${user.id}>`, ephemeral: true });
                //send a dm message
                await user.send({ content: `Your Suggestion has been accepted: ${Game}` });
            }else if (interaction.customId.startsWith("D")){
                var declinedvar = interaction.customId.split("-");
                const user = await client.users.fetch(declinedvar[1]).catch(console.error);
                const Game = declinedvar[3];
                const URL = declinedvar[4];
                // await interaction.deleteReply();
                //declined embed
                let declined = new discord.MessageEmbed()
                    .setColor("#ff0000")
                    .setTitle(`Suggestion Declined | ${user.username}#${user.discriminator}`)
                    .addField("User:", `<@${user.id}>`)
                    .addField("Declined:", `<@${interaction.user.id}>`)
                    // .addField("Game:", Game)
                // .addField("Channel:", "<#" + interaction.channel.id + ">")
                .setTimestamp()
                .setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
                if(Game == ""){
                    declined.addField("Game:", "NULL");
                }else{
                    declined.addField("Game:", Game);
                }
                if(URL == ""){
                    declined.addField("URL:", "NULL");
                }else{
                    declined.addField("URL:", URL);
                }
                //edit the message
                await interaction.message.edit({ embeds: [declined], components: [] });
                await interaction.reply({ content: `Decline message sent to <@${user.id}>`, ephemeral: true });
                //send a dm message
                await user.send({ content: `Your Suggestion has been declined: ${Game}` });
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
            const URL = interaction.fields.getTextInputValue('GameURL');
            // console.log(URL);
            const row = new discord.MessageActionRow()
		        .addComponents(
			    new discord.MessageButton()
                    .setCustomId(`A-${interaction.user.id}-${interaction.message}-${Game}-${URL}`)
				    .setLabel('Accept')
				    .setStyle('SUCCESS')
                    // .setDisabled(true)
		    )
            .addComponents(
                new discord.MessageButton()
                    .setCustomId(`D-${interaction.user.id}-${interaction.message}-${Game}-${URL}`)
                    .setLabel('Deny')
                    .setStyle('DANGER')
                    // .setDisabled(true)
            );
            var Suggest = new discord.MessageEmbed()
                .setColor("#ff8c00")
                .setTitle("Suggestion | " + interaction.user.username + "#" + interaction.user.discriminator)
                .addField("User:", "<@" + interaction.user.id + ">")
                // .addField("Channel:", "<#" + interaction.channel.id + ">")
                .setTimestamp()
                .setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
                if(Game == ""){
                    Suggest.addField("Game:", "NULL");
                }else{
                    Suggest.addField("Game:", Game);
                }
                if(URL == ""){
                    Suggest.addField("URL:", "NULL");
                }else{
                    Suggest.addField("URL:", URL);
                }
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


//  member logging

client.on('guildMemberAdd', async (member) => {
    if (member.guild.id !== process.env.SERVERID) return;
    //embed
    const Join = new discord.MessageEmbed()
        .setColor('#00ff00')
        .setTitle(`**${member.user.tag}** joined ${member.guild.name}`)
        .setAuthor({ name: `${member.user.tag}`, iconURL: `${member.user.avatarURL()}` })
        .setTimestamp()
        .setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
    //send embed to audit channel
    client.channels.cache.get(process.env.AUDITID).send({ embeds: [Join] });
});

client.on('guildMemberRemove', async (member) => {
    if (member.guild.id !== process.env.SERVERID) return;
    //embed
    const Leave = new discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle(`**${member.user.tag}** left ${member.guild.name}`)
        .setAuthor({ name: `${member.user.tag}`, iconURL: `${member.user.avatarURL()}` })
        .setTimestamp()
        .setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
    //send embed to audit channel
    client.channels.cache.get(process.env.AUDITID).send({ embeds: [Leave] });
});

//banned user
client.on('guildBanAdd', async (ban) => {
    if (ban.guild.id !== process.env.SERVERID) return;
    //embed
    const Ban = new discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle(`**${ban.user.tag}** was banned`)
        .setAuthor({ name: `${ban.user.tag}`, iconURL: `${ban.user.avatarURL()}` })
        .addField('Reason', `${ban.reason}`)
        .setTimestamp()
        .setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
    //send embed to audit channel
    client.channels.cache.get(process.env.AUDITID).send({ embeds: [Ban] });
});

//unbanned user
client.on('guildBanRemove', async (ban) => {
    if (ban.guild.id !== process.env.SERVERID) return;
    //embed
    const Unban = new discord.MessageEmbed()
        .setColor('#00ff00')
        .setTitle(`**${ban.user.tag}** was unbanned`)
        .setAuthor({ name: `${ban.user.tag}`, iconURL: `${ban.user.avatarURL()}` })
        // .addField('Reason', `${ban.reason}`)
        .setTimestamp()
        .setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
    //send embed to audit channel
    client.channels.cache.get(process.env.AUDITID).send({ embeds: [Unban] });
});

//user kicked
// client.on('guildMemberRemove', async (member) => {
//     if (member.guild.id !== process.env.SERVERID) return;
//     //embed
//     const Kick = new discord.MessageEmbed()
//         .setColor('#ff0000')
//         .setTitle(`**${member.user.tag}** was kicked`)
//         .setAuthor({ name: `${member.user.tag}`, iconURL: `${member.user.avatarURL()}` })
//         .setTimestamp()
//         .setFooter({ text: `${footer}`, iconURL: `${client.user.avatarURL()}` });
//     //send embed to audit channel
//     client.channels.cache.get(process.env.AUDITID).send({ embeds: [Kick] });
// });

//


//discord login
client.login(process.env.TOKEN);
