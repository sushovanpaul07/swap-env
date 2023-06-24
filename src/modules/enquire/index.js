const { Select } = require("enquirer");
const {createGitignoreFile} = require("../perform")
const log = require("../log")
const chalk = require('chalk')
const CREATE_GITIGNORE_TRUE = chalk.hex("#44f25e").bold("Yes Please!")
const CREATE_GITIGNORE_FALSE =  chalk.redBright.bold("Nope")
exports.toCreategitignore = async() => {
  const prompt = new Select({
    name: "color",
    message: chalk.hex('#eaf72a').bold("Do you want to create a '.gitignore' file"),
    choices: [CREATE_GITIGNORE_TRUE, CREATE_GITIGNORE_FALSE],
  });

  const answers = await prompt.run()
  console.log(answers)
  if(answers === CREATE_GITIGNORE_TRUE){
    await createGitignoreFile();
  }
  else{
    log.logExitingMessage();
    process.exit(0)
  }
};
