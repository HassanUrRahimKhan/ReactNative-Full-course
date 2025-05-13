import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const FetchApiList = ({navigation}) => {

  const [resource, setResource] = useState([]);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //     fetch('https://jsonplaceholder.typicode.com/todos')
  //       .then((response) => response.json())
  //       .then((json) => setData(json))
  //       .catch((error) => console.error(error))

  //   }, []);


  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", { signal });
        const data = await response.json();

        setResource(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();

    return () => controller.abort();
  }, []);


  return (
    <View>
      <FlatList
        data={resource}
        renderItem={({ item }) => <Text style={{ marginVertical: 10 }}>{item.title}</Text>}
        keyExtractor={resource.id}
        showsHorizontalScrollIndicator={false}

      />
     
    </View>
  )
}

export default FetchApiList

const styles = StyleSheet.create({})