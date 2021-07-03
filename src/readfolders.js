import {
  preDefineFlutterValues
} from "./const"
const vscode = require('vscode');


async function readFolders() {
  console.log("inside  read file");
  // const path = require('path');
  const fs = require('fs');
  var currentdir = vscode.workspace.workspaceFolders[0].uri.path.replaceAll("/", "\\").replace("\\", "");
  console.log("after current dir");
  
  return await fs.readdir(currentdir, function (err, files) {
    console.log("inside fsreaddir");
    console.log(currentdir + "before if");
    if (err) {
      console.log("inside fsreaddir if");
      return console.log('Unable to scan directory: ' + err);
    }
    console.log("after fsreaddir if");
    return files;

  })
};

async function compare(files){
  var count = 0;
  await files.forEach(function (file) {
    console.log("inside file method");
    preDefineFlutterValues.forEach(function (value) {
      // console.log(file + "--" + value)
      if (file == value) {
        count++;
        console.log(count);
      }
    })
  });
  console.log("after file method");
}
export {
  readFolders,
  compare
}