const vscode = require('vscode');

function uiinfoMessage(value) {
  vscode.window.showInformationMessage(value);
}

function uierrorMessage(value) {
  vscode.window.showErrorMessage(value);
}
module.exports = {
  uiinfoMessage,
  uierrorMessage
}