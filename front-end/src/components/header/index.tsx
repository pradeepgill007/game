import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import { showLoader } from '../../actions/game';
import headerStyle from './styles';

function Header(props: any) {

  const classes = headerStyle();
  const { userLoggedId, playerName } = props;

  if (userLoggedId) {
    return (
      <div className={classes.wrapper}>
        <Container maxWidth="xl">
        <ListItem>
            <ListItemAvatar>
            <Avatar alt={playerName} src={playerName} className={classes.playerName} />
            </ListItemAvatar>
            <ListItemText primary={playerName} className={classes.playerName} />
          </ListItem>
        </Container>
      </div>
    );
  }
  return (
    <div className={classes.wrapper}>
      <Container maxWidth="xl">
        <Grid container className={classes.logo}>
          Takeaway
        </Grid>
      </Container>
    </div>
  );

 
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    showLoader: () => {
      dispatch(showLoader());
    },
  };
};

export default connect(
  // connect HOC
  null,
  mapDispatchToProps
)(Header);
