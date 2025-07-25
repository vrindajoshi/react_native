import { StyleSheet, Text, View } from 'react-native'
import {Link} from 'expo-router'

import React from 'react'
import ThemedView from '../components/ThemedView'

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>

       <Link style={styles.link} href='/'>Back Home</Link>
    </ThemedView>
  )
}

export default Contact

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