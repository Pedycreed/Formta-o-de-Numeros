const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 450,
    height: 650,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  })

  win.loadFile(path.join(__dirname, 'formatar-2.0.html'))
  win.setMenuBarVisibility(false) // Remove a barra de menu
}

app.whenReady().then(createWindow)
app.commandLine.appendSwitch('disable-ffmpeg');