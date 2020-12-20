import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import loseWinStyle from './styles';

function LoseWin(props: any) {
  const classes = loseWinStyle();
  const {loseWinStatus, startNewGame } = props;
  return (
      <Container maxWidth="xl" className={classes.gameWrapper}>
        <Grid container className={classes.gameOver}>
          <h1>{loseWinStatus ? 'You Win' : 'You Lose'}</h1>
          <Button onClick={() => startNewGame()} size="large" variant="contained" color="primary">New game</Button>
        </Grid>
      </Container>
  );
}

export default LoseWin;
