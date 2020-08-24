import React, {useState} from 'react';
import styles from './novoProdutoStyle';

function NovoProduto(){

    const defaultInfo = {
        name: '',
        place: '',
        type: '',
        price: '',
        description: '',
        quantity: '',
        lastPurchase: '',
        alertQuantity: '',
    };

    const [newProduct, setNewProduct] = useState(defaultInfo);
    const [createdProduct, setCreatedProduct] = useState([]);

    function handleValues(name, value){
        setNewProduct({
            ...newProduct,
            [name]: value,
        });
    }

    function handleChange(e){
        handleValues(
            e.target.getAttribute('name'),
            e.target.value,
        );
    }

    function clearForm(){
        setNewProduct(defaultInfo);
    }

    function handleSubmit(e){
              e.preventDefault();
              setCreatedProduct([
                  ...createdProduct,
                  newProduct,
              ]);
              console.log(createdProduct);
              clearForm();
    }
    
    return(
        <form style={styles.form} onSubmit={(e) => (handleSubmit(e))}> 
            <div style={styles.top_section}>
                <div style={styles.input_box}>
                    <label style={styles.label}>Nome</label>
                    <input 
                        style={styles.input} 
                        name="name" 
                        value={newProduct.name} 
                        type="text" 
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.input_box}>
                    <label style={styles.label}>Local</label>
                    <input 
                        style={styles.input} 
                        name="place"
                        value={newProduct.place}  
                        type="text" 
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.input_box}>
                    <label style={styles.label}>Tipo</label>
                    <input 
                        style={styles.input} 
                        name="type" 
                        value={newProduct.type} 
                        type="text" 
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.input_box}>
                    <label style={styles.label}>Preço</label>
                    <input 
                        style={styles.input} 
                        name="price" 
                        value={newProduct.price} 
                        type="number" 
                        onChange={handleChange}
                    />
                </div>
            </div>


            <div style={styles.middle_section}>
                <div style={styles.text_box}>
                    <label style={styles.label}>Descrição</label>
                    <textarea 
                        style={styles.textarea} 
                        name="description" 
                        value={newProduct.description} 
                        onChange={handleChange} 
                        rows="10"
                    />
                </div>
            </div>


            <div style={styles.bottom_section}>
                <div style={styles.input_box}>
                    <label style={styles.label}>Quantidade</label>
                    <input 
                        style={styles.input} 
                        name="quantity" 
                        value={newProduct.quantity} 
                        type="number" 
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.input_box}>
                    <label style={styles.label}>última compra</label>
                    <input 
                        style={styles.input} 
                        name="lastPurchase" 
                        value={newProduct.lastPurchase} 
                        type="date" 
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.input_box}>
                    <label style={styles.label}>Quantidade de alerta</label>
                    <input 
                        style={styles.input} 
                        name="alertQuantity" 
                        value={newProduct.alertQuantity} 
                        type="number" 
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.input_box}>
                    <button style={styles.buttonCreate} type="submit">CRIAR</button>
                </div>
            </div> 
        </form>
    );
}

export default NovoProduto;