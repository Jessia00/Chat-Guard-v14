module.exports = {
    Name: 'portal',
    Aliases: [],
    Description: 'Force the bot to create a invite to the server',
    Usage: 'portal <ServerID>',
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
            return message.channel.send(`You have to give me some serverID to so i can create a portal to`)
        }

        const guild = client.guilds.cache.get(args[0]);

        if (!guild) {
            return message.channel.send(`Sorry, ${message.author}. server not found`)
        }

        try {
            await guild.channels.cache
            .filter(channel => channel.type !== "category").first()
            .createInvite(
                false,
                84600,
                0,
                false
            ).then(invite => message.channel.send(`discord.gg/${invite.code}`));
        } catch (err) {
            message.channel.send(`"The following error has occurred: **${err}**.`)
        }
    },
};