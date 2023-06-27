const Storage = require("node-storage");
var globals = new Storage('./envs/.conf');
exports.setData = (key, value) => {
  globals.put(key, value);
};

exports.getData = (key) => {
  return globals.get(key);
};
