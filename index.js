const express = require('express')
const app = express()
const port = 3000

app.use(require('express-status-monitor')());

app.get('/', (req, res) => {
  res.status(200).send('Hello World after changes!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// CTRL+C
process.on('SIGINT', function onSigint() {
  // do all the cleanup, close connections, etc
  console.log("Got the SIGINT signal");
  process.exit(1)
})
// docker stop
process.on('SIGTERM', function onSigterm() {
  // do all the cleanup, close connections, etc
  console.log("Got the SIGTERM signal");
  process.exit(1)
})