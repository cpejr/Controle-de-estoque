import React, {useState} from 'react'
import styles from './PerfilStyle';
import { IconContext } from "react-icons";
import { FaUser } from "react-icons/fa";
import { Typography } from '@material-ui/core';

export default function Perfil(){
    const userName = 'Izabela';
    const userType = 'Adm';
    function handleSubmit() {
        alert(`Usuário ${userName} deslogado com sucesso`)
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
                    {userName}
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
                <div style={styles.boxContainer}>
                    <div style={styles.tittleBox}>
                        <Typography style={styles.typoStyleBoldUndreline}>
                            EMAIL
                        </Typography>
                    </div>
                    <div style={styles.userData}>
                        <Typography style={styles.typoStyle}>
                            TESTE@TESTE.COM
                        </Typography>
                    </div>
                </div>
            </div>

            <div style={styles.buttonContainer}>
                <button style={styles.buttonSair} onClick={handleSubmit}>SAIR</button>
            </div>

        </div>
    )
}