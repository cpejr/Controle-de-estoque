import React from 'react'
import {useHistory} from 'react-router-dom'
import styles from './ListaDeUsuariosStyle'

let admins = [
    {
        name: 'Arthur Lima',
    },
    {
        name: 'Izabela Brandt',
    },
    {
        name: 'João Trindade',
    },
    {
        name: 'Carol Batista',
    },
]

let managers = [
    {
        name: 'Raphael Souza',
    },
    {
        name: 'Elias Silva',
    },
    {
        name: 'Vinícius Morais',
    },
]


let employees = [
    {
        name: 'Lucas Milhorato',
    },
    {
        name: 'André Pinto',
    },
    {
        name: 'Bernardo Andrade',
    },
    {
        name: 'Lucas Chaia',
    },
]




export default function ListaDeUsuarios(){
    const history = useHistory()
    return(
        <div style={{minHeight: '100%', display: 'flex', flexDirection: 'column'}}>

            <div style={styles.userTypeHeader}>ADMINS</div>
            <div style={styles.userTypeContainer}>
                {admins.map(admin=>{
                    return (
                        <div style={styles.userContainer} 
                            onClick={()=>{
                                history.push({
                                    pathname: '/usuario',
                                    state: admin
                                })}
                            }
                        >
                            <div>{admin.name}</div>
                        </div>
                    )
                })}
            </div>

            <div style={styles.userTypeHeader}>GERENTES</div>
            <div style={styles.userTypeContainer}>
                {managers.map(manager=>{
                    return (
                        <div style={styles.userContainer} 
                            onClick={()=>{
                                history.push({
                                    pathname: '/usuario',
                                    state: manager
                                })}
                            }
                        >
                            <div>{manager.name}</div>
                        </div>
                    )
                })}
            </div>

            <div style={styles.userTypeHeader}>EMPREGADOS</div>
            <div style={styles.userTypeContainer}>
                {employees.map(employee=>{
                    return (
                        <div style={styles.userContainer} 
                            onClick={()=>{
                                history.push({
                                    pathname: '/usuario',
                                    state: employee
                                })}
                            }
                        >
                            <div>{employee.name}</div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}