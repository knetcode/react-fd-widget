const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

let mainWindow

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 500,
		height: 700,
		show: false,
		webPreferences: {
			nodeIntegration: true,
		},
		icon: './favicon.ico',
	})
	const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`

	mainWindow.loadURL(startURL)

	mainWindow.once('ready-to-show', () => mainWindow.show())
	mainWindow.on('closed', () => {
		mainWindow = null
	})
}
app.on('ready', createWindow)
