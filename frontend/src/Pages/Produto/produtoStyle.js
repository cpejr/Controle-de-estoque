import {azulPadrao, fontCinzaEscuro, brancoPadrao, fontPadrao, fontSizePadrao, fontSizeTitle} from '../../StylePadrao/stylePadrao'

const styles = {
    titulo: {
        marginLeft: '20rem',
        fontSize: '1.5rem',
    },
    typoStyle:{
        color: fontCinzaEscuro,
        fontFamily: fontPadrao,
        fontSize: '3.5vh',
        marginBottom: '1%'
    },
    fieldContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        margin: '0% 0% 0% 5%'
    },
    buttonRemove: {
        borderRadius: '50px',
        margin: '0%',
        backgroundColor: azulPadrao,
        height: '40%',
        width: '15%',
        fontSize: fontSizePadrao,
        fontFamily: fontPadrao,
        color: brancoPadrao,
        alignItems: 'center',
        disabled: true
    },
};
export default styles;