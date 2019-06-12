const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setGame("Commande : !help");
    console.log("connecté");
});

bot.login("NTg3MzU1NTIwODEwMjIxNTgw.XP4sXw.fnOBY9wpW6dtxVI17Gq20Y2JOKs");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("liste des commandes \n -!help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour ! ^^");
        console.log("Commande Salut effectué");
    }
});
