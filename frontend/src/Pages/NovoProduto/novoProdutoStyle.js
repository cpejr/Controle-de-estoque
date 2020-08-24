import {fontSizePadrao, azulPadrao, fontCinzaEscuro, brancoPadrao, fontPadrao} from '../../StylePadrao/stylePadrao'

const styles = {

    // Geral
    form: {
        boxSizing: 'border-box',
        padding: '20px',
        height: '100%',
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    input_box: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '20%',
        justifyContent: "center",
    },
    label: {
        fontFamily: fontPadrao,
        color: fontCinzaEscuro,
        fontSize: '3vh',
    },


    // Div superior
    top_section: {
        display: 'flex',
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    input: {
        height: '50px',
    },


    //Div do meio
    middle_section: {
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    width: '100%',
    text_box: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '0',
        margin: '0',
    },
    textarea: {
        boxSizing: 'border-box',
        minWidth: '100%',
        maxWidth: '100%',
        padding: '0',
        margin: '0',
    },


    //Div de baixo
    bottom_section: {
        height: '20%',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonCreate: {
        margin: "15% auto 0 auto",
        borderRadius: '50px',
        backgroundColor: azulPadrao,
        height: '40%',
        width: '80%',
        fontSize: fontSizePadrao,
        fontFamily: fontPadrao,
        color: brancoPadrao,
        alignItems: 'center',
        disabled: true
    },
};

export default styles;