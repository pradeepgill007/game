import { makeStyles, createStyles } from '@material-ui/core/styles';

const loseWinStyle = makeStyles(() =>
    createStyles({
        gameWrapper: {
            color:'#fff',
          backgroundColor:'#2196f3'  
        },
        gameOver: {
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }
    })
);

export default loseWinStyle;