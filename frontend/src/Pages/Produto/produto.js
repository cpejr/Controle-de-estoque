import React from 'react';
import styles from './produtoStyle';
import { Typography, useMediaQuery, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';



export default function Produto(props){
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


    return(

            <Dialog
                fullScreen={fullScreen}
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="responsive-dialog-title"
                fullWidth='true'
                maxWidth='md'
            >
                <DialogTitle id="responsive-dialog-title" style={styles.titleStyle}>{props.product.name}</DialogTitle>
                <DialogContent>
                    <div style={styles.fieldContainer}>
                        <div style={styles.descritionContainer}>
                            <div style={styles.textBoxDecrition}>
                                {props.product.descricao}
                            </div>
                        </div>

                        <div style={styles.bodyContainer}>
                            <div style={styles.informationContainer}>
                            <Typography style={styles.typoStyleTitle}>
                                id
                            </Typography>
                            <div style={styles.textBox}>
                                {props.product.id}
                            </div>
                        </div>
                            <div style={styles.informationContainer}>
                                <Typography style={styles.typoStyleTitle}>
                                    tipo
                                </Typography>
                                <div style={styles.textBox}>
                                    {props.product.type}
                                </div>
                            </div>
                            <div style={styles.informationContainer}>
                                <Typography style={styles.typoStyleTitle}>
                                    última compra
                                </Typography>
                                <div style={styles.textBox}>
                                    {props.product.ultimaCompra}
                                </div>
                            </div>
                        </div>

                        <div style={styles.bodyContainer}>
                            <div style={styles.informationContainer}>
                                <Typography style={styles.typoStyleTitle}>
                                    local
                                </Typography>
                                <div style={styles.textBox}>
                                    {props.product.local}
                                </div>
                            </div>
                            <div style={styles.informationContainer}>
                                <Typography style={styles.typoStyleTitle}>
                                    preço
                                </Typography>
                                <div style={styles.textBox}>
                                    {props.product.preco}
                                </div>
                            </div>
                            <div style={styles.informationContainer}>
                                <Typography style={styles.typoStyleTitle}>
                                    quantidade alerta
                                </Typography>
                                <div style={styles.textBox}>
                                    {props.product.quantidadeAlerta}
                                </div>
                            </div>
                        </div>
                        <div style={styles.bodyContainer}>
                            <div style={styles.informationContainer}>
                                <Typography style={styles.typoStyleTitle}>
                                    quantidade
                                </Typography>
                                <div style={styles.textBox}>
                                    {props.product.quantidade}
                                </div>
                            </div>
                        </div>
                    </div>

                </DialogContent>
                <DialogActions>
                    <div style={styles.formStyle}>
                        <TextField
                            type='number'
                            variant='outlined'
                            label="Quantidade"
                        />
                        <Button style={styles.buttonRemove} onClick={props.onClose} color="primary">
                            REMOVER
                        </Button>
                    </div>
                </DialogActions>
            </Dialog>

    )

}