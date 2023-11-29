import { View, Image, TouchableOpacity, Text, TextInput } from "react-native";
import estilos from "./estilos";

export function CEP({ navigation }) {

    return (

        <View style={estilos.container}>
            <Image style={estilos.logo} source={require('../../../assets/logo.png')} />
            <View style={estilos.center}>
                <Text style={estilos.inputtext}>CALCULAR FRETE:</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={estilos.textinput}
                        placeholder={"INSERIR CEP"}
                    />
                    <TouchableOpacity style={estilos.botao}>
                        <Text style={estilos.ok}>OK</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 10 }}>
                    <TouchableOpacity style={[estilos.botao, { width: 300, height: 30, flexDirection: 'row' }]}>
                        <Image source={require('../../../assets/troca.png')} style={{ width: 20, height: 20, marginHorizontal: 20 }} />
                        <Text style={estilos.text2}>CUPOM DE DESOCONTO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[estilos.botao, { width: 300, height: 30, flexDirection: 'row' }]}>
                        <Image source={require('../../../assets/cupom.png')} style={{ width: 30, height: 20, marginHorizontal: 20 }} />
                        <Text style={estilos.text2}>ADICIONAR VALE TROCA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[estilos.botao, { width: 200, height: 30, flexDirection: 'row' }]} onPress={() => navigation.navigate('Finalizar')}>
                        <Text style={estilos.text2}>FINALIZAR COMPRA</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={estilos.exit} onPress={() => navigation.navigate('Colecoes')}>
                <Text style={estilos.text}>Voltar</Text>
            </TouchableOpacity>
        </View>

    )
}