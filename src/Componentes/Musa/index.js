import { View, Image, TouchableOpacity, Text } from "react-native";
import estilos from "./estilos";

export function Musa({ navigation }) {

    return (

        <View style={estilos.container}>
            <Text style={estilos.toptext}>COLEÇÃO BLOOM</Text>
            <View style={estilos.center}>
                <TouchableOpacity style={estilos.produto} onPress={() => navigation.navigate('CEP')}>
                    <Image source={require('../../../assets/Musa/1.png')} style={{ width: 150, height: 200 }} />
                    <Text style={estilos.text}>R$ 66,00</Text>
                    <View style={estilos.comprar}>
                        <Text style={estilos.textbaixo}>Comprar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.produto} onPress={() => navigation.navigate('CEP')}>
                    <Image source={require('../../../assets/Musa/2.png')} style={{ width: 150, height: 200 }} />
                    <Text style={estilos.text}>R$ 51,99</Text>
                    <View style={estilos.comprar}>
                        <Text style={estilos.textbaixo}>Comprar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.produto} onPress={() => navigation.navigate('CEP')}>
                    <Image source={require('../../../assets/Musa/3.png')} style={{ width: 150, height: 200 }} />
                    <Text style={estilos.text}>R$ 30,00</Text>
                    <View style={estilos.comprar}>
                        <Text style={estilos.textbaixo}>Comprar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.produto} onPress={() => navigation.navigate('CEP')}>
                    <Image source={require('../../../assets/Musa/4.png')} style={{ width: 150, height: 200 }} />
                    <Text style={estilos.text}>R$ 57,90</Text>
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