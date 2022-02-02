const vscode = require('vscode');
const {
	readFolders
} = require("./src/services/detectflutterproject.js");

function activate(context) {
	let dispose = vscode.commands.registerCommand('flutter-project-directory.createfolders', function () {
		//[Start Here ]
		/**
		 * [Starts Here]
		 * it goes to readfolder.js file 
		 */
		readFolders(0);
		context.subscriptions.push(dispose);
	});
	let dispose2 = vscode.commands.registerCommand('flutter-project-directory.createblocfolders', function () {
		//[Start Here ]
		/**
		 * [Starts Here]
		 * it goes to readfolder.js file 
		 */
		readFolders(1);
		context.subscriptions.push(dispose2);
	});


}

function deactivate() {}
module.exports = {
	activate,
	deactivate
};