import React from 'react'
import {useHistory} from 'react-router-dom'
import styles from './SideBarStyle';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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
                    <ListItemText primary={"CLARISSE LISPECTOR"} />
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
                        <ListItemText primary={"LISTA DE PRODUTOS"} />
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
                    <ListItemText primary={"LISTA DE USUÁRIOS"} />
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
                    <ListItemText primary={"NOVO USUÁRIO"} />
                </ListItem>

            </List>
    )
}