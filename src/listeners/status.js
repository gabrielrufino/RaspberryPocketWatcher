const si = require('systeminformation')

const status = () => {
  const { socket } = require('../services/server')

  Promise.all([
    si.cpuTemperature(),
    si.mem()
  ])
    .then(([
      cpuTemperature,
      mem
    ]) => {
      socket.emit('response:status', {
        cpuTemperature: `${cpuTemperature.main} ºC`,
        memoryUsage: `${((mem.active / mem.total) * 100).toFixed(2)} %`
      })
    })
}

module.exports = status
