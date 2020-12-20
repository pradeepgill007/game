import io from 'socket.io-client';
import { config } from '../config/';
import ReduxStore from '../reducers/store';

let socket = io(config.SOCKET_END_POINT);

socket.on('sendMessageToClient', (message: any) => {
  ReduxStore.dispatch({
    type: 'SEND_MESSAGE',
    payload: message,
  });
});

socket.on('disableMyTurn', () => {
  ReduxStore.dispatch({
    type: 'DISABLE_MY_TURN',
    payload: true
  });
});

socket.on('youLose', () => {
  ReduxStore.dispatch({
    type: 'YOU_LOSE'
  });
});

socket.on('youWin', () => {
  ReduxStore.dispatch({
    type: 'YOU_WIN'
  });
});

socket.on('startNewGame', (message: any) => {
  ReduxStore.dispatch({
    type: 'SEND_MESSAGE',
    payload: message
  });
});

export function socketIO(socketEvent: string,socketData: any) {
  return new Promise((resolve, reject) => {
      socket.emit(socketEvent, socketData, (messages: any) => {
        resolve(messages);
      });
  });
}
