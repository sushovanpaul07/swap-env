const inspect = require("../utils/init_inspection");
const perform = require("../modules/perform");
const globals = require("../utils/global_storage");
exports.switchToEnv = async () => {
  await inspect.doesEnvsExist();
  await inspect.doesConfExist();
  const prevEnv = globals.getData(process.cwd());
  const currentEnv = await perform.envSwitcher(prevEnv);
  globals.setData(process.cwd(),currentEnv)
};
