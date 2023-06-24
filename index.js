#! /usr/bin/env node

const { program } = require("commander");
const fs = require("fs");
const {initializeIntoProject,displayEnvList} = require("./src/actions")
program
  .command("show")
  .description("testing phase")
  .action(() => {
    console.log(process.cwd());
    fs.readdir(process.cwd(), (err, files) => {
      files.forEach((file) => {
        console.log(file);
      });
    });
    console.log("hey there");
  });

program
  .command("init")
  .description("testing phase")
  .action(initializeIntoProject);

program
  .command("ls")
  .description("List all .env which are present")
  .action(displayEnvList);

program.parse();

//make shorthand for env files visible
//eg |index | fileName | envName |
//check for file already exist error