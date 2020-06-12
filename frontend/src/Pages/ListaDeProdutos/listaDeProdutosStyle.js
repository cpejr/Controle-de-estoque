import {azulPadrao, fontCinzaEscuro, brancoPadrao, fontPadrao, fontSizePadrao, fontSizeTitle} from '../../StylePadrao/stylePadrao'

const styles = {
    container: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    searchContainer:{
      height: '20%',
      width: '80%',
      backgroundColor: brancoPadrao,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      border:'0.5px solid #707070',
    },
    fieldContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '30%',
        margin: '0% 5% 0% 5%'
    },
    inputField: {
        borderRadius: '5vh',
        marginBottom: '2%',
        border: '1px solid #707070',
        backgroundColor: '#B4B4B4',
        height: '40%',
        width: '100%',
        fontSize: fontSizePadrao,
        fontFamily: fontPadrao,
        color: fontCinzaEscuro,
        paddingLeft: '5%',
        alignItems: 'center',
        textTransform: 'uppercase'
    },

    selectContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '15%',
        margin: '0%'
    },

    selectField: {
        borderRadius: '5vh',
        marginBottom: '2%',
        border: '1px solid #707070',
        backgroundColor: '#B4B4B4',
        height: '43.71%',
        width: '100%',
        fontSize: fontSizePadrao,
        fontFamily: fontPadrao,
        color: fontCinzaEscuro,
        paddingLeft: '5%',
        alignItems: 'center',
        textTransform: 'uppercase'
    },

    buttonSearch: {
        borderRadius: '5vh',
        margin: '0% 0% 0% 20%',
        backgroundColor: azulPadrao,
        height: '40%',
        width: '15%',
        fontSize: fontSizePadrao,
        fontFamily: fontPadrao,
        color: brancoPadrao,
        alignItems: 'center',
        disabled: true
    },



    listContainer:{
        height: '60%',
        width: '80%',
        backgroundColor: brancoPadrao,
        marginTop: '3%',
        border:'0.5px solid #707070',
    },
    titleContainer:{
        height: '20%',
        width: '100%',
        backgroundColor: '#B4B4B4',
        borderBottom:'0.5px solid #707070',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    titleDiv:{
        width: '20%',
        borderRight: '0.2px solid #707070',
        display: 'flex',
        justifyContent: 'center',
    },

    typoStyleTitle:{
        color: fontCinzaEscuro,
        fontFamily: fontPadrao,
        fontSize: fontSizeTitle,
        marginBottom: '1%',
        textTransform: 'uppercase'
    },

    bodyContainer:{
        overflow: 'auto',
        width: '100%',
        height: '80%',
    },

    productContainer:{
        height: '25%',
        width: '100%',
        backgroundColor: brancoPadrao,
        borderBottom:'0.5px solid #707070',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    },
    productDiv:{
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
    },
    typoStyleProduct:{
        color: fontCinzaEscuro,
        fontFamily: fontPadrao,
        fontSize: fontSizePadrao,
        marginBottom: '1%',
        textTransform: 'uppercase'
    },
};
export default styles;