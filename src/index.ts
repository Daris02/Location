#!/usr/bin/env node
import { Command } from "commander";
import { makeLocation, showAllThingsWithState } from "./Location";

const program = new Command();

program
  .command("make")
  .description("Make location for something")
  .option("-t, --thing <t|thing>", "The thing to make a location for")
  .action((thing) => {
    let t = Object.values(thing).toString();
    makeLocation(t);
  });

program
  .command("things")
  .description("Show all things in database")
  .option("--show <show>", "The thing to make a location for")
  .action(() => {
    showAllThingsWithState();
  });

program.on("command:*", ([cmd]) => {
  console.error(`Error: Unknown command '${cmd}'`);
  if (cmd == null) program.outputHelp();
  program.outputHelp();
  process.exit(1);
});

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
