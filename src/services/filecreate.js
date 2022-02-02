const fs = require('fs');
const {
  unabletoCreateFile
} = require('../const/common');

function createandWriteFile(name, text) {
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
module.exports = {
  createandWriteFile
}