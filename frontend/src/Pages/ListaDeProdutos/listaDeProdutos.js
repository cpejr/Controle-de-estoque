import React, {useState} from 'react';
import styles from './listaDeProdutosStyle';
import {Typography, Button} from "@material-ui/core";
import Produto from "../Produto";

export default function ListaDeProdutos() {

    const colunas = ['PRODUTO', 'TIPO', 'ID', 'LOCAL', 'QUANTIDADE'];

    const props = {
        produtos: [
            {
                productName: 'Samsung Galaxy J5',
                productType: 'smartphone',
                productID: '11111',
                productLocation: 'estante 8',
                amount: '10',
                allertAmount: '3',
                lastBuyPrice: 'R$1200,00',
                lastBuyDate: '01/06/2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit metus interdum, laoreet nostra nam sed vehicula ac tellus pulvinar, nunc morbi dignissim scelerisque proin sociosqu tempus pharetra. Eleifend dignissim himenaeos magnis varius fusce vehicula netus consequat adipiscing elit amet, felis pharetra nec aliquet elementum parturient pellentesque semper imperdiet. Non finibus parturient felis nam bibendum magna dis a ultricies, congue netus cubilia facilisi nascetur malesuada torquent orci feugiat, vivamus ad consectetur primis lacinia placerat venenatis convallis. Praesent torquent tristique proin ut curae curabitur class eleifend, consequat sed mauris bibendum fermentum ante.'
            },
            {
                productName: 'IPhone 11',
                productType: 'smartphone',
                productID: '22222',
                productLocation: 'estante 10',
                amount: '15',
                allertAmount: '7',
                lastBuyPrice: 'R$5000,00',
                lastBuyDate: '29/05/2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit metus interdum, laoreet nostra nam sed vehicula ac tellus pulvinar, nunc morbi dignissim scelerisque proin sociosqu tempus pharetra. Eleifend dignissim himenaeos magnis varius fusce vehicula netus consequat adipiscing elit amet, felis pharetra nec aliquet elementum parturient pellentesque semper imperdiet. Non finibus parturient felis nam bibendum magna dis a ultricies, congue netus cubilia facilisi nascetur malesuada torquent orci feugiat, vivamus ad consectetur primis lacinia placerat venenatis convallis. Praesent torquent tristique proin ut curae curabitur class eleifend, consequat sed mauris bibendum fermentum ante.'

            },
            {
                productName: 'Samsung X55',
                productType: 'notebook',
                productID: 'a3333',
                productLocation: 'estante 4',
                amount: '22',
                allertAmount: '10',
                lastBuyPrice: 'R$2500,00',
                lastBuyDate: '22/05/2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit metus interdum, laoreet nostra nam sed vehicula ac tellus pulvinar, nunc morbi dignissim scelerisque proin sociosqu tempus pharetra. Eleifend dignissim himenaeos magnis varius fusce vehicula netus consequat adipiscing elit amet, felis pharetra nec aliquet elementum parturient pellentesque semper imperdiet. Non finibus parturient felis nam bibendum magna dis a ultricies, congue netus cubilia facilisi nascetur malesuada torquent orci feugiat, vivamus ad consectetur primis lacinia placerat venenatis convallis. Praesent torquent tristique proin ut curae curabitur class eleifend, consequat sed mauris bibendum fermentum ante.'

            },
            {
                productName: 'Dell Inspirion 7',
                productType: 'notebook',
                productID: 'a5545',
                productLocation: 'estante 4',
                amount: '12',
                allertAmount: '15',
                lastBuyPrice: 'R$3300,00',
                lastBuyDate: '03/04/2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit metus interdum, laoreet nostra nam sed vehicula ac tellus pulvinar, nunc morbi dignissim scelerisque proin sociosqu tempus pharetra. Eleifend dignissim himenaeos magnis varius fusce vehicula netus consequat adipiscing elit amet, felis pharetra nec aliquet elementum parturient pellentesque semper imperdiet. Non finibus parturient felis nam bibendum magna dis a ultricies, congue netus cubilia facilisi nascetur malesuada torquent orci feugiat, vivamus ad consectetur primis lacinia placerat venenatis convallis. Praesent torquent tristique proin ut curae curabitur class eleifend, consequat sed mauris bibendum fermentum ante.'

            },
            {
                productName: 'LeNovo IdeaPad S145',
                productType: 'notebook',
                productID: 'a4444',
                productLocation: 'estante 4',
                amount: '8',
                allertAmount: '8',
                lastBuyPrice: 'R$2200,00',
                lastBuyDate: '17/05/2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit metus interdum, laoreet nostra nam sed vehicula ac tellus pulvinar, nunc morbi dignissim scelerisque proin sociosqu tempus pharetra. Eleifend dignissim himenaeos magnis varius fusce vehicula netus consequat adipiscing elit amet, felis pharetra nec aliquet elementum parturient pellentesque semper imperdiet. Non finibus parturient felis nam bibendum magna dis a ultricies, congue netus cubilia facilisi nascetur malesuada torquent orci feugiat, vivamus ad consectetur primis lacinia placerat venenatis convallis. Praesent torquent tristique proin ut curae curabitur class eleifend, consequat sed mauris bibendum fermentum ante.'

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
                    const reg = new RegExp(searchProduct.toLowerCase(),"g");
                    props.produtos.map((item) => {
                        const parece = item.productName.toLowerCase().match(reg);
                        if(parece) {
                            produtos.push(item);
                        }
                    });
                setProduct(produtos);
            }
            else if(searchProductBy === 'tipo'){
                let produtos = [];
                const reg = new RegExp(searchProduct.toLowerCase(),"g");
                props.produtos.map((item) => {
                    const parece = item.productType.toLowerCase().match(reg);
                    if(parece) {
                        produtos.push(item);
                    }
                });
                setProduct(produtos);
            }
            else if(searchProductBy === 'id'){
                let produtos = [];
                const reg = new RegExp(searchProduct.toLowerCase(),"g");
                props.produtos.map((item) => {
                    const parece = item.productID.toLowerCase().match(reg);
                    if(parece) {
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
                        <Typography style={styles.typoStyleTitle}>
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
                        <div style={styles.productContainer} onClick={()=>{handleOpen(item)}} >
                            <div style={styles.productDiv}>
                                <Typography style={styles.typoStyleProduct}>
                                    {item.productName}
                                </Typography>
                            </div>
                            <div style={styles.productDiv}>
                                <Typography style={styles.typoStyleProduct}>
                                    {item.productType}
                                </Typography>
                            </div>
                            <div style={styles.productDiv}>
                                <Typography style={styles.typoStyleProduct}>
                                    {item.productID}
                                </Typography>
                            </div>
                            <div style={styles.productDiv}>
                                <Typography style={styles.typoStyleProduct}>
                                    {item.productLocation}
                                </Typography>
                            </div>
                            <div style={styles.productDiv}>
                                <Typography style={styles.typoStyleProduct}>
                                    {item.amount}
                                </Typography>
                            </div>
                        </div>
                    )
                })
            )
        }
        else {
            return (
                <Typography style={styles.typoStyleProduct}>
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
                <div style={styles.selectContainer}>
                    <select name="select" style={styles.selectField} onChange={(e)=>onChangeSelectBy(e.target.value)}>
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
                <div style={styles.bodyContainer}>
                    {renderProduct(products)}
                </div>

            </div>
            {open === true && (<Produto product={productModal} open={true} onClose={handleClose}/>)}
        </div>)

}
