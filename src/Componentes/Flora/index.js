import { View, Image, TouchableOpacity, Text } from "react-native";
import estilos from "./estilos";

export function Flora({ navigation }) {

    return (

        <View style={estilos.container}>
            <Text style={estilos.toptext}>COLEÇÃO FLORA</Text>
            <View style={estilos.center}>
                <TouchableOpacity style={estilos.produto} onPress={() => navigation.navigate('CEP')}>
                    <Image source={require('../../../assets/Flora/1.png')} style={{ width: 150, height: 200 }} />
                    <Text style={estilos.text}>R$ 102,99</Text>
                    <View style={estilos.comprar}>
                        <Text style={estilos.textbaixo}>Comprar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.produto} onPress={() => navigation.navigate('CEP')}>
                    <Image source={require('../../../assets/Flora/2.png')} style={{ width: 150, height: 200 }} />
                    <Text style={estilos.text}>R$ 115,90</Text>
                    <View style={estilos.comprar}>
                        <Text style={estilos.textbaixo}>Comprar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.produto} onPress={() => navigation.navigate('CEP')}>
                    <Image source={require('../../../assets/Flora/3.png')} style={{ width: 150, height: 200 }} />
                    <Text style={estilos.text}>R$ 93,00</Text>
                    <View style={estilos.comprar}>
                        <Text style={estilos.textbaixo}>Comprar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.produto} onPress={() => navigation.navigate('CEP')}>
                    <Image source={require('../../../assets/Flora/4.png')} style={{ width: 150, height: 200 }} />
                    <Text style={estilos.text}>R$ 87,99</Text>
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