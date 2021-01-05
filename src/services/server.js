const axios = require('axios')
const io = require('socket.io-client')

const { SERVER_URL } = process.env

const api = axios.create({
  baseURL: `${SERVER_URL}/api`
})

const socket = io(`${SERVER_URL}?client=watcher`)

module.exports = {
  api,
  socket
}
