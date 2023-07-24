const { Client, IntentsBitField } = require('discord.js');
require('dotenv').config();

//defining the bot
const bot = new Client({
    intents:[
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.Guilds
    ]
})

//send message if user types ping
bot.on('messageCreate', (message) => {
    if((message.content).toLowerCase() == "ping"){
        message.reply({content: "Pong", ephemeral: true});
    }
})

//when the bot is ready it prints the bot is ready
bot.on('ready', (b) => {
    console.log(b.user.tag + " is ready!");
});

//login to the bot
bot.login(process.env.TOKEN);
