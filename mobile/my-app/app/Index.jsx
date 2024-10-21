import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable } from 'react-native';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const registrarUsuario = () => {
        console.log(nome, email, senha);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Registro</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="Insira seu Nome"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setNome(text)}
                    value={nome}
                    placeholder="Insira seu Email"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                    placeholder="Insira sua senha"
                    secureTextEntry={true}
                    placeholderTextColor="#232F3E" 
                />
            </View>
            <View>
                <Pressable style={styles.button} onPress={registrarUsuario}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#240e65', 
        borderColor: '#FFFFF', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    inputContainer: {
        backgroundColor: '#2e23ca', 
        padding: 20,
        borderRadius: 10,
    },
    input: {
        borderColor: '#FF9900',
        width: '80%',
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        backgroundColor: '#FFFF', 
        color: '#000000',  
    },
    title: {
        fontSize: 42,
        fontWeight: 'bold',
        color: '#FFFF', 
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FFFF', 
        padding: 16,
        borderRadius: 2,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fffff', 
        fontSize: 18,
        fontWeight: 'bold',
    },
});
