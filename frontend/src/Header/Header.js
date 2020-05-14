import React from 'react';
import styles from './HeaderStyle';

export default function Header(){
    return(
        <div style={styles.Header}>
            <img alt="Logo" src='./Logo.png' style={{height: "80%", width: 'auto'}}/>
        </div>
    )
}