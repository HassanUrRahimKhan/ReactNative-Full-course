import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
    <TouchableOpacity onPress={()=>navigation.navigate("ApiList")}>
      <Text style={{color:"red"}}>Go to Api list Screen</Text>
    </TouchableOpacity>
     <TouchableOpacity>
            <Text style={{ fontSize: 30, color: "red" }} onPress={() => navigation.navigate("ImgScreen")}>Go to Image screen</Text>
    </TouchableOpacity>
    <TouchableOpacity>
            <Text style={{ fontSize: 30, color: "red" }} onPress={() => navigation.navigate("Addcolor")}>Go to Add color screen</Text>
    </TouchableOpacity>

    <TouchableOpacity>
            <Text style={{ fontSize: 30, color: "red" }} onPress={() => navigation.navigate("SquareScreen")}>Go to Square screen</Text>
    </TouchableOpacity>

  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
