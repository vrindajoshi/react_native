import {useColorScheme, Imaage } from 'react-native'
import { Colors } from '../constants/Colors'
import LightLogo from '../assets/img/logo_light.png'
import DarkLogo from '../assets/img/logo_dark.png'


const ThemedLooo = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const logo = colorScheme === "dark" ? DarkLogo : LightLogo

  return (
    <Image style={styles.img} source={logo}/>
  )
}

export default ThemedLogo