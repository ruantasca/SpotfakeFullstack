import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, Pressable, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const Perfil = () => {
    const [nome, setNome] = useState('Seu nome');
    const [email, setEmail] = useState('seu email');
    const [senhaAtual, setSenhaAtual] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('sua data de nascimento');
    const [fotoPerfil, setFotoPerfil] = useState(null);

    // Carregar informações do AsyncStorage
    useEffect(() => {
        const carregarDados = async () => {
            const storedFotoPerfil = await AsyncStorage.getItem('fotoPerfil');
            if (storedFotoPerfil) {
                setFotoPerfil(storedFotoPerfil);
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

        if (!result.cancelled) {
            const fotoUri = result.uri;
            setFotoPerfil(fotoUri);
            await AsyncStorage.setItem('fotoPerfil', fotoUri);
        }
    };

    const atualizarNome = async () => {
        if (!nome) {
            Alert.alert('Erro', 'Nome não pode estar vazio.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/usuarios/update_name', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, email }),
            });

            if (response.ok) {
                Alert.alert('Sucesso', 'Nome atualizado com sucesso!');
            } else {
                Alert.alert('Erro', 'Não foi possível atualizar o nome.');
            }
        } catch (error) {
            console.error('Erro ao atualizar nome:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao atualizar o nome.');
        }
    };

    const atualizarSenha = async () => {
        if (!senhaAtual || !novaSenha) {
            Alert.alert('Erro', 'Preencha os campos de senha.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/usuarios/update_pass', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senhaAtual, novaSenha }),
            });

            if (response.ok) {
                Alert.alert('Sucesso', 'Senha atualizada com sucesso!');
            } else {
                Alert.alert('Erro', 'Não foi possível atualizar a senha.');
            }
        } catch (error) {
            console.error('Erro ao atualizar senha:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao atualizar a senha.');
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                {fotoPerfil ? (
                    <Image source={{ uri: fotoPerfil }} style={styles.fotoPerfil} />
                ) : (
                    <Image source={require('./img/perfil.png')} style={styles.logo} />
                )}

                <Pressable onPress={selecionarFoto} style={styles.botao}>
                    <Text style={styles.botaoTexto}>Alterar Foto de Perfil</Text>
                </Pressable>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nome:</Text>
                    <TextInput
                        style={styles.input}
                        value={nome}
                        onChangeText={setNome}
                        placeholder="Seu nome"
                        placeholderTextColor="#b0b0b0"
                    />
                </View>

                <Pressable onPress={atualizarNome} style={styles.botao}>
                    <Text style={styles.botaoTexto}>Atualizar Nome</Text>
                </Pressable>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Senha Atual:</Text>
                    <TextInput
                        style={styles.input}
                        value={senhaAtual}
                        onChangeText={setSenhaAtual}
                        placeholder="Senha atual"
                        placeholderTextColor="#b0b0b0"
                        secureTextEntry
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nova Senha:</Text>
                    <TextInput
                        style={styles.input}
                        value={novaSenha}
                        onChangeText={setNovaSenha}
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
