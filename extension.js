const vscode = require('vscode');
const {
	readFolders,
	compare
} = require('./src/readfolders');


function activate(context) {
	let dispose = vscode.commands.registerCommand('flutter-project-directory.createfolders', function () {
		//[Start Here ]
		/**
		 * [Starts Here]
		 * it goes to readfolder.js file 
		 */
		readFolders(compare);
		context.subscriptions.push(dispose);
	});
}

function deactivate() {}
module.exports = {
	activate,
	deactivate
};