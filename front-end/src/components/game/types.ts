export type GameParam = {
  playerName: string
}

export type GameProps = {
  addNewPlayer: () => void,
  sendMessage: () => void,
  messages: string,
  lastResult: number,
  socketId: string,
  myTurn: boolean,
  loseWinStatus: boolean,
}