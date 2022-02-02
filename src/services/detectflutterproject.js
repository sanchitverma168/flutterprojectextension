const {
  preDefineFlutterValues,
  PROJECTFOUND,
  NOTFOUND,
  LOL,
  workspaceReadSuccess,
  unabletoScan
} = require("../const/common.js");
const {
  dirname_underLIB,
  filetomake,
} = require('../const/normal.js');
const {
  blocfilescreate,
  blocfolderstocreate
} = require("../const/bloc.js");
const {
  handlefoldercreation
} = require("../services/index.js");
const currentdir = require('vscode').workspace.workspaceFolders[0].uri.path.replaceAll("/", "\\").replace("\\", "");
const {
  uiinfoMessage,
  uierrorMessage
} = require("../utils/index");

/**
 * 
 * This functions read the files and folders in the working directory
 * then passes it to @param {compare} method.
 * @param {compare} callback 
 */
function readFolders(index) {
  require('fs').readdir(currentdir, function (err, files) {
    if (err) {
      console.log(unabletoScan + err);
      return uierrorMessage(unabletoScan);
    }
    uiinfoMessage(workspaceReadSuccess);
    return compare(files, showmessage, index);
  });
}

/**
 * This methods verifies whether it is flutter 
 * project in current directory or not.
 * @param {showmessage} files 
 */
function compare(files, callback, index) {
  var count = 0;
  files.forEach(function (file) {
    preDefineFlutterValues.forEach(function (value) {
      if (file == value) {
        count++;
      }
    });
  });
  return callback(count, index);
};

function showmessage(count, index) {
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
  else {
    if (index == 0) {
      return handlefoldercreation(dirname_underLIB, filetomake);
    } else {
      return handlefoldercreation(blocfolderstocreate, blocfilescreate);
    }
  }
}
module.exports = {
  readFolders,
  compare,
  showmessage
}