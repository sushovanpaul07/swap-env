#! /usr/bin/env node

const { program } = require("commander");
const fs = require("fs");
const {initializeIntoProject,displayEnvList,switchToEnv,displayCurrentEnv} = require("./src/actions")


program
  .command("init")
  .description("Initialize Switch-Env into current Project")
  .action(initializeIntoProject);

program
  .command("ls")
  .description("List all .env files which are present")
  .action(displayEnvList);

  
program
.command("switch")
.description("Switch to different env from list")
.action(switchToEnv);

  
program
.command("current")
.description("Displays current env")
.action(displayCurrentEnv);

program.parse();

//make shorthand for env files visible
//eg |index | fileName | envName |
//check for file already exist error