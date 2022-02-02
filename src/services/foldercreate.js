const fs = require('fs');
const currentdir = require('vscode').workspace.workspaceFolders[0].uri.path.replaceAll("/", "\\").replace("\\", "");

const {
  ERROR,
  CREATED
} = require('../const/common');

function createFolder(name, path) {
  var data = path ? currentdir + path + name : currentdir + name;
  console.log(data);
  fs.mkdir(data, (err) => {
    if (err) {
      console.log(err);
      console.log(ERROR);
      return;
    };
    console.log(CREATED, name);
  });
  return;
}
module.exports = {
  createFolder
}