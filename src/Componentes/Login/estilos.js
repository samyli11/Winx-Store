import { StyleSheet } from "react-native"
export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fac7d0',
    },
    imagem:{
        width: 550, 
        height: 250
    },
    input: {
        height: 50,
        width: "60%",
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: "#fff",
    },
    botao: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        width: 85,
        height: 40,
        margin: 6,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#d2d2d2'
    },
    textoButton: {
        color: '#000', 
    },
    texto: {
        fontSize: 12,
    },
    textoLink:{
        color: '#d17787',
    },

})