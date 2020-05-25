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
      flexDirection: 'row'

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
        alignItems:"left",
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
        margin: '5%',
        backgroundColor: azulPadrao,
        height: '35%',
        width: '18%',
        fontSize: fontSizeButton,
        fontFamily: fontPadrao,
        color: brancoPadrao,
        alignItems: 'center',
    },


    listContainer:{
        height: '50%',
        width: '80%',
        backgroundColor: brancoPadrao,
        marginTop: '5%'
    },
};
export default styles;