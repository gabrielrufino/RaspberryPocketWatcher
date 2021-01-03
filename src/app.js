const restart = require('./listeners/restart')
const status = require('./listeners/status')

module.exports = {
  start: () => {
    const { socket } = require('./services/server')

    socket.on('connect', () => {
      console.log('Conectado')
    })

    socket.on('request:status', status)
    socket.on('request:workflow:restart', restart)
  }
}
