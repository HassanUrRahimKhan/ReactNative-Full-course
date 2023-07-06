import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageScreen = ({ imgSource, imgName }) => {
    const arr = [1, 2, 3]
    return (
        <View>
            <View style={styles.mainFlx}>
                {arr.map((item,index) => <View style={styles.innerBoxFlx}>
                    <View style={styles.inner2} key={index}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: imgSource,
                            }}
                        />
                        <Text>{imgName}</Text>
                    </View>
                </View>)}
            </View>
        </View>
    )
}

export default ImageScreen

const styles = StyleSheet.create({
    mainFlx: {
        width: "100%",
        height: "100%",
        borderWidth: 2,
        borderColor: "teal",
        backgroundColor: "#ffff"
    },
    innerBoxFlx: {
        // borderWidth: 1,
        borderColor: "black",
        width: "100%",
        height: "20%",
        marginVertical: 10,
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
    },
    tinyLogo: {
        width: 50,
        height: 50,
        // marginTop: 50
    },
    inner2:{
        // borderWidth:1,
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems:"center",
        width:"100%",
    }
})