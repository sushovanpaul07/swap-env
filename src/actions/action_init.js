

const inspect = require("../utils/init_inspection");
const perform = require("../modules/perform");
const globals = require("../utils/global_storage");
const chalk = require('chalk') 

exports.initializeIntoProject = async () => {
  console.log(chalk.magentaBright(`
  ░░░░░░░░░░░░░░░░░░░░░▓█▒░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░▓█▓░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░▓█▓░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░▓█▓░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░▒████▓░░░░░░░░░▓███▒░░░░░░░░░░
  ░░░▓████████░▓█▒░░░░░░░░░█▓░████████▓░░░
  ░░░░░░░░░░▒▓█▓▒░░░░░░░░░░▒▓█▓▒░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  `))
  console.log(chalk.white.bold("THANK YOU FOR CHOOSING SWITCH-ENV"))
  console.log(chalk.white.bold("developed by Sushovan Paul\n\n\n"))
  globals.setData(process.cwd(),"default");
  await inspect.doesGitIgnoreExist(true);
  await inspect.doesEnvsExist(true);
  await perform.addRuleTogitignore();
};
