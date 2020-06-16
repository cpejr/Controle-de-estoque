import React from 'react'
import {useHistory} from 'react-router-dom'
import styles from './SideBarStyle';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { IconContext } from "react-icons";
import { FaUser, FaUsers, FaUserPlus, FaShoppingCart } from "react-icons/fa";
import { TiThList } from "react-icons/ti";
import { MdPlaylistAdd, MdHelp } from 'react-icons/md'


export default function SideBar(){
    let history = useHistory();

    return(
            <List style={styles.SideBarContainer}>

                <ListItem button onClick={()=>{
                    history.push('/perfil')
                }}>
                    <ListItemIcon>
                    <IconContext.Provider value={{ size: '1.8em' }}>
                        <FaUser />
                    </IconContext.Provider>
                    </ListItemIcon>
                    <ListItemText primary={<Typography style={styles.optionText}>CLARISSE LINSPECTOR</Typography>}/>
                </ListItem>

                <Divider/>

                <ListItem button onClick={()=>{
                    history.push('/listaDeProdutos')
                }}>
                        <ListItemIcon>
                            <IconContext.Provider value={{ size: '1.8em' }}>
                                <TiThList />
                            </IconContext.Provider>
                        </ListItemIcon>
                        <ListItemText primary={<Typography style={styles.optionText}>LISTA DE PRODUTOS</Typography>} />
                </ListItem>

                <Divider/>

                <ListItem button onClick={()=>{
                    history.push('/listaDeUsuarios')
                }}>
                    <ListItemIcon>
                        <IconContext.Provider value={{ size: '1.8em' }}>
                            <FaUsers />
                        </IconContext.Provider>
                    </ListItemIcon>
                    <ListItemText primary={<Typography style={styles.optionText}>LISTA DE USUÁRIOS</Typography>} />
                </ListItem>

                <Divider/>

                <ListItem button onClick={()=>{
                    history.push('/novoUsuario')
                }}>
                    <ListItemIcon>
                        <IconContext.Provider value={{ size: '1.8em' }}>
                            <FaUserPlus />
                        </IconContext.Provider>
                    </ListItemIcon>
                    <ListItemText primary={<Typography style={styles.optionText}>NOVO USUÁRIO</Typography>} />
                </ListItem>

                <Divider/>

                <ListItem button onClick={()=>{
                    history.push('/novoProduto')
                }}>
                    <ListItemIcon>
                        <IconContext.Provider value={{ size: '1.8em' }}>
                            <MdPlaylistAdd />
                        </IconContext.Provider>
                    </ListItemIcon>
                    <ListItemText primary={<Typography style={styles.optionText}>NOVO PRODUTO</Typography>} />
                </ListItem>

                <Divider/>

                <ListItem button onClick={()=>{
                    history.push('/listaDeCompras')
                }}>
                    <ListItemIcon>
                        <IconContext.Provider value={{ size: '1.8em' }}>
                            <FaShoppingCart />
                        </IconContext.Provider>
                    </ListItemIcon>
                    <ListItemText primary={<Typography style={styles.optionText}>LISTA DE COMPRAS</Typography>} />
                </ListItem>

                <Divider/>

                <ListItem button onClick={()=>{
                    history.push('/ajuda')
                }}>
                    <ListItemIcon>
                        <IconContext.Provider value={{ size: '1.8em' }}>
                            <MdHelp />
                        </IconContext.Provider>
                    </ListItemIcon>
                    <ListItemText primary={<Typography style={styles.optionText}>AJUDA</Typography>} />
                </ListItem>

                <Divider/>

                <img src='/logo_cpe_preta.png' alt='Logo CPE' style={styles.logo}/>

            </List>
    )
}