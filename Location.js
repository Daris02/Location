"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLocation = makeLocation;
exports.showAllThingsWithState = showAllThingsWithState;
const Car_1 = __importDefault(require("./types/Car"));
const House_1 = __importDefault(require("./types/House"));
var car = new Car_1.default("car", "car description");
var house = new House_1.default("house", "house description");
var allThings = [car, house];
function makeLocation(thing) {
    console.log("Location: make ... -> " + thing);
}
function showAllThingsWithState() {
    console.log("All Locationable things with state:");
    for (let i = 0; i < allThings.length; i++) {
        const thing = allThings[i];
        console.log('\t- ' + thing.toString());
    }
}
function addThings(thing) {
    allThings.push(thing);
    console.log("Add locationable things: " + thing);
}
