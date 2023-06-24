const chalk = require("chalk");
log = console.log;
exports.logExitingMessage = () => {
  log(chalk.hex("#a144f2").bold("❌ Exiting switch-env setup..."));
};

exports.logEnvsFolderCreated = () => {
  log(chalk.blue.bold("✔ Created './envs' folder."));
};

exports.logAddedEnvsToGitignore = () => {
  log(chalk.blue.bold("✔ Added './envs' rule to '.gitignore'."));
};

exports.logCreatedGitignoreFile = () => {
  log(chalk.blue.bold("✔ Created '.gitignore' file."));
};

exports.logGitignoreNotFound = () => {
  log(
    chalk.redBright.bold("❌ '.gitignore' not found in the current project.")
  );
};

exports.logEnvsAlreadyPresent = () => {
  log(chalk.hex("#f77f2a").bold("⚠ ./envs already exists."));
};

exports.logEnvsNotPresent = () => {
  log(
    chalk.redBright.bold("❌ './envs' folder has not been created "),
    chalk.cyanBright.bold("--run command 'switch-env init'")
  );
};

exports.logListOfFiles = (files) =>{
    console.table(files);
}