const fs = require("node:fs");
const log = require("../log");
const enquire = require("../enquire");
exports.createGitignoreFile = async () => {
  await fs.promises.writeFile(".gitignore", "");
  log.logCreatedGitignoreFile();
};

exports.addRuleTogitignore = async () => {
  if(fs.existsSync('.gitignore')){
    await fs.promises.appendFile(
      ".gitignore",
      "\n\n# === Rules for swap-env === \n./envs"
      );
      log.logAddedEnvsToGitignore();
    }
};

exports.showEnvList = async (suppressLog=false) => {
  const fileList = (await fs.promises.readdir(`${process.cwd()}/envs`)).filter(item=>item!=='.conf');
  const files = fileList.map(
    (file) => ({ FileName: file, EnvName: file.split(".")[0] })
  );
  if(!suppressLog)
    log.logListOfFiles(files);
  return files;
};

exports.updateCurrentEnv = async () =>{
  fs.promises.readFile('./')
}

exports.envSwitcher = async (prevEnv) => {
  const fileList = await this.showEnvList(true);
  selectedEnv = await enquire.toSelectEnv(
    fileList.map((env) => env.EnvName.toUpperCase())
  );
  let envFileName = (fileList.filter((env)=>(env.EnvName.toLowerCase())===selectedEnv.toLowerCase()))[0]
  
  const sourceContent = await fs.promises.readFile(`${process.cwd()}/envs/${envFileName.FileName}`);

  
  await fs.promises.writeFile(`${process.cwd()}/.env`,sourceContent);

  log.logEnvSwitched(prevEnv,selectedEnv);
  return envFileName.EnvName.toUpperCase();
};


exports.showCurrentEnv = (currentEnv)=>{
  log.logCurrentEnv(currentEnv);
}