import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import {Colors} from "../constants/Colors"
import { StatusBar } from 'react-native-web'

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  
  return (
    <>
      <StatusBar value="auto"/>
      <Stack screenOptions={{
        headerStyle: {backgroundColor: theme.navBackground},
        headerTintColor: theme.title,
      }}>

        <Stack.Screen name="(auth)" options={{headerShown: false}}/>
        <Stack.Screen name="index" options={{title: 'Home'}}/>
      </Stack>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})

/* Stack uses FiLo to navigate through the most recently used pages */