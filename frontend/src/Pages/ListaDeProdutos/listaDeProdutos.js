import React, {useState} from 'react';
import styles from './listaDeProdutosStyle';
import {Typography} from "@material-ui/core";

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

    const [searchProductByName, setSearchProductByName] = useState('');
    const [productByName, setProductByName] = useState(props.produtos);

    function getProductByName() {
        return productByName;
    }

    function onChangeInputProduct(e) {
        setSearchProductByName(e);
    }

    function findProductByName(produtos, search) {
        if(search.length > 0) {
            let products = [];
            produtos.map((item) => {
                if (item.name === search) {
                    products.push(item);
                }
            });
             setProductByName(products);
            //return products;
        }
        /*else{
            //return '';
            setProductByName('');
        }*/
    }

    function findProductByType(produtos, search) {
        let products = [];
        produtos.map((item) =>{
            if(item.type === search){
                products.push(item);
            }
        });
        return products;

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
        if(produtos && produtos !== '' && produtos !== []) {
            return (
                produtos.map((item) => {
                    return (
                        <div style={styles.productContainer}>
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
                    Busque um item no estoque.
                </Typography>
            )
        }
    }

    return (
        <div style={styles.container}>

            <div style={styles.searchContainer}>

                <div style={styles.fieldContainer}>
                    <Typography style={styles.typoStyle}>
                        PRODUTO
                    </Typography>
                    <input
                        style={styles.inputField}
                        type='text'
                        onChange={(e)=>onChangeInputProduct(e.target.value)}
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
                <button style={styles.buttonSearch} onClick={console.log(searchProductByName)}>BUSCAR</button>
            </div>
            <div style={styles.listContainer}>
                <div style={styles.titleContainer}>
                    {renderColomnTitle()}
                </div>

                {/*findProductByName(props.produtos, searchProductByName)*/}
                {renderProduct(productByName)}

            </div>
        </div>)

}
