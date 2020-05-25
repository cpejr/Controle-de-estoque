import React from 'react';
import styles from './listaDeProdutosStyle';
import {Typography} from "@material-ui/core";

export default function ListaDeProdutos(){

    return(
        <div style={styles.container}>
           <div style={styles.searchContainer}>
               <div style={styles.fieldContainer}>
                   <Typography style={styles.typoStyle}>
                       PRODUTO
                   </Typography>
                   <input
                       style={styles.inputField}
                       type='text'
                   />
               </div>
               <div style={styles.fieldContainer}>
                   <Typography style={styles.typoStyle}>
                       TIPO
                   </Typography>
                   <input
                       style={styles.inputField}
                       type='text'
                   />
               </div>
                <button style={styles.buttonSearch}>BUSCAR</button>

           </div>
           <div style={styles.listContainer}>
                Listar
           </div>
        </div>)

}
