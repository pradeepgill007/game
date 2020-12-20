import { socketIO } from './socket-api';

export function showLoader() {
  return {
    type: 'SHOW_LOADER',
    payload: true,
  };
}

export function addNewPlayer(socketEvent: string, socketData: any) {
  return {
    type: 'ADD_NEW_PLAYER',
    payload: socketIO(socketEvent, socketData).then((data: any) => data),
  };
}

export function sendMessage(socketEvent: string, socketData: any) {
  return {
    type: 'SEND_MESSAGE',
    payload: socketIO(socketEvent, socketData).then((data: any) => data),
  };
}

export function newGame(socketEvent: string, socketData: any) {
  return {
    type: 'NEW_GAME',
    payload: socketIO(socketEvent, socketData)
  };
}
