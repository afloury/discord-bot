const commando = require('discord.js-commando')
class PauseCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'pause',
            group: 'time',
            memberName: 'pause',
            description: 'Display time remaining before pause'
        })
    }

    async run(message, args) {
        /*var d = new Date()
        var hours = d.getHours()
        var min = d.getMinutes()
        var sec = d.getSeconds()
        if (hours > 17 || (hours == 17 && min >= 30) || hours < 8 || (hours == 8 && min < 15)) {
            message.reply("La journée est déjà fini bolosse !")
        } else if (hours > 15 || (hours == 15 && min > 45)) {
            message.reply("Il n'y a plus de pause aujourd'hui !")
        } else if (hours == 15 && min > 30 && min < 45) {
            message.reply("On est actuellement en pause, elle fini dans " + (45 - min) + " minutes !")
        } else if (hours == 13 && min > 45 || hours > 13) {
            var hoursDisp = 15 - hours
            if (min > 0) {
                hoursDisp = hoursDisp - 1
            }
            var minDisp = 0
            if (min < 30) {
                minDisp = min + 30
            } else if (min >= 30) {
                var temp = 60 - min
                minDisp = temp + 30
            }
            if (hoursDisp == 0) {
                message.reply("Il reste " + minDisp + "min avant la pause !")
            } else {
                message.reply("Il reste " + hoursDisp + "heures" + " et " + minDisp + "min avant la pause !")
            }
        } else if (hours == 12 && min > 15 || hours > 12) {
            var hoursDisp = 13 - hours
            if (min > 0) {
                hoursDisp = hoursDisp - 1
            }
            var minDisp = 0
            if (min < 15) {
                minDisp = min + 45
            } else if (min >= 15) {
                var temp = 60 - min
                minDisp = temp + 45
            }
            if (hoursDisp == 0) {
                message.reply("C'est midi, mange et vas dehors mater d'la shnek, t'inquiète mamène " +
                    "on reprend les cours dans " + minDisp + " minutes !")
            } else {
                message.reply("C'est midi, mange et vas dehors mater d'la shnek, t'inquiète mamène " +
                    "on reprend les cours dans " + hoursDisp + "heures et " + minDisp + " minutes !")
            }
        } else if (hours > 10 || hours == 10 && min > 30) {
            var hoursDisp = 12 - hours
            if (min > 0) {
                hoursDisp = hoursDisp - 1
            }
            var minDisp = 0
            if (min < 45) {
                minDisp = min + 15
            } else if (min >= 45) {
                var temp = 60 - min
                minDisp = temp + 15
            }
            if (hoursDisp == 0) {
                message.reply("La pause de midi est dans " + minDisp + "min !")
            } else {
                message.reply("La pause de midi est dans " + hoursDisp + "heures" + " et " + minDisp + "min !")
            }
        } else if (hours == 10 && min > 15 && min < 45) {
            message.reply("On est actuellement en pause, elle fini dans " + (30 - min) + " minutes !")
        } else if (hours == 8 && min > 15 || hours > 8) {
            var hoursDisp = (10 - hours)
            if (min > 0) {
                hoursDisp = hoursDisp - 1
            }
            console.log("hoursDisp = " + hoursDisp + " donc 10 - " + hours + " -1")
            var minDisp = 0
            if (min < 45) {
                minDisp = min + 15
            } else if (min >= 45) {
                var temp = 60 - min
                minDisp = temp + 15
            //}
            if (hoursDisp == 0) {
                message.reply("Il reste " + minDisp + "min avant la pause ! ")
            } else {
                message.reply("Il reste " + hoursDisp + "heures" + " et " + minDisp + "min avant la pause ! ")
            }
        } else {
            message.reply("Erreur, apprend à coder !")
        }*/

    }
}

module.exports = PauseCommand;