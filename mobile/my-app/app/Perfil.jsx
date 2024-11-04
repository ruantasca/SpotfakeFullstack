import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';


const Perfil = () => {

    return (
        
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                <Image source={require('./img/perfil.png')} style={styles.logo} />


                <View style={styles.buttonContainer}>
                    <label style={styles.label} htmlFor="Nome">Nome:</label>
                    <View style={styles.labelconteiner}>
                        <Text style={styles.labeltext}>Seu nome</Text>
                    </View>
                </View>


                <View style={styles.buttonContainer}>
                    <label style={styles.label} htmlFor="Email">Email:</label>
                    <View style={styles.labelconteiner}>
                        <Text style={styles.labeltext}>seu email</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <label style={styles.label} htmlFor="Senha">Senha:</label>
                    <View style={styles.labelconteiner}>
                        <Text style={styles.labeltext}>sua Senha</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <label style={styles.label} htmlFor="Data de Nascimento">Data de Nascimento:</label>
                    <View style={styles.labelconteiner}>
                        <Text style={styles.labeltext}>sua data de Nascimento</Text>
                    </View>
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
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        color: '#FFF',
        marginBottom: 40,
    },
    buttonContainer: {
        marginTop: 20,
        width: '80%',
    },
    button: {
        backgroundColor: '#6257ff',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    //parte do Label-------------
    labelconteiner: {
        backgroundColor: '#6257ff',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    labeltext: {
        color: 'white',
        fontSize: '16'
    },

    label: {
        color: 'white',
        fontSize: 20,
    },

});

export default Perfil;
