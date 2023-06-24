const fs = require('fs');
const log = require("../modules/log");
const enquireUser = require("../modules/enquire");

exports.doesGitIgnoreExist =  async(createIfAbsent=false)=>{
    if(!fs.existsSync(".gitignore")){
        log.logGitignoreNotFound();
        if(!createIfAbsent) return false;
        await enquireUser.toCreategitignore();
    }
    return true
}



exports.doesEnvsExist =  async(createIfAbsent=false)=>{
    if(fs.existsSync("./envs")){
        log.logEnvsAlreadyPresent();
        return true;
    }
    else{
        if(!createIfAbsent) {
            log.logEnvsNotPresent();
            process.exit()
        }
        await fs.promises.mkdir("./envs");
        log.logEnvsFolderCreated();
    }
    
}