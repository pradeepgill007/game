import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const page404Style = makeStyles(() =>
  createStyles({
    text404: {
      textAlign: 'center',
      fontSize: '3rem',
    },
    backToHome: {
      color: '#A9A9A9',
    },
  })
);

function PageNotFound() {
  const classes = page404Style();
  return (
    <div className={classes.text404}>
      Page Not Found. <br />{' '}
      <Link to="/" className={classes.backToHome}>
        Home
      </Link>
    </div>
  );
}

export default PageNotFound;
