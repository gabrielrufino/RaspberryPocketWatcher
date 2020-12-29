const io = require('socket.io-client')

module.exports = {
  start: () => {
    const { SERVER_URL } = process.env

    const socket = io(`${SERVER_URL}?client=watcher`)

    socket.on('connect', () => {
      console.log('Conectado')
    })
  }
}
