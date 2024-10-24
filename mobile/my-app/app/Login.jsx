import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} placeholder="Digite seu email" placeholderTextColor="#FFF" />
        
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          placeholderTextColor="#FFF"
        />

        <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha')}>
          <Text style={styles.forgotPassword}>Esqueci senha</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <Button title="Entrar" color="#2e23ca" onPress={() => { }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d0073', // Cor da borda externa
    padding: 20, // Borda de 20px
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#240e65', // Cor de fundo interna
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
  forgotPassword: {
    color: '#FFF',
    fontSize: 14,
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    borderRadius: 10,
  },
});

export default LoginScreen;
