#!/usr/bin/env node
const Boilerplate = require("./models/boilerplate");
const System = require("./models/system");
const { red, magentaBright } = require("chalk");

const args = process.argv.slice(2);
const [command] = args;

const validCommands = [
  "boilerplate",
  "bye",
  "info",
  "github",
  "clone",
  "feature-branch",
];

if (!command || !validCommands.includes(command)) {
  console.log(red("Please enter a valid command!"));
  console.log(
    magentaBright(`
  Availablle commands:

  ${validCommands.join("\n  ")}
  `)
  );
  process.exit(0);
}

if (command === "boilerplate") {
  Boilerplate.vainilla();
} else if (command === "bye") {
  System.shutdown();
} else if (command === "info") {
  System.info();
} else if (command === "github") {
  System.openGithub();
} else if (command === "clone") {
  Boilerplate.cloneRepo();
} else if (command === "feature-branch") {
  Boilerplate.featureBranch();
}
