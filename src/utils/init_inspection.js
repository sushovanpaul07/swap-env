const fs = require("fs");
const log = require("../modules/log");
const enquireUser = require("../modules/enquire");
const globals = require("./global_storage")
exports.doesGitIgnoreExist = async (createIfAbsent = false) => {
  if (!fs.existsSync(".gitignore")) {
    log.logGitignoreNotFound();
    if (!createIfAbsent) return false;
    return await enquireUser.toCreategitignore();
  }
  return true;
};

exports.doesEnvsExist = async (createIfAbsent = false) => {
  if (fs.existsSync("./envs")) {
    // log.logEnvsAlreadyPresent();
    return true;
  } else {
    if (!createIfAbsent) {
      log.logEnvsNotPresent();
      process.exit(0);
    }
    else{
        console.log("comes here")
        await fs.promises.mkdir("./envs");
        log.logEnvsFolderCreated();
    }
  }
};

exports.doesConfExist = async (createIfAbsent = false) => {
  if (fs.existsSync("./envs/.conf")) {
    return true;
  } else {
    if (!createIfAbsent) {
      log.logConfNotPresent();
      process.exit(0);
    }
    
  }
};
