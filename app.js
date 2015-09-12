var menubar = require('menubar')
var ipc = require('ipc')
var path = require('path')

var mb = menubar({
  dir: __dirname,
  icon: path.join(__dirname, 'img', 'lock.png'),
  width: 300,
  height: 480,
  preloadWindow: true
})

mb.on('ready', function ready () {
  console.log('ready')
})

ipc.on('terminate', function terminate (ev) {
  mb.app.terminate()
})
