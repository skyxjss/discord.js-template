const { Client, IntentsBitField } = require('discord.js'); // Import discord.js
require('dotenv/config'); // Import dotenv
const { CommandKit } = require('commandkit'); // Import commandkit
const path = require('path'); // Import path
// Initializing client
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
});

new CommandKit({
    client,
    // Not required but needed for this template
    commandsPath: path.join(__dirname, 'commands'),
    eventsPath: path.join(__dirname, 'events'),
    // Not required and not needed for this template

    // validationsPath: path.join(__dirname, 'validations'),
    // devGuildIds: ['DEV_SERVER_ID_1', 'DEV_SERVER_ID_2'],
    // devUserIds: ['DEV_USER_ID_1', 'DEV_USER_ID_2'],
    // devRoleIds: ['DEV_ROLE_ID_1', 'DEV_ROLE_ID_2'],
    // skipBuiltInValidations: true,
    // bulkRegister: true,
});

client.login(process.env.Token) // Bot login
