import {azulPadrao, fontCinzaEscuro, brancoPadrao, fontPadrao, fontSizePadrao} from '../../StylePadrao/stylePadrao'
import {isMobile} from "../../isMobile";
const styles = {
    container:{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: azulPadrao,
        flexDirection: 'column',
        display: 'flex'
    },
    formContainer: {
        height: '100%',
        width: isMobile ? '60%' : '25%',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: azulPadrao,
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
        marginBottom: isMobile ? '15%' : '7%',
        border: '1px solid #707070',
        backgroundColor: brancoPadrao,
        height: '10%',
        width: '100%',
        fontSize: '120%',
        fontFamily: fontPadrao,
        color: fontCinzaEscuro,
        paddingLeft: '5%',
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
        marginTop: '8%',
        backgroundColor: brancoPadrao,
        height: '7%',
        width: isMobile ? '70%' : '50%',
        fontSize: fontSizePadrao,
        fontFamily: fontPadrao,
        color: azulPadrao,
        alignItems: 'center',

    },
};
export default styles;