import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "./src/Componentes/Login"
import { Cadastro } from "./src/Componentes/Cadastro"
import { Home } from "./src/Componentes/Home"
import { Colecoes } from "./src/Componentes/Coleçoes"
import { Ajuda } from "./src/Componentes/Ajuda"
import { Bloom } from "./src/Componentes/Bloom"
import { Aisha } from "./src/Componentes/Aisha"
import { Tecna } from "./src/Componentes/Tecna"
import { Stella } from "./src/Componentes/Stella"
import { Musa } from "./src/Componentes/Musa"
import { Flora } from "./src/Componentes/Flora"
import { CEP } from "./src/Componentes/CEP"
import { Finalizar } from "./src/Componentes/Finalizar"

export function Rotas() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Cadastro' component={Cadastro} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='Colecoes' component={Colecoes} options={{ headerShown: false }} />
                <Stack.Screen name='Bloom' component={Bloom} options={{ headerShown: false }} />
                <Stack.Screen name='Flora' component={Flora} options={{ headerShown: false }} />
                <Stack.Screen name='Aisha' component={Aisha} options={{ headerShown: false }} />
                <Stack.Screen name='Stella' component={Stella} options={{ headerShown: false }} />
                <Stack.Screen name='Tecna' component={Tecna} options={{ headerShown: false }} />
                <Stack.Screen name='Musa' component={Musa} options={{ headerShown: false }} />
                <Stack.Screen name='CEP' component={CEP} options={{ headerShown: false }} />
                <Stack.Screen name='Finalizar' component={Finalizar} options={{ headerShown: false }} />
                <Stack.Screen name='Ajuda' component={Ajuda} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}