const inspect = require("../utils/init_inspection");
const perform = require("../modules/perform");
exports.displayEnvList = async () => {
  const isPresent = await inspect.doesEnvsExist();
  await perform.showEnvList();
};
