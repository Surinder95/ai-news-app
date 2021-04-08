import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    container : {
        padding : '0 5%',
        width: '100%',
        margin: '0'
    },
    card : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '43vh',
        padding: '10%',
        borderRadius: '2%',
        color: 'rgb(100,100,100)',
        width:'270px',
        background: 'linear-gradient(100deg, #FE6B8B, #FE6E53)'
    },
    infoCard : {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },
    tr : {
        color : 'rgb(235,235,235)',
        cursor: 'pointer',
        '&:hover': {
          color : 'blue',
        }
    }
});

