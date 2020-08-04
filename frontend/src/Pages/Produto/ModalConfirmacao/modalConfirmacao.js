import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'


export default function Confirmacao(props) {

    return (
        <div>
            <Dialog
                open={true}
                onClose={props.onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirma a retirada de:"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {props.amount + props.product.productName}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose} color="primary">
                        Confirmo
                    </Button>
                    <Button onClick={props.onClose} color="primary" autoFocus>
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}