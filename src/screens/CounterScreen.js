import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const CounterScreen = () => {
    const [count,setCount] = useState(0);

    const incDec = (type)=>{
        
        if(type=="increase"){
            setCount(count => count + 1)
        }
        else{
           if(count>0){
            setCount(count => count - 1)
           }
        }
    }

    const reset =()=>{
        setCount(count => count = 0)
    }
    return (
        <View>
            <View style={styles.textStyle}>
                <Text style={{ fontSize: 40, marginVertical: 20,fontWeight:'300' }}>Counter App</Text>
            </View>

            <View style={styles.btnsParent}>
                <View style={styles.btns}>
                    <TouchableOpacity style={styles.increaseBtn} activeOpacity={0.8} onPress={()=>(incDec("increase"))}>
                        <Text style={styles.btnTxt}>Increase</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.increaseBtn} activeOpacity={0.8} onPress={()=>(incDec("Decrease"))}>
                        <Text style={styles.btnTxt}>Decrease</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.increaseBtn} activeOpacity={0.8} onPress={reset}>
                        <Text style={styles.btnTxt}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.countFlx}>
                <View style={styles.countInnerFlx}>
                    <Text style={styles.currentCount}>Current Count:</Text>
                    <Text style={styles.count}>{count}</Text>
                </View>
            </View>

        </View>
    )
}

export default CounterScreen

const styles = StyleSheet.create({
    textStyle: {
        // borderWidth: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    btnsParent: {
        // borderWidth: 1,
        marginTop: 80,
        height: "40%",
        justifyContent: "center",
        alignItems: "center"
    },
    btns: {
        // borderWidth: 1,
        // marginTop: 10,
        width: "70%",
        height: "80%",
        justifyContent: "center",
        alignItems: 'center',

    },
    increaseBtn: {
        //borderWidth:1,
        width: "60%",
        height: "30%",
        marginVertical: "5%",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "teal"

    },
    btnTxt: {
        fontSize: 20,
        color: "#ffff",
        fontWeight: "300"
    },
    countFlx: {
        // borderWidth: 1,
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    currentCount: {
        fontSize: 27,
        marginVertical:5
    },
    count: {
        fontSize: 25
    },
    countInnerFlx: {
        // borderWidth: 1,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        // marginVertical:2
    }

})