import { View, Image, TouchableOpacity, Text } from "react-native";
import estilos from "./estilos";

export function Stella({ navigation }) {

    return (

        <View style={estilos.container}>
            <Text style={estilos.toptext}>COLEÇÃO BLOOM</Text>
            <View style={estilos.center}>
                <TouchableOpacity style={estilos.produto} onPress={() => navigation.navigate('CEP')}>
                    <Image source={require('../../../assets/Stella/1.png')} style={{ width: 150, height: 200 }} />
                    <Text style={estilos.text}>R$ 145,90</Text>
                    <View style={estilos.comprar}>
                        <Text style={estilos.textbaixo}>Comprar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.produto} onPress={() => navigation.navigate('CEP')}>
                    <Image source={require('../../../assets/Stella/2.png')} style={{ width: 150, height: 200 }} />
                    <Text style={estilos.text}>R$ 197,00</Text>
                    <View style={estilos.comprar}>
                        <Text style={estilos.textbaixo}>Comprar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.produto} onPress={() => navigation.navigate('CEP')}>
                    <Image source={require('../../../assets/Stella/3.png')} style={{ width: 150, height: 200 }} />
                    <Text style={estilos.text}>R$ 199,99</Text>
                    <View style={estilos.comprar}>
                        <Text style={estilos.textbaixo}>Comprar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.produto} onPress={() => navigation.navigate('CEP')}>
                    <Image source={require('../../../assets/Stella/4.png')} style={{ width: 150, height: 200 }} />
                    <Text style={estilos.text}>R$ 118,99</Text>
                    <View style={estilos.comprar}>
                        <Text style={estilos.textbaixo}>Comprar</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <TouchableOpacity style={estilos.exit} onPress={() => navigation.navigate('Colecoes')}>
                <Text style={estilos.exittext}>Voltar</Text>
            </TouchableOpacity>
        </View>

    )
}