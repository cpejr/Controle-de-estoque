import React from 'react';
import styles from './HeaderStyle';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
}));

export default function Header(){
    const classes = useStyles();

    return(
        <div style={styles.Header} className={classes.appBar}>
            <img alt="Logo" src='./Logo.png' style={{height: "80%", width: 'auto'}}/>
        </div>
    )
}