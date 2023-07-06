import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageScreen from './ImageScreen'

const ProductList = () => {
  const greeting = "Hassan"
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 45 }}>Getting started with reactnative!</Text>
      <ImageScreen imgSource={"https://reactnative.dev/img/tiny_logo.png"} imgName={"This is bollvia"} />


    </SafeAreaView>
  )
}

export default ProductList

const styles = StyleSheet.create({
  greet: {
    fontSize: 20
  }
})