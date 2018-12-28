const { app, BrowserWindow } = require('electron');

const DEV_APP_PATH = 'http://localhost:4000';
const isDev = process.env.NODE_ENV === 'development';

function createMainWindow() {
    let mainWindow = new BrowserWindow({ width: 800, height: 600 });

    if (isDev) {
        mainWindow.loadURL(DEV_APP_PATH)
        mainWindow.webContents.openDevTools();
        return;
    }

    mainWindow.loadFile('index.html');
}

app.on('ready', createMainWindow);