import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './modalConfirmacaoStyles'
import {useTheme} from "@material-ui/core/styles";
import {useMediaQuery} from "@material-ui/core";


export default function Confirmacao(props) {
    const remover = () => {
        alert('Foi removido ' + props.amount + ' ' + props.product.productName);
    };
    return (
        <div>
            <Dialog
                open={true}
                onClose={props.onClose}
            >
                <DialogTitle style={styles.titleStyle}>{"Confirma a retirada de:"}</DialogTitle>
                <DialogContent style={styles.content}>
                    <DialogContentText style={styles.textStyle}>
                        {props.amount + ' ' + props.product.productName + ' (ID: ' + props.product.productID + ')'}
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={styles.actions}>
                    <Button onClick={props.onClose} style={styles.buttonCancelar} autoFocus>
                        Cancelar
                    </Button>
                    <Button onClick={remover} style={styles.buttonConfirmar}>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}