import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Pressable, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { LoginContext } from "../scripts/LoginContext";

const Perfil = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { foto, setFoto } = useContext(LoginContext);

    // Carregar informações do AsyncStorage
    useEffect(() => {
        const carregarDados = async () => {
            const storedEmail = await AsyncStorage.getItem('emailUsuario');
            if (storedEmail) {
                setEmail(storedEmail);
            }

            const storedFotoPerfil = await AsyncStorage.getItem('fotoPerfil');
            if (storedFotoPerfil) {
                setFoto(storedFotoPerfil);
            }
        };
        carregarDados();
    }, []);

    const selecionarFoto = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permissão necessária', 'Precisamos de permissão para acessar sua galeria.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const fotoUri = result.assets[0].uri;
            setFoto(fotoUri);
            await AsyncStorage.setItem('fotoPerfil', fotoUri);
        }
    };

    const atualizarSenha = async () => {
        if (!senha) {
            Alert.alert('Erro', 'Preencha o campo de senha.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/usuarios/trocarsenha', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
            });

            if (response.ok) {
                Alert.alert('Sucesso', 'Senha atualizada com sucesso!');
                setSenha('');
            } else {
                const error = await response.json();
                Alert.alert('Erro', error.message || 'Não foi possível atualizar a senha.');
            }
        } catch (error) {
            console.error('Erro ao atualizar senha:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao atualizar a senha.');
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                {foto ? (
                    <Image source={{ uri: foto }} style={styles.fotoPerfil} />
                ) : (
                    <Image source={require('./img/perfil.png')} style={styles.logo} />
                )}

                <Pressable onPress={selecionarFoto} style={styles.botao}>
                    <Text style={styles.botaoTexto}>Alterar Foto de Perfil</Text>
                </Pressable>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        editable={false} // O email não pode ser editado
                        placeholderTextColor="#b0b0b0"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nova Senha:</Text>
                    <TextInput
                        style={styles.input}
                        value={senha}
                        onChangeText={setSenha}
                        placeholder="Nova senha"
                        placeholderTextColor="#b0b0b0"
                        secureTextEntry
                    />
                </View>

                <Pressable onPress={atualizarSenha} style={styles.botao}>
                    <Text style={styles.botaoTexto}>Atualizar Senha</Text>
                </Pressable>
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
        backgroundColor: '#240e65',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },
    fotoPerfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
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
    botao: {
        marginTop: 20,
        backgroundColor: '#3e2ea6',
        padding: 10,
        borderRadius: 10,
    },
    botaoTexto: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Perfil;
