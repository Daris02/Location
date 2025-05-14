import { log } from "console";
import Locationable from "./Locationable";
import { logError, logInfo, logSuccess, logWarning } from "./config/config";

var car = new Locationable("Car", "car description");
var house = new Locationable("House", "house description");
var allThings = [car, house];

export function makeLocation(name: string) {
  const thing = allThings.find((thing) => thing.name.toLowerCase() === name.toLowerCase());
  if (thing && thing.isAvailable()) {
    thing.setReserver();
    logSuccess(`${thing.name} reserved.`);
    return;
  }
  if (thing && !thing.isAvailable()) {
    logError(`${thing.name} already reserved.`);
    return;
  } else {
    logError(`${name} not found.`);
    return;
  }
}

export function showAllThingsWithState() {
  logInfo("All Locationable things with state:");
  for (let i = 0; i < allThings.length; i++) {
    const thing = allThings[i];
    log("\t- " + thing.toString());
  }
}
export function showAllThingsReserved() {
  logInfo("All Locationable things reserved:");
  const allThingsReserved = allThings.filter(
    (thing) => !thing.isAvailable()
  );
  if (allThingsReserved.length == 0) {
    logInfo("No things reserved.");
    return 0;
  }
  for (let i = 0; i < allThingsReserved.length; i++) {
    const thing = allThingsReserved[i];
    log("\t- " + thing.toString());
  }
}

export async function addThings(name, description) {
  if (!name) {
    logError("⚠️ Name are required.");
    return false;
  }

  if (allThings.find((thing) => thing.name.toLowerCase === name.toLowerCase())) {
    logWarning(`${name} already exists.`);
    return false;
  }

  const newThing = new Locationable(name, description);
  allThings.push(newThing);
  logSuccess(`${name} added successfully.`);
  return true;
}

export function cancelReservation(name) {
  const thing = allThings.find((thing) => thing.name.toLowerCase() === name.toLowerCase());
  if (!thing) {
    logError(`${name} not found.`);
    return;
  }

  if (thing && thing.isAvailable()) {
    logError(`${name} is not reserved.`);
    return;
  }

  if (thing && !thing.isAvailable()) {
    thing.setAvailable();
    logSuccess(`${name} reservation cancelled.`);
    return;
  }
}
