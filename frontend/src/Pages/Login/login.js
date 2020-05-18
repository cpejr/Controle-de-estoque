import React from 'react';
import styles from './loginStyle';
import { Typography } from '@material-ui/core';


export default function Login(){

   /* return(
        <div style={styles.container}>
           <div style={styles.logo}>
               <img alt="Logo" src='./Logo.png' style={{height: "80%", width: 'auto'}}/>
           </div>
            <div style={styles.typoDiv}>
            <Typography style={styles.typoStyle}>
                USUÁRIO
            </Typography>
            </div>
           <input
               type='text'
               //placeholder='USUÁRIO'
               style={styles.inputField}

           />
           <div style={styles.typoDiv}>
           <Typography style={styles.typoStyle}>
               SENHA
           </Typography>
           </div>

           <input
               type='password'
               //placeholder='SENHA'
               style={styles.inputField}

           />

           <button style={styles.buttonLogin}>LOGIN</button>
    )

}*/
   return(
       <div style={styles.container}>
           <div style={styles.logo}>
               <img alt="Logo" src='./Logo.png' style={{height: "80%", width: 'auto'}}/>
           </div>

           <input
               type='text'
               placeholder='USUÁRIO'
               style={styles.inputField}

           />

           <input
               type='password'
               placeholder='SENHA'
               style={styles.inputField}

           />

           <button style={styles.buttonLogin}>LOGIN</button>


       </div>

   )
}