const vscode = require('vscode');
const fs = require('fs');
const {
  uierrorMessage,
  uiinfoMessage
} = require('./utils');
const {
  ERROR,
  dirname_underLIB,
  dirname_outsideLIB,
  allFoldersCreated,
  unabletoCreateFile,
  filetomake,
  CREATED
} = require('./const');

var currentdir =
  vscode.workspace.workspaceFolders[0].uri.path.replaceAll("/", "\\").replace("\\", "");


var createFolder = (name, path) => {
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

var createandWriteFile = (name, text) => {
  fs.writeFile(name, text, function (err) {
    if (err) {
      console.log(err);
      uierrorMessage(unabletoCreateFile);
      return;
    }
    console.log("file created :> " + name);
    return;
  });
};

function handlefoldercreation() {
  dirname_outsideLIB.forEach(element => {
    console.log('package', CREATED);
    createFolder("\\" + element);
  });
  console.log("between");
  console.log(dirname_underLIB, "first");
  console.log(dirname_outsideLIB, "second");
  console.log("outside");
  dirname_underLIB.forEach(function (element, index) {
    createFolder("\\" + element, "\\lib");
    filetomake[index].forEach(item => {
      if (filetomake[index].length != 0) {
        createandWriteFile(currentdir + "\\lib" + "\\" + element + "\\" + item[0], item[1]);
      }
      // console.log(currentdir + "\\lib" + "\\" + element + "\\" + item[0], item[1]);
    });
    return;
  });
  uiinfoMessage(allFoldersCreated);
}



module.exports = {
  createFolder,
  createandWriteFile,
  handlefoldercreation,
}