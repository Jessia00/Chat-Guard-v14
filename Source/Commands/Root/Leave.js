module.exports = {
    Name: 'leave',
    Aliases: ['fleave', 'forceleave', 'leaveguild', 'removeguild', 'leaveserver'],
    Description: 'Force the bot to leave the server',
    Usage: 'leave <ServerID>',
    Category: 'Root',
    Cooldown: 0,

    Permissions: {
        User: [],
        Bot: [],
        Role: []
    },

    Command: {
        Prefix: true,
        Slash: false,
        Ephemeral: false,
        
        Options: [],
    },
    
    messageRun: async (client, message, args, settings) => {
        const guildId = args[0];

        if (!guildId) {
            return message.channel.send(`You have to give me some serverID to run!`)
        }

        const guild = client.guilds.cache.find((g) => g.id === guildId);

        if (!guild) {
            return message.channel.send(`Sorry, ${message.author}. server not found`)
        }

        try {
            await guild.leave();
            message.channel.send(`I successfully logged out of the **${guild.name}** server.`)
        } catch (err) {
            message.channel.send(`"The following error has occurred: **${err}**.`)
        }
    },
    interactionRun: async (client, interaction, settings) => {},
};