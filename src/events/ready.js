const { Events } = require('discord.js');

module.exports = {
    name: Events.READY,
    once: true,
    execute(client) {
        console.log(`Logged in as ${client.user.tag}!`);
    },
};

