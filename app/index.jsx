import { StyleSheet, Text, View, Image } from 'react-native'
import {Link} from 'expo-router'
import React from 'react'

// themed componenets
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'

 // rnfes (shortcut)
const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img}/>

      <Text style={styles.title}>The Number One</Text>
      <Text style={{marginTop: 10, marginBottom:30}}>
        Reading List App
      </Text>

      <Link style={styles.link} href='/about'>About Page</Link>
      <Link style={styles.link} href='/contact'>Contact Page</Link>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  img: {
    marginVertical: 20
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})