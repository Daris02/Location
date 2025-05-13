#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

function makeLocation(thing: string) {
    console.log("Location: make");
}

program
  .command('')
  .description('Make location for something')
  .option('-t <thing>', 'Thing')
  .action((t) => {
    let thing = Object.values(t).toString();
    makeLocation(thing);
  });

program.on('command:*', ([cmd]) => {
  console.error(`Error: Unknown command '${cmd}'`);
  program.outputHelp();
  process.exit(1);
});

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
