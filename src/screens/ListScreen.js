import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'

const ListScreen = () => {
    const data=[
        {name:"Hassan",company:"XpertDigital",id:"1"},
        {name:"Ayesha",company:"Monk co",id:"2"},
        {name:"Mouzamma",company:"brand h20",id:"3"},
        {name:"Anas",company:"Tech Garage",id:"4"},
        {name:"Ahmed",company:"Dechains",id:"5"},
        {name:"Ijlal",company:"Xord",id:"6"},
        {name:"Hamza",company:"Sudofy",id:"7"},
        {name:"Fatika",company:"Tezeract",id:"8"},
    ]
  return (
    <View>
      <FlatList
       // horizontal
       // showsHorizontalScrollIndicator={true}
       
       showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={data}
        renderItem={({item})=>{
          return <Text style={{fontSize:50,marginVertical:10}}>Name: {item.name} Company: {item.company}</Text>
        }}
       
      />
    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({})