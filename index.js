const debug = require('debug')('devacademy-api-sqlite:server');
const app = require('./app');
const http = require('http');
const port = (process.env.PORT || '3000');
app.set('port', port);
const server = http.createServer(app);
server.listen(port);

server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

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

server.on('listening', () => {
  const addr = server.address();
  debug(`Listening on ${addr.port}`);
});
