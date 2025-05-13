"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLocation = makeLocation;
exports.showAllThingsWithState = showAllThingsWithState;
const Car_1 = __importDefault(require("./Car"));
var car = new Car_1.default("car", 4, 4);
var allThings = [];
function makeLocation(thing) {
    console.log("Location: make ... -> " + thing);
}
function showAllThingsWithState() {
    console.log("Location: showAllThingsWithState ... -> " + allThings);
}
function addThings(thing) {
    allThings.push(thing);
    console.log("Location: addThings ... -> " + thing);
}
