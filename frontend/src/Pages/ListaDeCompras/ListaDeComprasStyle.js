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
        padding: '1em',
    },

    tableLastElement: {
        borderBottom: '1px solid #707070',
        textAlign: 'center',
        fontSize: '2vh',
        padding: '1em',
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
        fontSize: '1em',
        fontWeight: '500',
        backgroundColor: '#043741',
        padding: '1em 2em 1em 2em',
        borderRadius: '4em',
        border: '1px solid #707070',
        marginTop: '2%'
    }


}

export default styles