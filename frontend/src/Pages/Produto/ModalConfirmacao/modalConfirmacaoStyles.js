import {azulPadrao, fontCinzaEscuro, brancoPadrao, fontPadrao, fontSizePadrao, fontSizeTitle, fontSizeBody} from '../../../StylePadrao/stylePadrao'

const styles = {

    titleStyle:{
        color: fontCinzaEscuro,
        fontFamily: fontPadrao,
        fontSize: fontSizeTitle,
        alignSelf: 'center',
    },
    textStyle:{
        color: fontCinzaEscuro,
        fontFamily: fontPadrao,
        fontSize: fontSizeTitle,
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
    content:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonConfirmar: {
        borderRadius: '50px',
        //margin: '5% 10% 5% 10%',
        padding:'0%',
        backgroundColor: azulPadrao,
        //height: '40%',
        width: '35%',
        fontSize: fontSizePadrao,
        fontFamily: fontPadrao,
        color: brancoPadrao,
        alignItems: 'center',
        //disabled: true
    },

    buttonCancelar: {
        borderRadius: '50px',
        //margin: '5% 10% 5% 10%',
        padding:'0%',
        backgroundColor: '#B4B4B4',
        //height: '40%',
        width: '35%',
        fontSize: fontSizePadrao,
        fontFamily: fontPadrao,
        color: azulPadrao,
        alignItems: 'center',
    },

    actions: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
};
export default styles;