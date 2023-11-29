import { View, Image, TouchableOpacity, Text } from "react-native";
import estilos from "./estilos";

export function Colecoes({ navigation }) {

    return (

        <View style={estilos.container}>
            <Text style={estilos.toptext}>Magia. Brilho. Cor.</Text>
            <View style={estilos.center}>
                <TouchableOpacity style={estilos.botaocolecao} onPress={() => navigation.navigate('Bloom')}>
                    <Text style={estilos.text}>COLEÇÃO BLOOM</Text>
                    <Text style={estilos.textbaixo}>(ROUPAS DE VERÃO)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botaocolecao} onPress={() => navigation.navigate('Flora')}>
                    <Text style={estilos.text}>COLEÇÃO FLORA</Text>
                    <Text style={estilos.textbaixo}>(ROUPAS CASUAIS)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botaocolecao} onPress={() => navigation.navigate('Aisha')}>
                    <Text style={estilos.text}>COLEÇÃO AISHA</Text>
                    <Text style={estilos.textbaixo}>(ROUPAS DESPOJADAS)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botaocolecao} onPress={() => navigation.navigate('Stella')}>
                    <Text style={estilos.text}>COLEÇÃO STELLA</Text>
                    <Text style={estilos.textbaixo}>(ROUPAS BRILHO/FESTAS)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botaocolecao} onPress={() => navigation.navigate('Tecna')}>
                    <Text style={estilos.text}>COLEÇÃO TECNA</Text>
                    <Text style={estilos.textbaixo}>(ROUPAS ESPORTIVAS)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botaocolecao} onPress={() => navigation.navigate('Musa')}>
                    <Text style={estilos.text}>COLEÇÃO MUSA</Text>
                    <Text style={estilos.textbaixo}>(PIJAMAS)</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Home')}> 
                <Text style={estilos.text}>Voltar ao inicio</Text>
            </TouchableOpacity>
            <View style={estilos.bottomdiv}>
                <Text style={{marginHorizontal: 2, marginTop: 20}}>Podemos ajudar?</Text>
                <TouchableOpacity style={{marginHorizontal: 2, marginTop: 20}} onPress={() => navigation.navigate('Ajuda')}>
                    <Text style={estilos.botaohelp}>Fale conosco.</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}