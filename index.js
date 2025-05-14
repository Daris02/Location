"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readline = void 0;
const console_1 = require("console");
const Location_1 = require("./Location");
const promises_1 = require("readline/promises");
const process_1 = require("process");
const config_1 = require("./config/config");
exports.readline = (0, promises_1.createInterface)({ input: process_1.stdin, output: process_1.stdout });
async function main() {
    (0, console_1.log)("\n----------------------------");
    (0, config_1.logInfo)("Welcome to Locationable");
    (0, console_1.log)("----------------------------");
    (0, console_1.log)("1. All Things.");
    (0, console_1.log)("2. Add Things.");
    (0, console_1.log)("3. Make Location.");
    (0, console_1.log)("4. Cancel reservation.");
    (0, console_1.log)("5. Exit.");
    const userInput = await exports.readline.question("Please enter your choice: ");
    switch (userInput) {
        case "1":
            (0, Location_1.showAllThingsWithState)();
            let choice = await exports.readline.question("Do you want reserve? (y/n): ");
            if (choice.toLowerCase() === "y") {
                let name = await exports.readline.question("Enter the name of the thing: ");
                (0, Location_1.makeLocation)(name);
            }
            main();
            break;
        case "2":
            let thingName = await exports.readline.question("Enter the name of the thing (REQUIRED): ");
            let description = await exports.readline.question("Enter the description of the thing: ");
            if (!(0, Location_1.addThings)(thingName, description)) {
                (0, config_1.logWarning)('Please retry again!!!');
            }
            main();
            break;
        case "3":
            let reserveName = await exports.readline.question("Enter name of thing you want to reserved: ");
            (0, Location_1.makeLocation)(reserveName);
            main();
            break;
        case "4":
            if ((0, Location_1.showAllThingsReserved)() == 0)
                main();
            let cancelName = await exports.readline.question("Enter name of thing you want to cancel: ");
            (0, Location_1.cancelReservation)(cancelName);
            main();
            break;
        case "5":
            (0, console_1.log)("Goodbye!");
            exports.readline.close();
            break;
        default:
            (0, console_1.log)("Invalid choice.");
            exports.readline.close();
            break;
    }
}
main();
