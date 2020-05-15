import React, {useState} from 'react';
import styles from './novoUsuarioStyle';

import { IconContext } from "react-icons";
import { FaUserPlus } from "react-icons/fa";

export default function NovoUsuario(){
    const [userType, setUsertype] = useState('Adm');
    const [userName, setUserName] = useState('Adm');
    const [userPassword, setPassword] = useState('Adm');
    const [checkPassword, setCheckPassword] = useState('Adm');

    function handleSubmit(){
        alert(`Usuário ${userName} criado com sucesso`)
    }

    return(
        <div style={styles.NovoUsuarioContainer}>
            <div style={styles.iconRow}>
                <IconContext.Provider value={{ size: '10em' }}>
                    <FaUserPlus />
                </IconContext.Provider>
            </div>
            <div style={styles.formContainer}>
                <div style={styles.infosContainer}>
                    <input type='text' placeholder='USUÁRIO' style={styles.inputField} onChange={(e)=>{setUserName(e.target.value)}}/>
                    <input type='password' placeholder='SENHA' style={styles.inputField} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <input type='password' placeholder='CONFIRME A SENHA' style={styles.inputField} onChange={(e)=>{setCheckPassword(e.target.value)}}/>
                </div>
                <div style={styles.userTypeAndSendContainer}>
                    <div style={styles.userTyperContainer}>
                        <div placeholder='USUÁRIO' style={styles.handMadeRadio} onClick={()=>{setUsertype('Adm')}}>
                            {userType==='Adm' ? <div style={styles.filledCircle}/> : <div style={styles.emptyCircle}/>}
                            ADMINISTRADOR
                        </div>
                        <div placeholder='SENHA' style={styles.handMadeRadio} onClick={()=>{setUsertype('Manager')}}>
                            {userType==='Manager' ? <div style={styles.filledCircle}/> : <div style={styles.emptyCircle}/>}
                            GERENTE
                        </div>
                        <div placeholder='CONFIRME A SENHA' style={styles.handMadeRadio} onClick={()=>{setUsertype('Employee')}}>
                            {userType==='Employee' ? <div style={styles.filledCircle}/> : <div style={styles.emptyCircle}/>}
                            FUNCINÁRIO
                        </div>
                    </div>
                    <div style={styles.sendButton} onClick={handleSubmit}>CRIAR</div>
                </div>
            </div>
        </div>
    )

}