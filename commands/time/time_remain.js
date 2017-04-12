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
        var d = new Date()
        var hours = d.getHours()
        var min = d.getMinutes()
        var sec = d.getSeconds()
        if (hours > 17 || (hours == 17 && min >= 30) || hours < 8 || (hours == 8 && min < 15)) {
            message.reply("La journée est déjà fini bolosse !")
        } else {
            var hoursDisp = 17 - hours
            console.log("hoursDisp = " + hoursDisp + " donc 10 - " + hours)
            if (min > 0) {
                hoursDisp = hoursDisp - 1
                console.log("hoursDisp = " + hoursDisp + " donc 10 - " + hours + " -1")
            }
            var minDisp = 0
            if (min < 30) {
                minDisp = min + 30
            } else if (min >= 30) {
                var temp = 60 - min
                minDisp = temp + 30
            }
            message.reply("Il reste " + hoursDisp + "heures" + " et " + minDisp + "min avant la fin de la journée !")
        }
        
    }
}

module.exports = TimeCommand;