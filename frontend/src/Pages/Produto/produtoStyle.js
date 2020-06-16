import {azulPadrao, fontCinzaEscuro, brancoPadrao, fontPadrao, fontSizePadrao, fontSizeTitle, fontSizeBody} from '../../StylePadrao/stylePadrao'

const styles = {

    titleStyle:{
        color: fontCinzaEscuro,
        fontFamily: fontPadrao,
        fontSize: fontSizeTitle,
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
    fieldContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },

    descritionContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20%',
        width: '100%',
        marginBottom: '2%',
        border:'0.5px solid #707070',
        padding: '1%',
        overflow: 'auto',
    },

    textBoxDecrition: {
        color: fontCinzaEscuro,
        fontFamily: fontPadrao,
        fontSize: fontSizeBody,
        textAlign: 'justify',
        textTransform: 'uppercase',
        height: '100%',
        width: '100%',
    },

    bodyContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20%',
        width: '100%',
        marginBottom: '2%'
    },

    informationContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '33.33%',
    },

    typoStyleTitle:{
        fontFamily: fontPadrao,
        fontSize: fontSizePadrao,
        color: fontCinzaEscuro,
        marginBottom:'1%',
        textTransform: 'uppercase'
    },

    textBox: {
        border:'0.5px solid #707070',
        color: fontCinzaEscuro,
        fontFamily: fontPadrao,
        fontSize: fontSizePadrao,
        padding: '1%',
        textAlign: 'justify',
        textTransform: 'uppercase',
        height: '50%',
        width: '50%',
        overflow: 'auto',
    },

    buttonRemove: {
        borderRadius: '50px',
        margin: '0% 0% 0% 5%',
        backgroundColor: azulPadrao,
        height: '40%',
        width: '15%',
        fontSize: fontSizePadrao,
        fontFamily: fontPadrao,
        color: brancoPadrao,
        alignItems: 'center',
        disabled: true
    },

    formStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },

};
export default styles;