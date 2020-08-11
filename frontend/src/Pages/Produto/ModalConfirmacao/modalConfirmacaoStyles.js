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

    button: {
        borderRadius: '5%',
        //margin: '5% 10% 5% 10%',
        padding:'0%',
        backgroundColor: azulPadrao,
        //height: '40%',
        //width: '15%',
        fontSize: fontSizePadrao,
        fontFamily: fontPadrao,
        color: brancoPadrao,
        alignItems: 'center',
        //disabled: true
    },

    actions: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
       // margin: '5% 10% 5% 10%',
        //padding:'0%',
    }

};
export default styles;