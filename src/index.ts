import { log } from "console";
import {
  addThings,
  cancelReservation,
  makeLocation,
  showAllThingsReserved,
  showAllThingsWithState,
} from "./Location";
import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
import { logError, logInfo, logWarning } from "./config/config";

export const readline = createInterface({ input, output });
const TIMEOUT_DURATION = 10_000;

async function askWithTimeout(question: string): Promise<string | null> {
  return Promise.race([
    readline.question(question),
    new Promise<string | null>((resolve) =>
      setTimeout(() => {
        resolve(null);
        logError("\nTimeout! Please try again.");
        readline.close();
        process.exit(1);
      }, TIMEOUT_DURATION)
    ),
  ]);
}

async function main() {
  log("\n----------------------------");
  logInfo("Welcome to Locationable");
  log("----------------------------");
  log("1. All Things.");
  log("2. Add Things.");
  log("3. Make Location.");
  log("4. Cancel reservation.");
  log("5. Exit.");
  const userInput = await askWithTimeout("Please enter your choice: ");

  switch (userInput) {
    case "1":
      showAllThingsWithState();
      let choice = await askWithTimeout("Do you want reserve? (y/n): ");
      if (choice.toLowerCase() === "y") {
        let name = await askWithTimeout("Enter the name of the thing: ");
        makeLocation(name);
      }
      main();
      break;

    case "2":
      let thingName = await askWithTimeout(
        "Enter the name of the thing (REQUIRED): "
      );
      let description = await askWithTimeout(
        "Enter the description of the thing: "
      );
      if (!addThings(thingName, description)) {
        logWarning("Please retry again!!!");
      }
      main();
      break;

    case "3":
      let reserveName = await askWithTimeout(
        "Enter name of thing you want to reserved: "
      );
      makeLocation(reserveName);
      main();
      break;

    case "4":
      if (showAllThingsReserved() == 0) main();
      let cancelName = await askWithTimeout(
        "Enter name of thing you want to cancel: "
      );
      cancelReservation(cancelName);
      main();
      break;

    case "5":
      log("Goodbye!");
      readline.close();
      break;

    default:
      log("Invalid choice.");
      readline.close();
      break;
  }
}

main();
