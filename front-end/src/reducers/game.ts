import { config } from '../config/';
import { updateObject, calculateResult } from './utils';

export default function Game(state = config.STORE_INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'SHOW_LOADER': {
      return updateObject(state, { loaderFlag: action.payload });
    }

    case 'ADD_NEW_PLAYER': {
      const { messages, socketId, myTurn } = action.payload;
      const lastResult = calculateResult(messages[messages.length - 1]);
      return updateObject(state, {
        messages,
        lastResult,
        socketId,
        myTurn
      });
    }
    case 'SEND_MESSAGE': {
      const { messages, myTurn } = action.payload;
      const lastResult = calculateResult(messages[messages.length - 1]);
      return updateObject(state, { messages, lastResult, myTurn, loseWinStatus: undefined });
    }
    
    case 'DISABLE_MY_TURN': {
      const { myTurn } = action.payload;
      return updateObject(state, { myTurn });
    }

    case 'YOU_LOSE': {
      return updateObject(state, { loseWinStatus: false });
    }

    case 'YOU_WIN': {
      return updateObject(state, { loseWinStatus: true });
    }

    default:
      return { ...state };
  }
}
