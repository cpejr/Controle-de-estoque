import {azulPadrao, fontCinzaEscuro, brancoPadrao, fontPadrao, fontSizeButton, fontSizeTitle} from '../../StylePadrao/stylePadrao'

const styles = {
    container: {
        height: '100%',
        width: '100%',
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
        width: '18%',
        margin: '0% 0% 0% 5%'
    },
    typoStyle:{
        color: fontCinzaEscuro,
        fontFamily: fontPadrao,
        fontSize: '20px',
        marginBottom: '1%'
    },
    inputField: {
        borderRadius: '50px',
        // marginLeft: '10%',
        marginBottom: '2%',
        border: '1px solid #707070',
        backgroundColor: '#D3D3D3',
        height: '35%',
        width: '100%',
        fontSize: '120%',
        fontFamily: fontPadrao,
        color: fontCinzaEscuro,
        paddingLeft: '5%',
        alignItems: 'center'
    },
    buttonSearch: {
        borderRadius: '50px',
        margin: '0% 0% 0% 20%',
        backgroundColor: azulPadrao,
        height: '40%',
        width: '15%',
        fontSize: fontSizeButton,
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
        backgroundColor: '#D3D3D3',
        border:'0.5px solid #707070',
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

    productContainer:{
        height: '20%',
        width: '100%',
        backgroundColor: brancoPadrao,
        border:'0.5px solid #707070',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    productDiv:{
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
    },
};
export default styles;