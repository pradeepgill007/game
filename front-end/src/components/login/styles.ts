import { makeStyles, createStyles } from '@material-ui/core/styles';

const headerStyle = makeStyles(() =>
    createStyles({
        searchForm: {
            width: '100%',
            marginTop: '40px',
            marginBottom: '20px'
        },
        loginButton:{
            backgroundColor: '#2196f3'
        }
    })
);

export default headerStyle;