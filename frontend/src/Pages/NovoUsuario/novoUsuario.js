import React, {useState} from 'react';
import styles from './novoUsuarioStyle';

import { IconContext } from "react-icons";
import { FaUserPlus, FaLock } from "react-icons/fa";

const user = {
    userType: 'Employee'
}

export default function NovoUsuario(){
    const [newUserType, setNewUsertype] = useState('Adm');
    const [newUserName, setNewUserName] = useState('Adm');
    const [newUserPassword, setNewUserPassword] = useState('Adm');
    const [checkPassword, setCheckPassword] = useState('Adm');

    function handleSubmit(){
        alert(`Usuário ${newUserName} criado com sucesso`)
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
                    <input type='text' placeholder='USUÁRIO' style={styles.inputField} onChange={(e)=>{setNewUserName(e.target.value)}}/>
                    <input type='password' placeholder='SENHA' style={styles.inputField} onChange={(e)=>{setNewUserPassword(e.target.value)}}/>
                    <input type='password' placeholder='CONFIRME A SENHA' style={styles.inputField} onChange={(e)=>{setCheckPassword(e.target.value)}}/>
                </div>
                <div style={styles.userTypeAndSendContainer}>
                    <div style={styles.userTyperContainer}>
                        <div placeholder='USUÁRIO' style={styles.handMadeRadio} onClick={()=>{setNewUsertype('Adm')}}>
                            {newUserType==='Adm' ? <div style={styles.filledCircle}/> : <div style={styles.emptyCircle}/>}
                            ADMINISTRADOR
                        </div>
                        <div placeholder='SENHA' style={styles.handMadeRadio} onClick={()=>{setNewUsertype('Manager')}}>
                            {newUserType==='Manager' ? <div style={styles.filledCircle}/> : <div style={styles.emptyCircle}/>}
                            GERENTE
                        </div>
                        <div placeholder='CONFIRME A SENHA' style={styles.handMadeRadio} onClick={()=>{setNewUsertype('Employee')}}>
                            {newUserType==='Employee' ? <div style={styles.filledCircle}/> : <div style={styles.emptyCircle}/>}
                            FUNCIONÁRIO
                        </div>
                    </div>
                    {
                        (user.userType==='Adm') ? 
                            <div style={styles.sendButton} onClick={handleSubmit}>CRIAR</div>
                        :
                            <div style={styles.sendButtonLocked}>
                                <IconContext.Provider value={{ size: '2em' }}>
                                    <FaLock />
                                </IconContext.Provider>
                            </div>
                    }
                </div>
            </div>
        </div>
    )

}