const { app, BrowserWindow } = require('electron');

function createMainWindow(){
    let mainWindow = new BrowserWindow({ width: 800, height: 600 });
    let appPath = 'http://localhost:4000';

    mainWindow.loadURL(appPath);
}

app.on('ready', createMainWindow);