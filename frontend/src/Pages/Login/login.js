import React, {useState} from 'react';
import styles from './loginStyle';
import {Typography, Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import {isMobile} from "../../isMobile";
import { login, user } from '../../Services/auth';


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
    const history = useHistory();

    async function handleSubmit() {
        if(user.name === userName && user.password === userPassword){
            await login(userName);
            history.push('/listaDeprodutos');
        }
        else{
            alert("dados incorretos");
        }
        // alert(`Usuário ${userName} logado com sucesso com a senha ${userPassword}`)
    }

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <div style={styles.logo}>
                    <img alt="Logo" src='./Logo.png' style={{height: "80%", width: 'auto'}}/>
                </div>

                <input
                    type='text'
                    placeholder='USUÁRIO'
                    style={styles.inputField}
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }}

                />

                <input
                    type='password'
                    placeholder='SENHA'
                    style={styles.inputField}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />

                {isMobile && <Button style={styles.buttonLogin} onClick={handleSubmit}>LOGIN</Button>}
                {isMobile && <Button style={styles.buttonEsqueciSenha} onClick={() => {
                    history.push('/esqueciMinhaSenha')
                }}>ESQUECI MINHA SENHA</Button>}
                {!isMobile && <Button style={styles.buttonEsqueciSenha} onClick={()=>{history.push('/esqueciMinhaSenha')}}>ESQUECI MINHA SENHA</Button>}
                {!isMobile && <Button style={styles.buttonLogin} onClick={handleSubmit}>LOGIN</Button>}



            </div>
        </div>

    )

}