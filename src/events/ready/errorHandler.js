const { EmbedBuilder } = require('discord.js');

module.exports = (client) => {
const process = require('node:process');
const channel = client.channels.cache.get(process.env.ErrorChannel)
process.on('unhandledRejection',(reason, promise) => {
  const embed1 = new EmbedBuilder()
  .setColor('Red')
  .setTitle('Unhandled Rejection at:')
  .addFields(
    { name: 'Promise:', value: `${promise}`},
    { name: 'Reason', value: `${reason}`},
  )
channel.send({ embeds: [embed1] })
});

process.on('uncaughtException', (err) => {
  const embed2 = new EmbedBuilder()
  .setColor('Red')
  .setTitle('Uncaught Expection:')
  .addFields(
    { name: 'Error:', value: `${err}`},
  )
channel.send({ embeds: [embed2] })
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
  const embed3 = new EmbedBuilder()
  .setColor('Red')
  .setTitle('Uncaught Expection Monitor:')
  .addFields(
    { name: 'Error:', value: `${err}`},
    { name: 'Origin:', value: `${origin}`}
  )
channel.send({ embeds: [embed3] })
});
}
