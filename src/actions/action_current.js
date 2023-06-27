const inspect = require("../utils/init_inspection");
const perform = require("../modules/perform");
const globals = require("../utils/global_storage")
exports.displayCurrentEnv = async () => {
  await inspect.doesEnvsExist();
  await inspect.doesConfExist();
  await perform.showCurrentEnv(globals.getData(process.cwd()));
};
