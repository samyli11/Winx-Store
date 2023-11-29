import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { TextInput, HelperText, Snackbar } from 'react-native-paper';
import { logar } from "../../servicos/requisicoesFirebase";
import { estilos } from "./estilos";

export function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [secureMode, setSecureMode] = useState(true);
    const [statusError, setStatusError] = useState('')
    const [mensagemError, setMensagemError] = useState('')
    const [statusSnakbar, setStatusSnakbar] = useState(false)
    const [mensagemSnakbar, setMensagemSnakbar] = useState(false)

    async function fazerLogin() {
        if (email == '') {
            setMensagemError('E-mail não pode ficar vazio!')
            setStatusError('email')
        } else if (senha == '') {
            setMensagemError('Senha não pode ser em branco')
            setStatusError('senha')
        } else {
            setMensagemError('')
            setStatusError('')
            const resultado = await logar(email, senha)
            if (resultado == 'sucesso') {
                navigation.replace('Home', { email: email })
            } else
                setStatusSnakbar(true)
            setMensagemSnakbar("E-mail ou senha inválida")
            console.log(resultado)
        }
    }
    return (
        <View style={estilos.container}>
            <Image style={estilos.imagem}
                source={require('../../../assets/login.png')}
            />
            <TextInput
                label="E-mail"
                value={email}
                onChangeText={setEmail}
                mode="outlined"
                keyboardType="email-address"
                error={statusError == 'email'}
                style={estilos.input} />
            {statusError == 'email' ? <HelperText type="error" visible={statusError == 'email'}>
                {mensagemError}
            </HelperText> : null}
            <TextInput
                label="Senha"
                value={senha}
                onChangeText={setSenha}
                mode="outlined"
                error={statusError == 'senha'}
                secureTextEntry={secureMode}
                right={
                    <TextInput.Icon
                        icon={secureMode ? 'eye-off' : 'eye'}
                        onPress={() => setSecureMode(!secureMode)}
                    />
                }
                style={estilos.input} />
            {statusError == 'senha' ? <HelperText type="error" visible={statusError == 'senha'}>
                {mensagemError}
            </HelperText> : null}
            <TouchableOpacity style={estilos.botao} onPress={() => fazerLogin()}>
                <Text style={estilos.textoButton}>Continuar</Text>
            </TouchableOpacity>
            <Text style={estilos.texto}> Não possui cadastro?
                <Text style={estilos.textoLink}
                    onPress={() => navigation.navigate('Cadastro')}> Cadastre-se</Text>
            </Text>
            <Snackbar visible={statusSnakbar} onDismiss={() => setStatusSnakbar(false)} duration={2000}
                action={{
                    label: 'OK',
                    onPress: () => {
                        setStatusSnakbar(false)
                    },
                }}>
                {mensagemSnakbar} 
            </Snackbar>
        </View>
    )
}