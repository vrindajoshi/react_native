import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <View style={{flex:1}}>
      <Stack>
        <Stack.Screen name="index" options={{title: 'Home'}}/>
        <Stack.Screen name="about" options={{title: 'About'}}/>
        <Stack.Screen name="contact" options={{title: 'Contact', headerShown: false}}/>
      </Stack>
      <Text>Footer</Text> 
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({})

/* Stack uses FiLo to navigate through the most recently used pages */