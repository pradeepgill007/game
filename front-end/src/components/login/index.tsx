import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Header from '../header/';

import loginStyle from './styles';

function Login() {
  const history = useHistory();
  const classes = loginStyle();
  const [value, setValue] = useState('');

  function submitName(e: any) {
    e.preventDefault();
    if (value) {
      history.push(`/game/${value}`);
      setValue('');
    }
  }

  function onchangetext(text: string) {
    setValue(text);
  }

  return (
    <React.Fragment>
      <Header userLoggedId={false} />
      <Container maxWidth="xl">
        <Grid>
          <form
            onSubmit={(e) => submitName(e)}
            className={classes.searchForm}
            noValidate
            autoComplete="off"
          >
            <TextField
              value={value}
              onChange={(e) => onchangetext(e.target.value)}
              placeholder="Enter name to play game"
              fullWidth
              variant="outlined"
            />
          </form>
          <Button
            onClick={(e) => submitName(e)}
            size="large"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.loginButton}
          >
            Login
          </Button>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Login;
