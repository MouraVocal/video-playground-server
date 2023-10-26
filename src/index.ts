import { createServer } from 'node:http'

const port = 3000

const server = createServer((req, res) => {
  res.end('Hello World')
}).listen(port, () => {
  console.log(`Server started on port ${port}`)
})

server.on('error', err => {
  console.error(err)
})
