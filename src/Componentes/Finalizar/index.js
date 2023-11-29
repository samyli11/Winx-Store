import { View, Image, TouchableOpacity, Text, TextInput } from "react-native";
import estilos from "./estilos";

export function Finalizar({ navigation }) {

    return (

        <View style={estilos.container}>
            <Image style={estilos.logo} source={require('../../../assets/logo.png')} />
            <View style={estilos.center}>
                <Text style={[estilos.text2, {color: '#D900A9'}]}>Winx Store</Text>
                <Text style={estilos.text2}>Agradece sua compra!</Text>
            </View>
            <Image style={estilos.imagem} source={require('../../../assets/trofeu.png')} />
            <TouchableOpacity style={estilos.exit} onPress={() => navigation.navigate('Colecoes')}>
                <Text style={estilos.text}>Voltar</Text>
            </TouchableOpacity>
        </View>

    )
}