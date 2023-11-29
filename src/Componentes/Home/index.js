import { View, Image, TouchableOpacity, Text } from "react-native";
import estilos from "./estilos";

export function Home({ navigation }) {

    return (

        <View style={estilos.container}>
            <Image style={estilos.logo} source={require('../../../assets/logo.png')} />
            <View style={estilos.center}>
                <Text style={estilos.toptext}>Onde a elegância encontra a magia.</Text>
                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Colecoes')}>
                    <Text style={estilos.text}>Ver Coleções</Text>
                </TouchableOpacity>
            </View>
            <Image style={estilos.imagem} source={require('../../../assets/trofeu.png')} />
            <TouchableOpacity style={estilos.exit} onPress={() => navigation.navigate('Login')}>
                    <Text style={estilos.text}>Exit</Text>
            </TouchableOpacity>
        </View>

    )
}