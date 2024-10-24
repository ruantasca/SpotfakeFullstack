import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import {Link} from 'expo-router';

const CadastroScreen = ({ navigation }) => {
  
    const [nome, setNome] = useState('');
    const [sobreNome, setSobreNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [signupStatus, setSingupStatus] = useState("/registro")

  const handleSubmit = async () => {
    try {
        const response = await fetch('http://localhost:8000/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'*/*',
            },
            body: JSON.stringify({
                'nome': nome, 
                'sobrenome': sobreNome,
                'email': email,
                'senha': password,
                'dataNascimento': dataNascimento,
            }),
        });

        const message = await response.text();
        alert(message);
    } catch (error) {
        console.error('Error during signup:', error);
        alert('Erro ao criar usuário');
    }
};

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Cadastro</Text>

        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#FFF"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Sobrenome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu sobrenome"
          placeholderTextColor="#FFF"
          value={sobreNome}
          onChangeText={setSobreNome}
        />

        <Text style={styles.label}>Data de Nascimento:</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          placeholderTextColor="#FFF"
          value={dataNascimento}
          onChangeText={setDataNascimento}
        />

        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#FFF"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          placeholderTextColor="#FFF"
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Cadastrar"
            color="#2e23ca"
            onPress={handleSubmit}
          />
          
        </View>
      </View>
    </View>
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
  title: {
    fontSize: 32,
    color: '#FFF',
    marginBottom: 30,
    fontFamily: 'Jolly Lodger',
  },
  label: {
    fontSize: 18,
    color: '#FFF',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 10,
    fontFamily: 'Jolly Lodger',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#2e23ca',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: '#FFF',
    backgroundColor: '#1d0073',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    borderRadius: 10,
  },
});

export default CadastroScreen;
