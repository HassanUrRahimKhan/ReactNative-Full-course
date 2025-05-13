import { StyleSheet, Text, View ,Button,FlatList} from 'react-native'
import {useState} from 'react'

const AddColorScreen = () => {
     const [colors, setColor] = useState([])
     console.log(colors)
    const randomRgb = ()=>{
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        return `rgb(${red},${green},${blue})`
    }
    const keyGenerator = () => '_' + Math.random().toString(36).substr(2, 9)
  return (
    <View>
      <Button title = "Add color" onPress = {()=>{setColor([...colors,randomRgb()])}} />
      {/* <View style={{height:100,width:100,backgroundColor:randomRgb()}}></View> */}

      <FlatList
        keyExtractor={item =>item}
        data={colors}
        renderItem={({item})=>{
            return <View style={{height:100,width:100,backgroundColor:item}}/>
        }}
      />
    </View>
  )
}

export default AddColorScreen

const styles = StyleSheet.create({})