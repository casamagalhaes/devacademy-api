const http = require('http');
const debug = require('debug')('devacademy-api-sqlite:server');
const app = require('./app');

const port = process.env.PORT || '3000';

const server = http.createServer(app);

server.on('error', (error) => {
  if (error.syscall !== 'listen') throw error;
  switch (error.code) {
    case 'EACCES':
      console.error(`${port} requires elevated privileges`);
      return process.exit(1);
    case 'EADDRINUSE':
      console.error(`${port} is already in use`);
      return process.exit(1);
    default:
      throw error;
  }
});

server.listen(port, () => debug(`Listening on ${server.address().port}`));
