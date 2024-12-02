import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Pressable, FlatList, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { LoginContext } from '../scripts/LoginContext';

const Albums = () => {
  const { userData } = useContext(LoginContext);

  const artistas = [
    { id: 1, nome: 'Artista 1', imagem: './img/1.jpg' },
    { id: 2, nome: 'Artista 2', imagem: '2.jpg' },
    { id: 3, nome: 'Artista 3', imagem: '3.jpg' },
    { id: 4, nome: 'Artista 4', imagem: '4.jpg' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <Link href={`/Perfil`}>
          <Pressable>
            <Image source={{ uri: userData?.foto }} style={styles.perfil} />
          </Pressable>
        </Link>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search Albums" placeholderTextColor="#AAA" />
        </View>

        <View style={styles.gridContainer}>
          <FlatList
            data={artistas}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.albumCard}>
                <Image source={{ uri: item.imagem }} style={styles.albumImage} />
                <Text style={styles.albumTitle}>{item.nome}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1d0073',
  },
  sidebar: {
    width: '10%',
    backgroundColor: '#3a1c94',
    alignItems: 'center',
    paddingTop: 20,
  },
  perfil: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  mainContent: {
    width: '90%',
    padding: 10,
    backgroundColor: '#240e65',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3a1c94',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    color: '#FFF',
  },
  gridContainer: {
    flex: 1,
  },
  albumCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3a1c94',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  albumImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  albumTitle: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default Albums;
