import React, {useState} from 'react';
import styles from './loginStyle';
import { Typography, Button} from '@material-ui/core';


export default function Login() {

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
    const [userName, setUserName] = useState();
    const [userPassword, setPassword] = useState('Adm');
    function handleSubmit() {
        alert(`Usuário ${userName} logado com sucesso com a senha ${userPassword}`)
    }

        return (
            <div style={styles.container}>
                <div style={styles.logo}>
                    <img alt="Logo" src='./Logo.png' style={{height: "80%", width: 'auto'}}/>
                </div>

                <input
                    type='text'
                    placeholder='USUÁRIO'
                    style={styles.inputField}
                    onChange={(e)=>{setUserName(e.target.value)}}

                />

                <input
                    type='password'
                    placeholder='SENHA'
                    style={styles.inputField}
                    onChange={(e)=>{setPassword(e.target.value)}}
                />

                <Button style={styles.buttonLogin} onClick={handleSubmit}>LOGIN</Button>


            </div>

        )

}