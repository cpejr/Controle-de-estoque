const styles = {

    ShoppingListContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        minHeight: '85vh'
    },

    listContainer: {
        width: '40%',
        backgroundColor: '#fff',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    ShoppingListTitle: {
        fontSize: '3vh',
        fontWeight: 'bold',
        width: '70%',
        color: '#043741',
        textAlign: 'center',
        marginTop: '20px'
    },

    tableContainer: {
        marginTop: '40px',
        height: '70%',
        overflow: 'auto',
        width: '80%',
    },

    table: {
        maxHeight: '100%',
        width: '99%',
    },

    tableElement: {
        borderRight: '1px solid #707070',
        borderBottom: '1px solid #707070',
        textAlign: 'center',
        fontSize: '2vh',
        padding: '30px',
    },

    tableLastElement: {
        borderBottom: '1px solid #707070',
        textAlign: 'center',
        fontSize: '2vh',
        padding: '30px',
        cursor: 'pointer'
    },

    numberInput: {
        width: '70px',
        height: '40px',
        borderRadius: '5px',
        textAlign: 'center'
    },

    openShoppingListButton: {
        color: '#fff',
        fontSize: '25px',
        fontWeight: '500',
        backgroundColor: '#043741',
        padding: '20px 40px 20px 40px',
        borderRadius: '40px',
        border: '1px solid #707070',
        marginTop: '20px'
    }


}

export default styles