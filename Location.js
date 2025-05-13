"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLocation = makeLocation;
exports.showAllThingsWithState = showAllThingsWithState;
exports.showAllThingsReserved = showAllThingsReserved;
exports.addThings = addThings;
exports.cancelReservation = cancelReservation;
const console_1 = require("console");
const Locationable_1 = __importDefault(require("./Locationable"));
const config_1 = require("./config/config");
var car = new Locationable_1.default("Car", "car description");
var house = new Locationable_1.default("House", "house description");
var allThings = [car, house];
function makeLocation(name) {
    const thing = allThings.find((thing) => thing.name.toLowerCase() === name.toLowerCase());
    if (thing && thing.isAvailable()) {
        thing.setReserver();
        (0, config_1.logSuccess)(`✅ ${thing.name} reserved.`);
        return;
    }
    if (thing && !thing.isAvailable()) {
        (0, config_1.logError)(`🐞 ${thing.name} already reserved.`);
        return;
    }
    else {
        (0, config_1.logError)(`${name} not found.`);
        return;
    }
}
function showAllThingsWithState() {
    (0, config_1.logInfo)("All Locationable things with state:");
    for (let i = 0; i < allThings.length; i++) {
        const thing = allThings[i];
        (0, console_1.log)("\t- " + thing.toString());
    }
}
function showAllThingsReserved() {
    (0, config_1.logInfo)("All Locationable things reserved:");
    const allThingsReserved = allThings.filter((thing) => !thing.isAvailable());
    if (allThingsReserved.length == 0) {
        (0, config_1.logInfo)("No things reserved.");
        return 0;
    }
    for (let i = 0; i < allThingsReserved.length; i++) {
        const thing = allThingsReserved[i];
        (0, console_1.log)("\t- " + thing.toString());
    }
}
async function addThings(name, description) {
    if (!name) {
        (0, config_1.logError)("⚠️ Name are required.");
        return false;
    }
    if (allThings.find((thing) => thing.name.toLowerCase === name.toLowerCase())) {
        (0, config_1.logWarning)(`⚠️ ${name} already exists.`);
        return false;
    }
    const newThing = new Locationable_1.default(name, description);
    allThings.push(newThing);
    (0, config_1.logSuccess)(`✅ ${name} added successfully.`);
    return true;
}
function cancelReservation(name) {
    const thing = allThings.find((thing) => thing.name.toLowerCase() === name.toLowerCase());
    if (!thing) {
        (0, config_1.logError)(`🐞 ${name} not found.`);
        return;
    }
    if (thing && thing.isAvailable()) {
        (0, config_1.logError)(`🐞 ${name} is not reserved.`);
        return;
    }
    if (thing && !thing.isAvailable()) {
        thing.setAvailable();
        (0, config_1.logSuccess)(`✅ ${name} reservation cancelled.`);
        return;
    }
}
