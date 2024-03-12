
function createConnection(serverUrl,roomId) {
  return {
    connect() {
        console.log(`connecting to ${roomId}, room at ${serverUrl}....`)
    },
    disconnect() {
        console.log(`disconnecting to ${roomId}, room at ${serverUrl}....`)
    }
  }
}

export default createConnection
