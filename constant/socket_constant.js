/**
 * socket constant value
 */
//const var message = 'message';
module.exports = {
     basURL: 'http://192.168.1.28:3000',
     nameSpase: '/game-namespace',
     /**
      * /default evenst of socket io
      */
     connect: 'connect',
     connect_error: 'connect_error',
     connect_timeout: 'connect_timeout',
     connecting: 'connecting',
     disconnect: 'disconnect',
     error: 'error',
     reconnect: 'reconnect',
     reconnect_attempt: 'reconnect_attempt',
     reconnect_failed: 'reconnect_failed',
     reconnect_error: 'reconnect_error',
     reconnecting: 'reconnecting',
     ping: 'ping',
     pong: 'pong',
     /**
      * additton
      */
     message: 'message',
     client_send_message: 'client_send_message',
     server_send_message: 'server_send_message',
     start_game: 'start_game',


};
