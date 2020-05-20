import {azulPadrao, fontCinzaEscuro, brancoPadrao, fontPadrao, fontSizeButton} from '../../StylePadrao/stylePadrao'
const styles = {
    container:{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: azulPadrao,
        flexDirection: 'column',
        display: 'flex'
    },
    logo: {
        marginBottom:'1%',
        height: '15%',
    },

    inputField: {
        borderRadius: '50px',
       // marginLeft: '10%',
        marginBottom: '2%',
        border: '1px solid #707070',
        backgroundColor: brancoPadrao,
        height: '10%',
        width: '25%',
        fontSize: '120%',
        fontFamily: fontPadrao,
        color: fontCinzaEscuro,
        paddingLeft: '2%',
        alignItems: 'center'
    },

    typoDiv:{
        marginBottom: '1%',
        width: '25%',
    },

    typoStyle:{
        color: brancoPadrao,
        fontFamily: fontPadrao,
        fontSize: '120%',
        alignItems:"left"
    },

    buttonLogin: {
        borderRadius: '50px',
        marginTop: '0%',
        backgroundColor: brancoPadrao,
        height: '7%',
        width: '10%',
        fontSize: fontSizeButton,
        fontFamily: fontPadrao,
        color: azulPadrao,
        alignItems: 'center',

    },
};
export default styles;