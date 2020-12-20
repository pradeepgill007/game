import http from 'http';
import express from 'express';
import socketio from 'socket.io';

import {
  addNewPlayer,
  getPlayers,
  addMessage,
  getAllMessages,
  deletePlayer,
  resetAll,
  getPlayerNameById
} from './players.js';
import {
  getRandomNumber,
  userWin
} from './utility.js';

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {

  const socketId = socket.id;

  socket.on('newPlayer', (playerName, callback) => {

    addNewPlayer({
      socketId: socket.id,
      playerName
    });
    if (getPlayers() === 1) {
      resetAll();
      const initialMessage = {
        error: false,
        wholeNumber: getRandomNumber(100, 1000),
        enteredNumber: getRandomNumber(-1, 1),
        playerName
      }

      addMessage(initialMessage);
      const messages = getAllMessages();
      return callback({
        messages,
        socketId,
        myTurn: false
      });
    } else {
      const messages = getAllMessages();
      return callback({
        messages,
        socketId,
        myTurn: true
      });
    }
  });

  socket.on('sendMessage', ({
    enteredNumber,
    lastResult,
    socketId
  }) => {

    const isUserWin = userWin(enteredNumber, lastResult);
    if (isUserWin) {
      socket.broadcast.emit('youLose');
      io.to(socketId).emit('youWin');
    } else {

      const playerName = getPlayerNameById(socketId);
      const newMessage = {
        error: false,
        wholeNumber: lastResult,
        enteredNumber,
        playerName: playerName
      }

      addMessage(newMessage);
      const messages = getAllMessages();
      io.emit('sendMessageToClient', {
        messages,
        myTurn: true
      });
      io.to(socketId).emit('disableMyTurn', {
        myTurn: false
      });
    }
  });

  socket.on('disconnect', () => {
    deletePlayer(socketId);
    socket.broadcast.emit('youWin');
    io.to(socketId).emit('youLose');
  });

  socket.on('newGame', (socketId) => {
    resetAll();
    const playerName = getPlayerNameById(socketId);
    const initialMessage = {
      error: false,
      wholeNumber: getRandomNumber(100, 1000),
      enteredNumber: getRandomNumber(-1, 1),
      playerName
    }

    addMessage(initialMessage);
    const messages = getAllMessages();

    socket.broadcast.emit('startNewGame',{
      messages,
      myTurn: true
    });
    io.to(socketId).emit('startNewGame', {messages, myTurn: false});
  });

});

server.listen(process.env.PORT || 5001, () => console.log(`Server has started.`));