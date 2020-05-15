import React from 'react'
import {useHistory} from 'react-router-dom'
import styles from './SideBarStyle';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import { IconContext } from "react-icons";
import { FaUser, FaUsers, FaUserPlus } from "react-icons/fa";
import { TiThList } from "react-icons/ti";

export default function SideBar(){
    let history = useHistory();

    return(
            <List style={styles.SideBarContainer}>

                <ListItem button onClick={()=>{
                    console.log('Tentativa')
                    history.push('/perfil')
                }}>
                    <ListItemIcon>
                    <IconContext.Provider value={{ size: '1.8em' }}>
                        <FaUser />
                    </IconContext.Provider>
                    </ListItemIcon>
                    <ListItemText primary={<Typography style={styles.optionText}>CLARISSE LINSPECTOR</Typography>}/>
                </ListItem>

                <ListItem button onClick={()=>{
                    console.log('Tentativa')
                    history.push('/listaDeProdutos')
                }}>
                        <ListItemIcon>
                            <IconContext.Provider value={{ size: '1.8em' }}>
                                <TiThList />
                            </IconContext.Provider>
                        </ListItemIcon>
                        <ListItemText primary={<Typography style={styles.optionText}>LISTA DE PRODUTOS</Typography>} />
                </ListItem>

                <ListItem button onClick={()=>{
                    console.log('Tentativa')
                    history.push('/listaDeUsuarios')
                }}>
                    <ListItemIcon>
                        <IconContext.Provider value={{ size: '1.8em' }}>
                            <FaUsers />
                        </IconContext.Provider>
                    </ListItemIcon>
                    <ListItemText primary={<Typography style={styles.optionText}>LISTA DE USUÁRIOS</Typography>} />
                </ListItem>

                <ListItem button onClick={()=>{
                    console.log('Tentativa')
                    history.push('/novoUsuario')
                }}>
                    <ListItemIcon>
                        <IconContext.Provider value={{ size: '1.8em' }}>
                            <FaUserPlus />
                        </IconContext.Provider>
                    </ListItemIcon>
                    <ListItemText primary={<Typography style={styles.optionText}>NOVO USUÁRIO</Typography>} />
                </ListItem>

            </List>
    )
}