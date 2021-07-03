const vscode = require('vscode');
const fs = require('fs');
const {
	uierrorMessage,
	uiinfoMessage
} = require('./src/utils');
const {
	ERROR,
	CREATED,
	images_dart
} = require('./src/const');

function activate(context) {
	let dispose = vscode.commands.registerCommand('flutter-project-directory.createfolders', function () {
		var currentdir = vscode.workspace.workspaceFolders[0].uri.path.replaceAll("/", "\\").replace("\\", "");
		console.log(currentdir);
		// fs.mkdir(currentdir + '\\models', (err) => {
		// 	if (err) {
		// 		console.log("error found");
		// 		console.log(err);
		// 		return uierrorMessage(ERROR);
		// 	};
		// 	return uiinfoMessage(CREATED);
		// });


		fs.writeFile(currentdir + "\\const" + "images.dart", images_dart, function (err) {
			if (err) {
				console.log(err);
				return uierrorMessage("Something Went Wrong");
			}
			uiinfoMessage("File Created Successfuly and Pre template written");
		});
	});
	context.subscriptions.push(dispose);
	// context.subscriptions.push(disposable);
}

function deactivate() {}
module.exports = {
	activate,
	deactivate
};