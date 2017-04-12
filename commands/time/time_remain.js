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
        var endDate = new Date()
        endDate.setHours(17, 30)

        var startDate = new Date()
        startDate.setHours(8, 30)

        var timeRemaining = new Date(endDate - current)
        console.log("date actuelle ->" + current)

        if (timeRemaining > 0) {
            console.log("Time remain ->" + timeRemaining)
            message.reply("Il reste " + timeRemaining.getUTCHours() + "heures" + " et " + timeRemaining.getUTCMinutes() + "min avant la fin de la journée !")
        }
        else {
            message.reply("La journée est déjà fini bolosse !")
        }
    }
}

module.exports = TimeCommand;