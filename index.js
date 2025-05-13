#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const Location_1 = require("./Location");
const program = new commander_1.Command();
program
    .command("make")
    .description("Make location for something")
    .option("-t, --thing <t|thing>", "The thing to make a location for")
    .action((thing) => {
    let t = Object.values(thing).toString();
    (0, Location_1.makeLocation)(t);
});
program
    .command("things")
    .description("Show all things in database")
    .option("--show <show>", "The thing to make a location for")
    .action(() => {
    (0, Location_1.showAllThingsWithState)();
});
program.on("command:*", ([cmd]) => {
    console.error(`Error: Unknown command '${cmd}'`);
    if (cmd == null)
        program.outputHelp();
    program.outputHelp();
    process.exit(1);
});
program.parse(process.argv);
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
