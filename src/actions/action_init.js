const inspect = require("../utils/init_inspection");
const perform = require("../modules/perform");
exports.initializeIntoProject = async () => {
  await inspect.doesGitIgnoreExist(true);
  await inspect.doesEnvsExist(true);
  await perform.addRuleTogitignore();
};
