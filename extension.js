const vscode = require("vscode");
const fs = require("fs");
const path = require("path");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "index-file.add-index-js",
    function () {
      const component = `<!DOCTYPE html>
	  <html>
	   <head>
		 <title>!DOCTYPE</title>
		 <meta charset="utf-8">
	   </head>
	   <body>
		<p>AND HERE YOU CAN WRITE EVERYTHING THAT YOU WANNA DO</p>
	   </body> 
	  </html>
`;

      const folderPath = vscode.workspace.workspaceFolders[0].uri
        .toString()
        .split(":")[1];

      fs.writeFile(path.join(folderPath, "index.html"), component, (err) => {
        if (err) {
          return vscode.window.showErrorMessage("Failed to create your file");
        }
        vscode.window.showInformationMessage("Created your file");
      });
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
