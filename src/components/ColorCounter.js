import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ColorCounter = () => {
    return (
        <View styles={styles.container}>
            <View style={{borderWidth: 1, borderColor: "black", margin: 10}}>
                <Text style={{ fontSize: 20, borderWidth: 1, borderColor: "teal" }}>Color Counter</Text>
                <View style={styles.upperContainer}>
                
                    <View style={styles.colorContainer}>

                    </View> 
                </View>
            </View>

        </View>
    )
}

export default ColorCounter

const styles = StyleSheet.create({
    container: {


    },
    colorContainer: {
        
        height: 70,
        width: 100,
        backgroundColor: "red",
        borderWidth: 1,
        borderColor: "black",
        
    },
    upperContainer:{
        flexdirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
})