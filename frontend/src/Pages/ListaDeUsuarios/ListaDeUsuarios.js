import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import styles from './ListaDeUsuariosStyle'

let users = [
    {
        userName: 'Arthur Lima',
        userType: 'Manager'
    },
    {
        userName: 'Izabela Brandt',
        userType: 'Manager'
    },
    {
        userName: 'João Trindade',
        userType: 'Manager'
    },
    {
        userName: 'Carol Batista',
        userType: 'Manager'
    },
    {
        userName: 'Raphael Souza',
        userType: 'Admin'
    },
    {
        userName: 'Elias Silva',
        userType: 'Admin'
    },
    {
        userName: 'Vinícius Morais',
        userType: 'Admin'
    },
    {
        userName: 'Lucas Milhorato',
        userType: 'Employee'
    },
    {
        userName: 'André Pinto',
        userType: 'Employee'
    },
    {
        userName: 'Bernardo Andrade',
        userType: 'Employee'
    },
    {
        userName: 'Lucas Chaia',
        userType: 'Employee'
    },
]




export default function ListaDeUsuarios(){
    const history = useHistory()
    return(
        <div style={{minHeight: '100%', display: 'flex', flexDirection: 'column'}}>

            <div style={styles.userTypeHeader}>ADMINS</div>
            <div style={styles.userTypeContainer}>
                {users.map(user=>{
                    if(user.userType==='Admin'){
                        return (
                            <div style={styles.userContainer} 
                                onClick={()=>{
                                    history.push({
                                        pathname: '/usuario',
                                        state: {
                                            calledRoute: 'usuario',
                                            user: user
                                        }
                                    })}
                                }
                            >
                                <div>{user.userName}</div>
                            </div>
                        )
                    }
                })}
            </div>

            <div style={styles.userTypeHeader}>GERENTES</div>
            <div style={styles.userTypeContainer}>
                {users.map(user=>{
                    if (user.userType==='Manager'){
                        return (
                            <div style={styles.userContainer} 
                                onClick={()=>{
                                    history.push({
                                        pathname: '/usuario',
                                        state: {
                                            user: user
                                        }
                                    })}
                                }
                            >
                                <div>{user.userName}</div>
                            </div>
                        )
                    }
                })}
            </div>

            <div style={styles.userTypeHeader}>EMPREGADOS</div>
            <div style={styles.userTypeContainer}>
                {users.map(user=>{
                    if (user.userType==='Employee'){
                        return (
                            <div style={styles.userContainer} 
                                onClick={()=>{
                                    history.push({
                                        pathname: '/usuario',
                                        state: {
                                            user: user
                                        }
                                    })}
                                }
                            >
                                <div>{user.userName}</div>
                            </div>
                        )
                    }
                })}
            </div>

        </div>
    )
}