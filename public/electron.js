const { app, BrowserWindow, shell } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

let mainWindow

function createWindow() {
	app.commandLine.appendSwitch('disable-web-security')
	app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors')

	mainWindow = new BrowserWindow({
		width: 400,
		height: 700,
		show: false,
		webPreferences: {
			nodeIntegration: true,
			webSecurity: false,
		},
		icon: './favicon.ico',
		minWidth: 400,
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
