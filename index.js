const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = Number(process.env.PORT|| 3000);

app.use(express.static(__dirname + "/view/"));

server.listen(port, () => {
  console.log('listening on port: '+port);
});