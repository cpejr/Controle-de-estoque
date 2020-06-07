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
            >
                <DialogTitle id="responsive-dialog-title" style={styles.typoStyle}>{props.product.name}</DialogTitle>
                <DialogContent>
                    <div /*style={styles.fieldContainer}*/>
                    <TextField
                        type='text'
                        variant='outlined'
                        value={props.product.type}
                        label="Tipo"
                        disabled='true'
                    />
                    <TextField
                        type='text'
                        variant='outlined'
                        value={props.product.id}
                        label="ID"
                        disabled='true'
                    />
                    <TextField
                        type='text'
                        variant='outlined'
                        value={props.product.local}
                        label="Local"
                        disabled='true'
                    />
                    <TextField
                        type='text'
                        variant='outlined'
                        value={props.product.quantidade}
                        label="Quantidade"
                        disabled='true'
                    />
                    </div>

                </DialogContent>
                <DialogActions>
                    <TextField
                        type='text'
                        variant='outlined'
                        label="Quantidade"
                    />
                    <Button style={styles.buttonRemove} onClick={props.onClose} color="primary">
                        REMOVER
                    </Button>
                </DialogActions>
            </Dialog>

    )

}