const electron = require("electron");

const {app, BrowserWindow, MEnu, ipcMain} = electron;

let todayWindow;
let creatWindow;
let listWindow;

app.on("ready", ()=> {
    todayWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title: "Aplikasi dokter2"
    });

    todayWindow.loadURL(`file://${__dirname}/today.html`);
    todayWindow.on("close", () => {

        app.quit();
        todayWindow = null;
    });
});