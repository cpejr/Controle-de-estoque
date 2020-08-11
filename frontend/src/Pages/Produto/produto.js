import React from 'react';
import styles from './produtoStyle';
import { Typography, useMediaQuery, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import Confirmacao from "./ModalConfirmacao";



export default function Produto(props){

    const [openConfirmacao, setOpenConfirmacao] = React.useState(false);
    const [amountRemove, setAmountRemove] = React.useState(0);

    const handleClickOpenConfirmacao = () =>{
        setOpenConfirmacao(true);
    };

    const handleCloseConfirmacao = () => {
        setOpenConfirmacao(false);
    };

    const handleAmountRemove = (amount) => {
        setAmountRemove(amount)
    };

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


    return(
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="responsive-dialog-title"
                fullWidth='true'
                maxWidth='md'
            >
                <DialogTitle id="responsive-dialog-title" style={styles.titleStyle}>{props.product.productName}</DialogTitle>
                <DialogContent>
                    <div style={styles.fieldContainer}>
                        <div style={styles.descritionContainer}>
                            <div style={styles.textBoxDecrition}>
                                {props.product.description}
                            </div>
                        </div>

                        <div style={styles.bodyContainer}>
                            <div style={styles.informationContainer}>
                            <Typography style={styles.typoStyleTitle}>
                                id
                            </Typography>
                            <div style={styles.textBox}>
                                {props.product.productID}
                            </div>
                        </div>
                            <div style={styles.informationContainer}>
                                <Typography style={styles.typoStyleTitle}>
                                    tipo
                                </Typography>
                                <div style={styles.textBox}>
                                    {props.product.productType}
                                </div>
                            </div>
                            <div style={styles.informationContainer}>
                                <Typography style={styles.typoStyleTitle}>
                                    última compra
                                </Typography>
                                <div style={styles.textBox}>
                                    {props.product.lastBuyDate}
                                </div>
                            </div>
                        </div>

                        <div style={styles.bodyContainer}>
                            <div style={styles.informationContainer}>
                                <Typography style={styles.typoStyleTitle}>
                                    local
                                </Typography>
                                <div style={styles.textBox}>
                                    {props.product.productLocation}
                                </div>
                            </div>
                            <div style={styles.informationContainer}>
                                <Typography style={styles.typoStyleTitle}>
                                    preço
                                </Typography>
                                <div style={styles.textBox}>
                                    {props.product.lastBuyPrice}
                                </div>
                            </div>
                            <div style={styles.informationContainer}>
                                <Typography style={styles.typoStyleTitle}>
                                    quantidade alerta
                                </Typography>
                                <div style={styles.textBox}>
                                    {props.product.allertAmount}
                                </div>
                            </div>
                        </div>
                        <div style={styles.bodyContainer}>
                            <div style={styles.informationContainer}>
                                <Typography style={styles.typoStyleTitle}>
                                    quantidade
                                </Typography>
                                <div style={styles.textBox}>
                                    {props.product.amount}
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
                            InputProps={{inputProps: {min: 0, max: props.product.amount}}}
                            onChange={(e) => {handleAmountRemove(e.target.value)}}
                        />
                        <Button style={styles.buttonRemove} onClick={handleClickOpenConfirmacao} color="primary" disabled={amountRemove===0}>
                            REMOVER
                        </Button>
                    </div>
                </DialogActions>
            </Dialog>
            {openConfirmacao && (<Confirmacao open={openConfirmacao} onClose={handleCloseConfirmacao} amount={amountRemove} product={props.product}/>)}
        </div>
    )

}