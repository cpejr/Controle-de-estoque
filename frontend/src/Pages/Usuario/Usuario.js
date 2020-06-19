import React, {useState, useEffect} from 'react'
import styles from './UsuarioStyle';
import { IconContext } from "react-icons";
import { FaUser, FaLock } from "react-icons/fa";
import { Typography } from '@material-ui/core';

export default function Usuario(props){
    const [user, setUser] = useState()
    const [profilePage, setProfilePage] = useState (()=>{
        if (props.location.state.calledRoute === 'perfil'){
            return true
        }
        else if (props.location.state.calledRoute === 'usuario'){
            return false
        }
    })

    useEffect(()=>{

        if(profilePage){
            setUser({
                userName: 'Izabela',
            })
        }

        else{
            setUser(props.location.state.user)
        }

    },[])


    function handleSubmit() {
        alert(`Usuário ${user.userName} deslogado com sucesso`)
    }

    return(
        <div style={styles.Container}>
            <div style={styles.iconRow}>
                <IconContext.Provider value={{ size: '8rem' }}>
                    <FaUser />
                </IconContext.Provider>
            </div>
            <div style={styles.user}>
                <Typography style={styles.typoStyle}>
                    {user && user.userName}
                </Typography>
            </div>

            <div style={styles.infoContainer}>

                <div style={styles.boxContainer}>
                    <div style={styles.tittleBox}>
                        <Typography style={styles.typoStyleBoldUndreline}>
                            TIPO DE USUÁRIO
                        </Typography>
                    </div>
                    <div style={styles.userData}>
                        <Typography style={styles.typoStyle}>
                            ADMINISTRADOR
                        </Typography>
                    </div>
                </div>

                <div style={styles.boxContainer}>
                    <div style={styles.tittleBox}>
                        <Typography style={styles.typoStyleBoldUndreline}>
                            CPF
                        </Typography>
                    </div>
                    <div style={styles.userData}>
                        <Typography style={styles.typoStyle}>
                            XXX.XXX.XXX-XX
                        </Typography>
                    </div>
                </div>

                {
                    profilePage ? 
                        <div style={styles.boxContainer}>
                            <div style={styles.tittleBox}>
                                <Typography style={styles.typoStyleBoldUndreline}>
                                    TROCAR A SENHA
                                </Typography>
                            </div>
                            <div style={styles.userData}>
                                <input type='password' style={styles.changePassword} placeholder='Senha'/>
                                <input type='password' style={styles.changePassword} placeholder='Confirme a senha'/>
                                <button style={styles.buttonChangePassword}>ENVIAR</button>
                            </div>
                        </div>
                    :
                        <div style={styles.boxContainer}>
                            <div style={styles.tittleBox}>
                                <Typography style={styles.typoStyleBoldUndreline}>
                                    ULTIMO ACESSO
                                </Typography>
                            </div>
                            <div style={styles.userData}>
                                <Typography style={styles.typoStyle}>
                                    XX/XX/XXXX
                                </Typography>
                            </div>
                        </div>
                }

            </div>

            {
                profilePage ?
                    <div style={styles.buttonContainer}>
                        <button style={styles.buttonSair} onClick={handleSubmit}>SAIR</button>
                    </div>
                :
                <div style={styles.buttonContainer}>
                    {
                        (user && (user.userType==='Adm' || user.userType==='Manager')) ? 
                            <button style={styles.buttonSair}>EXCLUIR USUARIO</button>
                        :
                            <div style={styles.sendButtonLocked}>
                                <IconContext.Provider value={{ size: '2em' }}>
                                    <FaLock />
                                </IconContext.Provider>
                            </div>
                    }
                    {
                        (user && (user.userType==='Adm' || user.userType==='Manager')) ? 
                            <button style={styles.buttonSair}>ALTERAR PERMIÇÕES</button>
                        :
                            <div style={styles.sendButtonLocked}>
                                <IconContext.Provider value={{ size: '2em' }}>
                                    <FaLock />
                                </IconContext.Provider>
                            </div>
                    }
                </div>
            }

        </div>
    )
}