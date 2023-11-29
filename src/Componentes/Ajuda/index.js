import { View, Image, TouchableOpacity, Text, TextInput } from "react-native";
import estilos from "./estilos";

export function Ajuda({ navigation }) {

    return (

        <View style={estilos.container}>
            <Image style={estilos.logo} source={require('../../../assets/logo.png')} />
            <View style={estilos.center}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Text style={estilos.toptext}>FALE CONOSCO</Text>
                        <Text style={estilos.toptext}>(82)99876-1234</Text>
                    </View>
                    <View>
                        <Image style={estilos.img2} source={require('../../../assets/logo-telemarketing.png')} />
                    </View>

                </View>
                <Text style={estilos.inputtext}>Deixe sua avaliação, sugestão ou reclamação</Text>
                <TextInput
                    style={estilos.textinput}
                    placeholder={"Digite aqui..."}
                    multiline={true}
                />
                <TouchableOpacity style={estilos.botao2} onPress={() => navigation.navigate('Colecoes')}>
                    <Text style={estilos.text2}>Enviar</Text>
                </TouchableOpacity>
            </View>
            <Image style={estilos.imagem} source={require('../../../assets/trofeu.png')} />
            <TouchableOpacity style={estilos.exit} onPress={() => navigation.navigate('Colecoes')}>
                <Text style={estilos.text}>Voltar</Text>
            </TouchableOpacity>
        </View>

    )
}