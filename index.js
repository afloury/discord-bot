
//const Discord = require('discord.js')
//const bot = new Discord.Client()

/*bot.on('message', (message) => {
    if (message.content == 'ping') {
        // message.reply('pong')
        message.channel.sendMessage('pong')
    }
})*/

const commando = require('discord.js-commando')
const bot = new commando.Client()

bot.registry.registerGroup('random', 'Random')
bot.registry.registerGroup('time', 'Time')
bot.registry.registerDefaults()
bot.registry.registerCommandsIn(__dirname + "/commands")

if(process.env.TOKEN) { 
    bot.login(process.env.TOKEN)
}
else { 
    console.log('Set environment variable TOKEN please !'); 
}

