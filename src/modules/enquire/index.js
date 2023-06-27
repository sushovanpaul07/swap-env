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
  if(answers === CREATE_GITIGNORE_TRUE){
    await createGitignoreFile();
    return true
  }

  else return false
};

exports.toSelectEnv = async(envList) => {

  const prompt = new Select({
    name: "switch",
    message: chalk.hex('#eaf72a').bold("Choose the target Environment."),
    choices: envList.map((env)=>({message:chalk.hex("#44f25e").bold(env),name:env})),
  });
  const answer = await prompt.run();
  console.log("answer",answer)
  return answer;
  };
