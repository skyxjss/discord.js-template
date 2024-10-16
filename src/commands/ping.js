const { SlashCommandBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
       .setName('ping')
       .setDescription('Shows the bots ping.'),
 
    run: ({ interaction, client, handler }) => {
        interaction.reply(`🏓 Pong! ${client.ws.ping}ms`);
    },
 
    options: {
        userPermissions: [''],
        botPermissions: [''],
        deleted: false,
    },
};