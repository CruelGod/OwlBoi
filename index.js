require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, ActivityType } = require('discord.js');

const client = new Client({
    intents:  [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});
// Bot's permission list, don't fuck this list up or it won't work


let status = [
  {
    name: 'Activity 1',
    type: ActivityType.Playing
  },
  {
    name: 'Activity 2',
    type: ActivityType.Streaming,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    name: 'Activity 3',
    type: ActivityType.Listening
  },
  {
    name: 'Activity 4',
    type: ActivityType.Watching
  },
];
//Activity types shown on discord, learn to use the custom type sometime ffs

const eventHandler = require('./handlers/eventhandler');
eventHandler(client);

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  console.log(interaction.commandName);
  //Reads Command name, could delete later
  if (interaction.commandName === 'profile') {
    const profile = new EmbedBuilder()
     .setTitle('Profile')
     .setDescription('This is an embed description')
     .setAuthor({
      name: 'insert user name',
      iconURL: 'https://i.imgur.com/AfFp7pu.png'
});
    interaction.reply({ embeds: [profile] });
  };

  if (interaction.commandName === 'embed') {
    const embed = new EmbedBuilder()
     .setTitle('Embed title')
     .setDescription('This is an embed description');
    interaction.reply({ embeds: [embed] });
  };

  if (interaction.commandName === 'beep') {
    interaction.reply('boop!')
  };

  if (interaction.commandName === 'ping') {
    interaction.reply('pong!')
  };
  
});
//Interaction bullshittery and also its NOT spelled interraction

client.on('messageCreate', (message) => {
 console.log(message.content); 


 if(message.author.bot) {
    return
 }

 
 if (message.content === 'Marco') {
  message.reply('Polo');
}

  if (message.content === 'hello') {
    message.reply('hello');
  }
 
  //Text and reply fuckery
});
// Logs chat messages and replies to em i guess??
client.login(process.env.TOKEN);
// Bot's login token, CHECK THE ENV FILE IF TOKEN IS CORRECT IF NOTHING WORKS