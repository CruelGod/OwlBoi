require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'beep',
        description: 'Replies with boop!',
    },
    {
        name: 'ping',
        description: 'Replies with pong!',
    },
    {
        name: 'embed',
        description: 'Sends an embed.',
    },
    {
        name: 'profile',
        description: 'Shows your profile.',
    },
];

const rest = new REST ({ version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Listening to chirps');
        
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID, 
                process.env.GUILD_ID
                ),
            { body: commands }
        );
        console.log('Birb has learned commands');
    } catch (error) {
        console.log(`am birb brained ples halp: ${error}`);
    }
})();