import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import {Colors} from "../constants/Colors"

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  
  return (
      <Stack screenOptions={{
        headerStyle: {backgroundColor: theme.navBackground},
        headerTintColor: theme.title,
      }}>
        <Stack.Screen name="index" options={{title: 'Home'}}/>
        <Stack.Screen name="about" options={{title: 'About'}}/>
        <Stack.Screen name="contact" options={{title: 'Contact', headerShown: false}}/>
      </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})

/* Stack uses FiLo to navigate through the most recently used pages */