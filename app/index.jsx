import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text>AORA</Text>
      <StatusBar style="auto" />
      <Link href='/profile' style={{color: 'blue'}}>Go to profile</Link>

    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({
    container: {
        display : 'flex',
        flex : 1,  
        alignItems : 'center', 
        justifyContent : 'center'
    }
})