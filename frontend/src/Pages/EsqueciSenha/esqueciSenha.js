import React, {useState} from 'react';
import styles from './esqueciSenhaStyle';
import {Button} from '@material-ui/core';


export default function EsqueciSenha() {

    const [email, setEmail] = useState();

    function handleSubmit() {
        alert(`E-mail enviado para ${email}`)
    }

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <div style={styles.logo}>
                    <img alt="Logo" src='./Logo.png' style={{height: "80%", width: 'auto'}}/>
                </div>

                <input
                    type='text'
                    placeholder='E-MAIL'
                    style={styles.inputField}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}

                />

                <Button style={styles.buttonLogin} onClick={handleSubmit}>Enviar e-mail</Button>
            </div>
        </div>
    )
}