const commando = require('discord.js-commando')
class TimeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'time',
            group: 'time',
            memberName: 'time',
            description: 'Display time remaining'
        })
    }

    async run(message, args) {
        var current = new Date()
        // test
        //current.setHours(16)
        //current.setMinutes(46)

        var endDate = new Date()
        endDate.setHours(17, 30)
        var startDate = new Date()
        startDate.setHours(8, 30)
        var timeRemaining = new Date(endDate - current)

        if ((endDate - current) > 0 && (current - startDate) > 0) {
            if (timeRemaining.getUTCHours() > 0) {
                message.reply("Il reste " + timeRemaining.getUTCHours() + "heures" + " et " + timeRemaining.getUTCMinutes() + "min avant la fin de la journée !")
            } else {
                message.reply("Il reste " + timeRemaining.getUTCMinutes() + "min avant la fin de la journée !")
            }
        } else if ((current - startDate) < 0) {
            message.reply("La journée n'a pas commencé bolosse !")
        } else {
            message.reply("La journée est déjà fini bolosse !")
        }
    }
}

module.exports = TimeCommand;