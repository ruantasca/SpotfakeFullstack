import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView } from 'react-native';

const Perfil = () => {
    const [nome, setNome] = useState('Seu nome');
    const [email, setEmail] = useState('seu email');
    const [senha, setSenha] = useState('sua Senha');
    const [dataNascimento, setDataNascimento] = useState('sua data de Nascimento');

    const fetchUserProfile = async (email) => {
        try {
            const response = await fetch('backand', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar o perfil:', error);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                <Image source={require('./img/perfil.png')} style={styles.logo} />

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nome:</Text>
                    <TextInput
                        style={styles.input}
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                        placeholder="Seu nome"
                        placeholderTextColor="#b0b0b0"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Seu email"
                        placeholderTextColor="#b0b0b0"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Senha:</Text>
                    <TextInput
                        style={styles.input}
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                        placeholder="Sua senha"
                        placeholderTextColor="#b0b0b0"
                        secureTextEntry
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Data de Nascimento:</Text>
                    <TextInput
                        style={styles.input}
                        value={dataNascimento}
                        onChangeText={(text) => setDataNascimento(text)}
                        placeholder="Sua data de nascimento"
                        placeholderTextColor="#b0b0b0"
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d0073',
        padding: 20,
    },
    innerContainer: {
        flex: 1,
        backgroundColor: '#240e65',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 20,
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },
    inputContainer: {
        marginTop: 20,
        width: '80%',
    },
    label: {
        color: 'white',
        fontSize: 20,
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#6257ff',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 16,
        width: '100%',
    },
});

export default Perfil;
