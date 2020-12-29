const si = require('systeminformation')

const status = () => {
  const { socket } = require('../services/server')

  si.cpuTemperature()
    .then(result => socket.emit('response:status', result))
}

module.exports = status
