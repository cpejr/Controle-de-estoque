import {azulPadrao, brancoPadrao, fontCinzaEscuro, fontPadrao, fontSizeTitle, fontSizePadrao} from "../../StylePadrao/stylePadrao";

const styles = {
    Container: {
        height: '100%',
    },

    iconRow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%',

    },

    user:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '5%',
        marginTop: '1%'
    },

    typoStyle:{
        color: fontCinzaEscuro,
        fontFamily: fontPadrao,
        fontSize: fontSizeTitle,
        alignItems:"center"
    },

    infoContainer: {
        display: 'flex',
        height:  '50%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    boxContainer: {
        width: '25%',
        display: 'flex',
        margin: '5% 2% 2% 2%',
        backgroundColor: brancoPadrao,
        flexDirection: 'column'
    },

    tittleBox:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20%',
        margin: '3% 0% 0% 0%',
    },

    typoStyleBoldUndreline:{
        color: 'black',
        fontFamily: fontPadrao,
        fontSize: fontSizeTitle,
        alignItems:"center",
        fontWeight: 'bold',
        textDecoration: 'underline',
    },

    userData:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '100%',
        flexDirection: 'column'
    },

    buttonContainer:{
        height: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonSair: {
        borderRadius: '50px',
        marginTop: '0%',
        backgroundColor: azulPadrao,
        padding: '20px 60px 20px 60px',
        fontSize: fontSizePadrao,
        fontFamily: fontPadrao,
        color: brancoPadrao,
        alignItems: 'center',
        margin: '20px',
    },

    sendButtonLocked: {
        backgroundColor: '#707070',
        padding: '20px 60px 20px 60px',
        margin: '20px',
        borderRadius: '5vh',
        color: '#ffff',
        cursor: 'pointer',
    },

    changePassword: {
        height: '20%',
        width: '80%',
        fontSize: '2em'
    },

    buttonChangePassword: {
        borderRadius: '50px',
        marginTop: '0%',
        backgroundColor: azulPadrao,
        padding: '10px 40px 10px 40px',
        fontSize: '2em',
        fontFamily: fontPadrao,
        color: brancoPadrao,
        alignItems: 'center',
    }
};
export default styles;