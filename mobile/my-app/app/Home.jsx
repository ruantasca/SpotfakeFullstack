import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Pressable } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.sidebar}>
        
      </View>

      
      <View style={styles.mainContent}>
        
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#AAA" />
          <Pressable style={styles.settingsButton}>
            <Text style={styles.settingsText}>⚙️</Text>
          </Pressable>
        </View>

        
        <View style={styles.gridContainer}>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
          
          <View style={styles.rectangle}></View>
          <View style={styles.rectangle}></View>
        </View>
      </View>

      
      <View style={styles.musicPlayer}>
        <Text style={styles.songTitle}>nome</Text>
        <View style={styles.progressBar}></View>
        <View style={styles.controls}>
          <Text style={styles.controlButton}>⏮️</Text>
          <Text style={styles.controlButton}>⏯️</Text>
          <Text style={styles.controlButton}>⏭️</Text>
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
    width: '15%',
    backgroundColor: '#3a1c94',
    alignItems: 'center',
    paddingTop: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  mainContent: {
    width: '85%',
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
  settingsButton: {
    marginLeft: 10,
  },
  settingsText: {
    color: '#FFF',
    fontSize: 18,
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#AAA',
    margin: 10,
  },
  rectangle: {
    width: '45%',
    height: 100,
    backgroundColor: '#AAA',
    margin: 10,
  },
  musicPlayer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#1d0073',
    padding: 10,
    alignItems: 'center',
  },
  songTitle: {
    color: '#FFF',
    fontSize: 16,
  },
  progressBar: {
    width: '80%',
    height: 5,
    backgroundColor: '#AAA',
    borderRadius: 5,
    marginVertical: 10,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
  },
  controlButton: {
    fontSize: 20,
    color: '#FFF',
  },
});

export default Home;
