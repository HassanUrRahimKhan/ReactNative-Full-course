import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
 
const ProductList = () => {
    const greeting = "Hassan"
  return (
    <View>
      <Text style={{fontSize:45}}>Getting started with reactnative!</Text>
       {/* <Text style={styles.greet}>My name is {greeting}</Text> */}

    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
    greet:{
        fontSize:20
    }
})