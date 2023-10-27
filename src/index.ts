import { createServer } from 'node:http'
import { createReadStream } from 'node:fs'

const port = 4000

const server = createServer((req, res) => {
  const headers = {
    'Content-Type': 'video/mp4',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*'
  }

  res.writeHead(200, headers)

  const videoStream = createReadStream('./video/system-of-a-down-acustico.mp4')

  videoStream.pipe(res)
}).listen(port, () => {
  console.log(`Server started on port ${port}`)
})

server.on('error', err => {
  console.error(err)
})
