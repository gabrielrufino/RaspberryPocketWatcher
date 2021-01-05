const shell = require('shelljs')

const restart = () => {
  shell.exec('sudo reboot')
}

module.exports = restart
