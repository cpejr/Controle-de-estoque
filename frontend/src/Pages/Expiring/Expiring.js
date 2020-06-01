import React, {useState, useEffect} from 'react'
import styles from './ExpiringStyle'


export default function Expiring(){
    const products = [
        {
            productName: 'Todinho',
            productId: '1',
            shelfLife: new Date(2020, 5, 20, 10, 33, 30, 0)
        },
        {
            productName: 'Sucrilhos',
            productId: '2',
            shelfLife: new Date(2020, 4, 15, 10, 33, 30, 0)
        },
        {
            productName: 'Batata palha',
            productId: '3',
            shelfLife: new Date(2020, 4, 20, 10, 33, 30, 0)
        },
        {
            productName: 'Leite Moça',
            productId: '4',
            shelfLife: new Date(2020, 5, 20, 10, 33, 30, 0)
        },
        {
            productName: 'Diamante Negro',
            productId: '5',
            shelfLife: new Date(2020, 5, 20, 10, 33, 30, 0)
        },
        {
            productName: 'Arroz 1kg',
            productId: '6',
            shelfLife: new Date(2020, 4, 2, 10, 33, 30, 0)
        },
        {
            productName: 'Banana',
            productId: '7',
            shelfLife: new Date(2020, 5, 1, 10, 33, 30, 0)
        },
        {
            productName: 'Maça',
            productId: '8',
            shelfLife: new Date(2020, 4, 1, 10, 33, 30, 0)
        },
        {
            productName: 'Pera',
            productId: '9',
            shelfLife: new Date(2020, 5, 1, 10, 33, 30, 0)
        },
        {
            productName: 'Morango',
            productId: '10',
            shelfLife: new Date(2020, 5, 1, 10, 33, 30, 0)
        },
        {
            productName: 'Laranja',
            productId: '11',
            shelfLife: new Date(2020, 5, 1, 10, 33, 30, 0)
        },
        {
            productName: 'Mexerica',
            productId: '12',
            shelfLife: new Date(2020, 4, 13, 10, 33, 30, 0)
        },
        {
            productName: 'Goiaba',
            productId: '13',
            shelfLife: new Date(2020, 6, 11, 10, 33, 30, 0)
        },
        {
            productName: 'Uva',
            productId: '14',
            shelfLife: new Date(2020, 4, 11, 10, 33, 30, 0)
        },
        {
            productName: 'Jaboticaba',
            productId: '15',
            shelfLife: new Date(2020, 4, 11, 10, 33, 30, 0)
        },
        {
            productName: 'Toranja',
            productId: '16',
            shelfLife: new Date(2020, 4, 11, 10, 33, 30, 0)
        },
        {
            productName: 'Pêssego',
            productId: '17',
            shelfLife: new Date(2020, 4, 11, 10, 33, 30, 0)
        },
        {
            productName: 'Manga',
            productId: '18',
            shelfLife: new Date(2020, 4, 11, 10, 33, 30, 0)
        },
        {
            productName: 'Ameixa',
            productId: '19',
            shelfLife: new Date(2020, 4, 11, 10, 33, 30, 0)
        },
        {
            productName: 'Melancia',
            productId: '20',
            shelfLife: new Date(2020, 4, 11, 10, 33, 30, 0)
        },
        {
            productName: 'Jaca',
            productId: '21',
            shelfLife: new Date(2020, 4, 11, 10, 33, 30, 0)
        },
        {
            productName: 'Mamão',
            productId: '22',
            shelfLife: new Date(2020, 4, 11, 10, 33, 30, 0)
        },
        {
            productName: 'Melão',
            productId: '23',
            shelfLife: new Date(2020, 4, 11, 10, 33, 30, 0)
        },

    ]

    const [vencidos, setVencidos] = useState([])
    const [proxSem, setProxSem] = useState([])
    const [proxMes, setProxMes] = useState([])


    useEffect(()=>{
        const today = new Date()
        products.map((product)=>{
            const diffTime = product.shelfLife - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            if(diffDays<0){
                vencidos.push(product)
                setVencidos(vencidos)
            }
            else if(diffDays<=7){
                proxSem.push(product)
                setProxSem(proxSem)
            }
            else if(diffDays<=31){
                proxMes.push(product)
                setProxMes(proxMes)
            }
        })
        console.log(proxMes)
    }, [])



    return(
        <div style={styles.Expiring}>
            <ExpirationContainer title={'Vencidos'} products={vencidos}/>
            <ExpirationContainer title={'Próxima semana'} products={proxSem}/>
            <ExpirationContainer title={'Próximo Mês'} products={proxMes}/>
        </div>
    )
}


function ExpirationContainer(props){
    const [reload, setReload] = useState(false)
    useEffect(()=>{
        setReload(!reload)
    }, [props.products])

    return (
        <div style={styles.expirationContainer}>
            <div style={styles.expirationTitle}>{props.title}</div>
            <table style={styles.table}>
                <tr style={{fontSize:'2.5vh', marginBottom: '10px'}}>
                    <th>NOME</th>
                    <th>ID</th>
                    <th>VENC</th>
                </tr>
                {
                    reload ? 
                    props.products && props.products.map(product=>{
                        return(
                            <tr>
                                <td style={styles.tableElement}>{product.productName}</td>
                                <td style={styles.tableElement}>{product.productId}</td>
                                <td style={styles.tableLastElement}>
                                    {product.shelfLife.getDay()}/{product.shelfLife.getMonth()}/{product.shelfLife.getFullYear()}
                                </td>
                            </tr>
                        )
                    })
                    :
                    props.products && props.products.map(product=>{
                        return(
                            <tr>
                                <td style={styles.tableElement}>{product.productName}</td>
                                <td style={styles.tableElement}>{product.productId}</td>
                                <td style={styles.tableLastElement}>
                                    {product.shelfLife.getDay()}/{product.shelfLife.getMonth()}/{product.shelfLife.getFullYear()}
                                </td>
                            </tr>
                        )
                    })
                }
                
            </table>
        </div>
    )
}