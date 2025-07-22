import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/img/logo_light.png'
import React from 'react'

 // rnfes (shortcut)
const Home = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={Logo}/>

      <Text style={styles.title}>The Number One</Text>
      <Text style={{marginTop: 10, marginBottom:30}}>
        Reading List App
      </Text>

      <View style={styles.card}>
        <Text>Hello, this is a card</Text>
      </View>
    </View>
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
  card: {
    backgroundColor: '#eee',
    padding: 20 ,
    borderRadius: 5,
    boxShadow: '4px 4px rgba(0,0,0,0,1)'
  },
  img: {
    marginVertical: 20
  }
})