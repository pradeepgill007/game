let players = [];
let gameMessages = [];

export const addNewPlayer = ({socketId, playerName}) => {
  const playerData = {
    socketId,
    playerName
  }
  players.push(playerData);
}

export const getPlayers = () => players.length;

export const addMessage = (obj) => {
  gameMessages.push(obj);
}

export const getAllMessages = () => gameMessages;

export const deletePlayer = (id) => {
  const index = players.findIndex((player) => player.socketId === id);
  if(index !== -1){
    players.splice(index, 1);
  } 
}
export const getPlayerNameById = (socketId) => {
  const player = players.filter((player) => player.socketId === socketId);
  if(player.length){
    return player[0].playerName;
  }
};

export const resetAll = () => {
  gameMessages = [];
}