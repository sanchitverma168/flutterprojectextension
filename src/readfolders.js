const {
  preDefineFlutterValues,
  PROJECTFOUND,
  NOTFOUND,
  LOL,
  workspaceReadSuccess,
  unabletoScan
} = require("./const");
const vscode = require('vscode');
const {
  uiinfoMessage,
  uierrorMessage
} = require("./utils");
const fs = require('fs');
const {
   handlefoldercreation
} = require("./handlefile");

/**
 * 
 * This functions read the files and folders in the working directory
 * then passes it to @param {compare} method.
 * @param {compare} callback 
 */
function readFolders(callback) {
  var currentdir = vscode.workspace.workspaceFolders[0].uri.path.replaceAll("/", "\\").replace("\\", "");
  fs.readdir(currentdir, function (err, files) {
    if (err) {
      console.log(unabletoScan + err);
      return uierrorMessage(unabletoScan);
    }
    uiinfoMessage(workspaceReadSuccess);
    return callback(files, showmessage);
  });
}

/**
 * This methods verifies whether it is flutter 
 * project in current directory or not.
 * @param {showmessage} files 
 */
function compare(files,callback) {
  var count = 0;
  files.forEach(function (file) {
    preDefineFlutterValues.forEach(function (value) {
      if (file == value) {
        count++;
      }
    });
  });
  return callback(count, handlefoldercreation);
};

function showmessage(count, callback) {
  var value = false;
  if (count == 5) {
    console.log(PROJECTFOUND);
    uiinfoMessage(PROJECTFOUND);
    value = true;
  } else if (count < 5) {
    console.log(NOTFOUND);
    uierrorMessage(NOTFOUND);
    value = false;
  } else {
    console.log(LOL);
    uierrorMessage(LOL);
    value = false;
  }
  if (!value) return;
  else
    return callback();
}
module.exports = {
  readFolders,
  compare,
  showmessage
}