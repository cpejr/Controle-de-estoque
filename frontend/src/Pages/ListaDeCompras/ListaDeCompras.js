import React, {useState, useEffect} from 'react'
import styles from './ListaDeComprasStyle'

import Confirmacao from './Confirmacao'

import { IconContext } from "react-icons";
import { FaCartPlus } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

const products = [
    {
        productName: 'Todinho',
        productId: '1',
        amount: 2
    },
    {
        productName: 'Sucrilhos',
        productId: '2',
        amount: 12
    },
    {
        productName: 'Batata palha',
        productId: '3',
        amount: 21
    },
    {
        productName: 'Leite Moça',
        productId: '4',
        amount: 1
    },
    {
        productName: 'Diamante Negro',
        productId: '5',
        amount: 5
    },
    {
        productName: 'Arroz 1kg',
        productId: '6',
        amount: 56
    },
    {
        productName: 'Banana',
        productId: '7',
        amount: 26
    },
    {
        productName: 'Maça',
        productId: '8',
        amount: 9
    },
    {
        productName: 'Pera',
        productId: '9',
        amount: 4
    },
    {
        productName: 'Morango',
        productId: '10',
        amount: 21
    },
    {
        productName: 'Laranja',
        productId: '11',
        amount: 10
    },
    {
        productName: 'Mexerica',
        productId: '12',
        amount: 9
    },
    {
        productName: 'Goiaba',
        productId: '13',
        amount: 15
    },
    {
        productName: 'Uva',
        productId: '14',
        amount: 14
    },
    {
        productName: 'Jaboticaba',
        productId: '15',
        amount: 32
    },
    {
        productName: 'Toranja',
        productId: '16',
        amount: 30
    },
    {
        productName: 'Pêssego',
        productId: '17',
        amount: 12
    },
    {
        productName: 'Manga',
        productId: '18',
        amount: 15
    },
    {
        productName: 'Ameixa',
        productId: '19',
        amount: 19
    },
    {
        productName: 'Melancia',
        productId: '20',
        amount: 4
    },
    {
        productName: 'Jaca',
        productId: '21',
        amount: 21
    },
    {
        productName: 'Mamão',
        productId: '22',
        amount: 18
    },
    {
        productName: 'Melão',
        productId: '23',
        amount: 16
    },

]


export default function ListaDeCompras(){
    const [selectedProducts, setSelectedProducts] = useState([])
    const [remainingProducts, setRemainingProducts] = useState([])
    const [reload, setReload] = useState(false)
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        products.sort((a, b)=>{return a.amount-b.amount})
        setRemainingProducts(products)
    },[])

    function handleUnselect(index){
        remainingProducts.push(selectedProducts[index])
        remainingProducts.sort((a, b)=>{return a.amount-b.amount})
        setRemainingProducts ( remainingProducts)

        selectedProducts.splice(index, 1)
        setSelectedProducts ( selectedProducts )

        setReload(!reload)
    }

    function handleSelect(index){
        selectedProducts.push(remainingProducts[index])
        setSelectedProducts ( selectedProducts )

        remainingProducts.splice(index, 1)
        remainingProducts.sort((a, b)=>{return a.amount-b.amount})
        setRemainingProducts ( remainingProducts )

        setReload(!reload)
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div style={styles.ShoppingListContainer}>



            <div style={styles.listContainer}>
                <div style={styles.ShoppingListTitle}>PRODUTOS ABAIXO DA QUANTIDADE ALERTA</div>
                <div style={styles.tableContainer}>
                    <table style={styles.table}>
                        <tr style={{fontSize:'1.5vh', marginBottom: '20px', color: '#043741'}}>
                            <th>NOME</th>
                            <th>ID</th>
                            <th>QTE ATUAL</th>
                            <th>ADICIONAR</th>
                        </tr>
                        {
                            reload ? 
                                remainingProducts && remainingProducts.map((product, index)=>{
                                    return(
                                        <tr>
                                            <td style={styles.tableElement}>{product.productName}</td>
                                            <td style={styles.tableElement}>{product.productId}</td>
                                            <td style={styles.tableElement}>{product.amount}</td>
                                            <td style={styles.tableLastElement}>
                                                <IconContext.Provider value={{ size: '1.8em' }} >
                                                    <FaCartPlus onClick={()=>{handleSelect(index)}}/>
                                                </IconContext.Provider>
                                            </td>
                                        </tr>
                                    )
                                })
                            : 
                                remainingProducts && remainingProducts.map((product, index)=>{
                                    return(
                                        <tr>
                                            <td style={styles.tableElement}>{product.productName}</td>
                                            <td style={styles.tableElement}>{product.productId}</td>
                                            <td style={styles.tableElement}>{product.amount}</td>
                                            <td style={styles.tableLastElement}>
                                                <IconContext.Provider value={{ size: '1.8em' }} >
                                                    <FaCartPlus onClick={()=>{handleSelect(index)}}/>
                                                </IconContext.Provider>
                                            </td>
                                        </tr>
                                    )
                                })
                        }
                        
                    </table>
                </div>
            </div>



            <div style={styles.listContainer}>
                <div style={styles.ShoppingListTitle}>CARRINHO DE COMPRAS</div>
                <div style={styles.tableContainer}>
                    <table style={styles.table}>
                        <tr style={{fontSize:'1.5vh', marginBottom: '20px', color: '#043741'}}>
                            <th>NOME</th>
                            <th>ID</th>
                            <th>QTE</th>
                            <th>RETIRAR</th>
                        </tr>
                        {
                            reload ?
                                selectedProducts && selectedProducts.map((product, index)=>{
                                    return(
                                        <tr>
                                            <td style={styles.tableElement}>{product.productName}</td>
                                            <td style={styles.tableElement}>{product.productId}</td>
                                            <td style={styles.tableElement}>
                                                <input type='text' style={styles.numberInput} placeHolder='N°'/>
                                            </td>
                                            <td style={styles.tableLastElement}>
                                                <IconContext.Provider value={{ size: '1.8em', color: '#F51616' }}>
                                                    <MdClose onClick={()=>{handleUnselect(index)}}/>
                                                </IconContext.Provider>
                                            </td>
                                        </tr>
                                    )
                                })
                            :
                                selectedProducts && selectedProducts.map((product, index)=>{
                                    return(
                                        <tr>
                                            <td style={styles.tableElement}>{product.productName}</td>
                                            <td style={styles.tableElement}>{product.productId}</td>
                                            <td style={styles.tableElement}>
                                                <input type='text' style={styles.numberInput} placeHolder='N°'/>
                                            </td>
                                            <td style={styles.tableLastElement}>
                                                <IconContext.Provider value={{ size: '1.8em', color: '#F51616' }} >
                                                    <MdClose onClick={()=>{handleUnselect(index)}}/>
                                                </IconContext.Provider>
                                            </td>
                                        </tr>
                                    )
                                })
                        }
                        
                    </table>
                </div>


                <button type='button' style={styles.openShoppingListButton} onClick={handleClickOpen}>
                    CONCLUIR
                </button>


            </div>

            <Confirmacao open={open} handleClose={handleClose} boughtList={selectedProducts}/>

        </div>
    )
}

