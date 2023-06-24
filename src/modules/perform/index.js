const fs = require("node:fs");
const log = require("../log");
exports.createGitignoreFile = async () => {
  await fs.promises.writeFile(".gitignore", "");
  log.logCreatedGitignoreFile();
};

exports.addRuleTogitignore = async () => {
  await fs.promises.appendFile(
    ".gitignore",
    "\n\n# === Rules for switch-env === \n./envs"
  );
  log.logAddedEnvsToGitignore();
};

exports.showEnvList = async () => {
  const files = (await fs.promises.readdir(`${process.cwd()}/envs`)).map(
    (file) => ({ FileName: file, EnvName: file.split(".")[0] })
  );
  log.logListOfFiles(files);
};
