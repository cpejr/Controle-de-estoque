import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Confirmacao(props) {
  const [open, setOpen] = useState(props.open);

  useEffect(()=>{
    setOpen(props.open)
  }, [props.open])

  return (
      <Dialog
        open={open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Confirma a compra de: 
            {
                props.boughtList && props.boughtList.map(product=>{
                    return (
                        <li>
                            {product.amount} {product.productName} (id: {product.productId})
                        </li>
                    )
                })
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            CANCELAR
          </Button>
          <Button onClick={props.handleClose} color="primary" autoFocus>
            CONFIRMO
          </Button>
        </DialogActions>
      </Dialog>
  );
}