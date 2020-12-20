import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import Header from '../header/';
import LoseWin from '../loseWin/';
import { addNewPlayer, sendMessage, newGame } from '../../actions/game';
import { GameParam } from './types';
import gameStyle from './styles';

function Game(props: any) {

  const classes = gameStyle();
  const {
    addNewPlayer,
    sendMessage,
    messages,
    lastResult,
    socketId,
    myTurn,
    loseWinStatus,
    newGame
  } = props;

  const param: GameParam = useParams();

  useEffect(() => {
    addNewPlayer('newPlayer', param.playerName);
  }, []);

  function enterInput(input: number) {
    const socketData = {
      enteredNumber: input,
      lastResult,
      socketId,
    };
    sendMessage('sendMessage', socketData);
  }

  function startNewGame() {
    newGame('newGame', socketId);
  }

  if (loseWinStatus !== undefined) {
    return <LoseWin loseWinStatus={loseWinStatus} startNewGame={startNewGame}/>
  }

  return (
    <React.Fragment>
      <Header userLoggedId={true} playerName={param.playerName} />
      <Container maxWidth="xl" className={classes.gameWrapper}>
        {messages.map((message: any, i: number) => {
          return (
            <React.Fragment key={i}>
              <ListItem className={`${classes.avatarList} ${i%2 !== 0 ? `${classes.avatarListRight}` : ''}`}>
                <ListItemAvatar className={classes.avatarImage}>
                  <Avatar
                    alt={message.playerName}
                    src={message.playerName}
                  />
                </ListItemAvatar>
                <ListItemText>
                  <span className={`${classes.inputButton} ${classes.enteredNumber}`}>{message.enteredNumber}</span>

                  <Paper className={classes.paperWrapper}>
                     {`[(${message.enteredNumber} + ${message.wholeNumber}) / 3] = ${Math.floor(
                       (message.enteredNumber + message.wholeNumber) / 3)}`
                    }
                  </Paper>
                   
                  <Paper className={classes.paperWrapper}>
                    {Math.floor((message.enteredNumber + message.wholeNumber) / 3)}

                  </Paper>
                </ListItemText>
              </ListItem>
            </React.Fragment>
          );
        })}
      </Container>
      <div className={classes.inputWrapper}>
          <Button disabled={!myTurn} className={classes.inputButton} onClick={() => enterInput(-1)} size="large"  variant="contained" color="primary">-1</Button>
          <Button disabled={!myTurn} className={classes.inputButton} onClick={() => enterInput(0)} size="large"  variant="contained" color="primary">0</Button>
          <Button disabled={!myTurn} className={classes.inputButton} onClick={() => enterInput(1)} size="large"  variant="contained" color="primary">1</Button>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => {
  const { game } = state;
  return {
    messages: game.messages || [],
    lastResult: game.lastResult || 0,
    socketId: game.socketId,
    myTurn: game.myTurn || false,
    loseWinStatus: game.loseWinStatus,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addNewPlayer: (socketEvent: string, socketData: any) => {
      dispatch(addNewPlayer(socketEvent, socketData));
    },
    sendMessage: (socketEvent: string, socketData: any) => {
      dispatch(sendMessage(socketEvent, socketData));
    },
    newGame: (socketEvent: string, socketData: any) => {
      dispatch(newGame(socketEvent, socketData));
    }
  };
};

export default connect(
  // connect HOC
  mapStateToProps,
  mapDispatchToProps
)(Game);
