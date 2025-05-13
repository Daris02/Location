import Car from "./types/Car";
import House from "./types/House";
import Locationable from "./types/Locationable";

var car = new Car("car", "car description");
var house = new House("house", "house description");
var allThings = [car, house];

export function makeLocation(thing?: string) {
  console.log("Location: make ... -> " + thing);
}

export function showAllThingsWithState() {
  console.log("All Locationable things with state:");
  for (let i = 0; i < allThings.length; i++) {
    const thing = allThings[i];
    console.log('\t- '+thing.toString());
  }
}

function addThings(thing: Locationable) {
  allThings.push(thing);
  console.log("Add locationable things: " + thing);
}
