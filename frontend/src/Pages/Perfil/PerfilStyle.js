import {azulPadrao, brancoPadrao, fontCinzaEscuro, fontPadrao, fontSizeTitle, fontSizeButton} from "../../StylePadrao/stylePadrao";

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
        justifyContent: 'center',
        height: '100%',
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
        height: '90%',
        width: '10%',
        fontSize: fontSizeButton,
        fontFamily: fontPadrao,
        color: brancoPadrao,
        alignItems: 'center',

    },
};
export default styles;