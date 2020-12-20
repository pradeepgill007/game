import {makeStyles,createStyles}from '@material-ui/core/styles';

const gameStyle=makeStyles(()=> createStyles( {
      gameWrapper: {
        paddingBottom: '120px',
        marginTop: '20px'
      },
      inputWrapper: {
        position: 'fixed',
        bottom: '15px',
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around'
      },
      avatarList: {
        alignItems: 'flex-start'
      },
      avatarListRight: {
        flexDirection: 'row-reverse',
        textAlign: 'right'
      },
      avatarImage: {
        marginTop: '6px'
      },
      inputButton: {
        borderRadius: '100%',
        height: '86px',
        padding: '0 38px',
        fontSize: '2rem',
        backgroundColor: '#2196f3',
      },
      enteredNumber: {
        width: '70px',
        height: '70px',
        color: '#fff',
        padding: 0,
        display: 'inline-flex',
        marginRight: '10px',
        alignItems: 'center',
        justifyContent: 'center'
      },
      paperWrapper: {
        padding: '10px',
        marginTop: '8px',
        color: '#696969'
      }
    }

  ));

export default gameStyle;