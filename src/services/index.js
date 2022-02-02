const currentdir = require('vscode').workspace.workspaceFolders[0].uri.path.replaceAll("/", "\\").replace("\\", "");
const {
  uiinfoMessage
} = require('../utils/index');
const {
  allFoldersCreated,
} = require('../const/normal.js');
const {
  dirname_outsideLIB
} = require('../const/common.js');
const {
  createFolder
} = require("./foldercreate.js");
const {
  createandWriteFile
} = require("./filecreate.js");

function handlefoldercreation(folders, files) {
  try {
    dirname_outsideLIB.forEach(element => {
      createFolder("\\" + element);
    });
    folders.forEach(function (element, index) {
      createFolder("\\" + element, "\\lib");
      files[index].forEach(item => {
        if (files[index].length != 0) {
          createandWriteFile(currentdir + "\\lib" + "\\" + element + "\\" + item[0], item[1]);
        }
      });
      return;
    });
  } catch (error) {
    console.info("we have an error while creating simple folders");
    console.log(e);
  }
  uiinfoMessage(allFoldersCreated);
}



module.exports = {
  createFolder,
  createandWriteFile,
  handlefoldercreation,
}