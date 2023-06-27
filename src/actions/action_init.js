

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
  console.log(chalk.greenBright.bold("THANK YOU FOR CHOOSING SWAP-ENV"))
  console.log(chalk.white.bold("developed by sushovanpaul007"))
  console.log(chalk.white.bold("https://github.com/sushovanpaul07/swap-env\n\n\n"))
  globals.setData(process.cwd(),"default");
  await inspect.doesGitIgnoreExist(true);
  await inspect.doesEnvsExist(true);
  await perform.addRuleTogitignore();
};
