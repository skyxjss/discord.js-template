const { Client, ActivityType } = require('discord.js');
/**
 * 
 * @param {Client} client 
 */
module.exports = (client) => {
    console.log(`${client.user.username} is online!`) // Log once bot is online

    setInterval(() => {
        client.user.setPresence({ activities: [{ type: ActivityType.Custom, name: 'skyxjs', state: 'Bot template'}]})
    })
}