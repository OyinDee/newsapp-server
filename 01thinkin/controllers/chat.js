// const socketIo = require('socket.io');
// const io = socketIo(server, {
//   cors: {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST'],
//     credentials: true,
//   },
// });
// const NEW_CHAT_MESSAGE_EVENT = 'NEW_CHAT_MESSAGE_EVENT';
// io.on('connection', (socket) => {
//   console.log(`${socket.id} connected`);
//   // Join a conversation
//   const { roomId } = socket.handshake.query;
//   socket.join(roomId);
//   // Listen for new messages
//   socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
//     io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
//   });
//   // Leave the room if the user closes the socket
//   socket.on('disconnect', () => {
//     socket.leave(roomId);
//   });
// });

chat = (req, res) => {
    console.log(req.body);
}

// module.exports = { chat };
module.exports = {chat}