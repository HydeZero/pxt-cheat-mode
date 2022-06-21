
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=5 color=#ff0000 icon=""
namespace CheatMode {
    /**
     * Launches Cheat Mode
     */
    //% block
    export function launchCheatMode(): void {
        let ActivatedCheats: number[] = []
        let CheatList = [
            "No Cheat Here Yet!",
            "No Cheat Here Yet!",
            "No Cheat Here Yet!",
            "No Cheat Here Yet!"
        ]
        let deletedCheat = ""
        let cheatNum = 0
        let CheatValidation = ""
        story.printText("Cheat Mode Activated.", 75, 60, 2, 0)
        while (!(story.checkLastAnswer("Resume Game"))) {
            story.printText("Please Select An Option:", 75, 60, 2, 0)
            story.showPlayerChoices("Input New Cheat", "Activate/Deactivate Cheat", "Remove A Cheat", "Resume Game")
            if (story.checkLastAnswer("Input New Cheat")) {
                story.printText("Please Insert A Cheat Code", 75, 60, 2, 0)
                CheatValidation = game.askForString("Cheat Code:")
                if (CheatValidation == "TRAVELVROOM") {
                    CheatList[0] = "Travel To Any Area"
                    story.printText("Cheat Valid! Cheat: Travel To Any Area", 75, 60, 2, 0)
                } else if (CheatValidation == "IMMODE") {
                    CheatList[1] = "Immortality"
                    story.printText("Cheat Valid! Cheat: Travel To Any Area", 75, 60, 2, 0)
                } else if (CheatValidation == "GODMOD") {
                    CheatList[2] = "Maxed Out Levels"
                    story.printText("Cheat Valid! Cheat: Maxed Out Levels", 75, 60, 2, 0)
                } else if (CheatValidation == "NOXPCHAL") {
                    CheatList[3] = "No Experience Mode(VERY HARD)"
                    story.printText("Cheat Valid! Cheat: No Experience Mode", 75, 60, 2, 0)
                } else {
                    story.printText("Invalid Cheat. Please try again..", 75, 60, 2, 0)
                }
            } else if (story.checkLastAnswer("Activate/Deactivate Cheat")) {
                story.printText("Select A Cheat To Activate/Deactivate:", 75, 60, 2, 0)
                story.showPlayerChoices(CheatList[0], CheatList[1], CheatList[2], CheatList[3])
                if (story.checkLastAnswer("No Cheat Here Yet!")) {
                    story.printText("There Is Not A Cheat Here. Please input a cheat.", 75, 60, 2, 0)
                }
            } else if (story.checkLastAnswer("Remove A Cheat")) {
                story.printText("Select A Cheat To Remove:", 75, 60, 2, 0)
                story.showPlayerChoices(CheatList[0], CheatList[1], CheatList[2], CheatList[3])
                if (story.checkLastAnswer("No")) {
                    cheatNum = 0
                    deletedCheat = CheatList.removeAt(cheatNum)
                } else if (false) {
                    cheatNum = 1
                    deletedCheat = CheatList.removeAt(cheatNum)
                } else if (false) {
                    cheatNum = 2
                    deletedCheat = CheatList.removeAt(cheatNum)
                } else if (false) {
                    let CheatsUnlocked: string[] = []
                    cheatNum = 3
                    deletedCheat = CheatsUnlocked.removeAt(cheatNum)
                }
            }
        }
        story.printText("Resuming Game.", 75, 60, 8, 0)
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
