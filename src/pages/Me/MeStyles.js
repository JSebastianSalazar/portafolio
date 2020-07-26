import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    mainContainer: {
        display: 'grid',
        gridAutoFlow: 'column',
        gridColumnGap: 23,
        gridAutoColumns: '1fr',
        marginBottom: 20,
        '& span': {
            fontSize: 15,
            marginBottom: 20
        },
    },
}));
