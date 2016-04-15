'use strict';

const electron = require('electron');

electron.app.on('ready', () => {
	const win = new electron.BrowserWindow({
		show: false
	});

	win.loadURL(`file://${__dirname}/index.html`);

	function check() {
		if (win.getTitle() === 'Electron') {
			return setTimeout(check);
		}

		console.log(win.getTitle());
		electron.app.quit();
	}

	check();
});
