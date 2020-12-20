import { makeStyles, createStyles } from '@material-ui/core/styles';

const headerStyle = makeStyles(() =>
    createStyles({
        wrapper: {
            paddingTop: '20px',
            paddingBottom: '20px',
            backgroundColor: '#2196f3',
            boxShadow: '3px 3px 5px 6px #ccc'
        },
        logo: {
            textTransform: 'uppercase',
            fontSize: '2rem',
            lineHeight: '1.5rem',
            textDecoration: 'none',
            color: '#fff'
        },
        playerName: {
            color: '#fff',
            textTransform: 'uppercase'
        }
    })
);

export default headerStyle;