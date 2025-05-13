import { log } from "console";
import { addThings, cancelReservation, makeLocation, showAllThingsReserved, showAllThingsWithState } from "./Location";
import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
import { logInfo, logWarning } from "./config/config";

export const readline = createInterface({ input, output });

async function main() {
  log("\n----------------------------");
  logInfo("🤗 Welcome to Locationable");
  log("----------------------------");
  log("1. All Things.")
  log("2. Add Things.")
  log("3. Make Location.")
  log("4. Cancel reservation.")
  log("5. Exit.")
  const userInput = await readline.question("Please enter your choice: ");

  switch (userInput) {
    case "1":
      showAllThingsWithState();
      let choice = await readline.question("Do you want reserve? (y/n): ");
      if (choice.toLowerCase() === "y") {
        let name = await readline.question("Enter the name of the thing: ");
        makeLocation(name);
      }
      main();
      break;

    case "2":
      let thingName = await readline.question("Enter the name of the thing (REQUIRED): ");
      let description = await readline.question("Enter the description of the thing: ");
      if (!addThings(thingName, description)) {
        logWarning('⚠️ Please retry again!!!')
      }
      main()
      break;

    case "3":
      let reserveName = await readline.question("Enter name of thing you want to reserved: ");
      makeLocation(reserveName);
      main();
      break;

    case "4":
      if (showAllThingsReserved() == 0) main();
      let cancelName = await readline.question("Enter name of thing you want to cancel: ");
      cancelReservation(cancelName);
      main();
      break;
    
    case "5":
      log("Goodbye! 👋👋👋");
      readline.close();
      break;

    default:
      log("Invalid choice.");
      readline.close();
      break;
  }
}

main();
