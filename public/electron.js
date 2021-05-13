const { app, BrowserWindow, shell } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

// console.log(shell)

let mainWindow

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 350,
		height: 700,
		show: false,
		webPreferences: {
			nodeIntegration: true,
		},
		icon: './favicon.ico',
		minWidth: 350,
		frame: false,
	})

	mainWindow.webContents.on('new-window', (event, url) => {
		event.preventDefault()
		shell.openExternal(url)
	})

	const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`

	mainWindow.loadURL(startURL)

	mainWindow.once('ready-to-show', () => mainWindow.show())
	mainWindow.on('closed', () => {
		mainWindow = null
	})
}
app.on('ready', createWindow)
