import React, {useState} from 'react';
import styles from './listaDeProdutosStyle';
import {Typography, Button} from "@material-ui/core";
import Produto from "../Produto";

export default function ListaDeProdutos() {

    const colunas = ['PRODUTO', 'TIPO', 'ID', 'LOCAL', 'QUANTIDADE'];

    const props = {
        produtos: [
            {
                name: 'Samsung Galaxy J5',
                type: 'smartphone',
                id: '11111',
                local: 'estante 8',
                quantidade: '10',
            },
            {
                name: 'IPhone 11',
                type: 'smartphone',
                id: '22222',
                local: 'estante 10',
                quantidade: '15',
            }
        ]
    };

    const [searchProduct, setSearchProduct] = useState('');
    const [searchProductBy, setSearchProductBy] = useState('produto');
    const [products, setProduct] = useState(props.produtos);
    const [productModal, setProductModal] = useState('');
    const [open, setOpen] = useState(false);

    const handleOpen = (produto) => {
        setOpen(true);
        setProductModal(produto)
    };

    const handleClose = () => {
        setOpen(false);
    };

    function onChangeInputSearch(e) {
        setSearchProduct(e);
    }

    function onChangeSelectBy(e) {
        setSearchProductBy(e);
    }

    function findProduct() {
        if(searchProduct.length > 0) {
            if(searchProductBy === 'produto') {
                let produtos = [];
                props.produtos.map((item) => {
                    if (item.name === searchProduct) {
                        produtos.push(item);
                    }
                });
                setProduct(produtos);
            }
            else if(searchProductBy === 'tipo'){
                let produtos = [];
                props.produtos.map((item) => {
                    if (item.type === searchProduct) {
                        produtos.push(item);
                    }
                });
                setProduct(produtos);
            }
            else if(searchProductBy === 'id'){
                let produtos = [];
                props.produtos.map((item) => {
                    if (item.id === searchProduct) {
                        produtos.push(item);
                    }
                });
                setProduct(produtos);
            }
        }
        else{
            setProduct(props.produtos);
        }
    }

    function renderColomnTitle() {
        return (
            colunas.map((item) => {
                return (
                    <div style={styles.titleDiv}>
                        <Typography style={styles.typoStyle}>
                            {item}
                        </Typography>
                    </div>
                )
            })
        )
    }

    function renderProduct(produtos) {
        if(produtos.length !== 0) {
            return (
                produtos.map((item) => {
                    return (
                        <div style={styles.productContainer}
                             onClick={()=>{handleOpen(item)}}>
                            <div style={styles.productDiv}>
                                <Typography style={styles.typoStyle}>
                                    {item.name}
                                </Typography>
                            </div>
                            <div style={styles.productDiv}>
                                <Typography style={styles.typoStyle}>
                                    {item.type}
                                </Typography>
                            </div>
                            <div style={styles.productDiv}>
                                <Typography style={styles.typoStyle}>
                                    {item.id}
                                </Typography>
                            </div>
                            <div style={styles.productDiv}>
                                <Typography style={styles.typoStyle}>
                                    {item.local}
                                </Typography>
                            </div>
                            <div style={styles.productDiv}>
                                <Typography style={styles.typoStyle}>
                                    {item.quantidade}
                                </Typography>
                            </div>
                        </div>
                    )
                })
            )
        }
        else {
            return (
                <Typography>
                    Produto não encontrado no estoque.
                </Typography>
            )
        }
    }

    return (
        <div style={styles.container}>

            <div style={styles.searchContainer}>

                <div style={styles.fieldContainer}>
                    <input
                        style={styles.inputField}
                        type='text'
                        onChange={(e)=>onChangeInputSearch(e.target.value)}
                        placeholder="Pesquisar"
                    />
                </div>
                <div style={styles.fieldContainer}>
                    <select name="select" style={styles.inputField} onChange={(e)=>onChangeSelectBy(e.target.value)}>
                        <option value="produto" selected>PRODUTO</option>
                        <option value="tipo" >TIPO</option>
                        <option value="id">ID</option>
                    </select>
                </div>
                <Button style={styles.buttonSearch} onClick={findProduct}>BUSCAR</Button>
            </div>
            <div style={styles.listContainer}>
                <div style={styles.titleContainer}>
                    {renderColomnTitle()}
                </div>
                {renderProduct(products)}

            </div>
            {open === true && (<Produto product={productModal} open={true} onClose={handleClose}/>)}
        </div>)

}
