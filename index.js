
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

bot.login('MzAxMjc3MDc1OTU5MTg1NDA4.C87paA.pcmI0-1oOubuAKr3hBl7AnNPUAA')