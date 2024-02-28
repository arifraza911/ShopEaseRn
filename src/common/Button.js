import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
const Button = ({title , bg , color , onclick}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={[styles.btn, {backgroundColor:bg}]} onPress={()=> onclick()} >
        <Text style={{color:color, textAlign:"center", fontSize:hp(3), fontWeight:"600"}} >{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btn :{
        width:wp(85),
        height:hp(7),
        borderRadius:40,
           alignItems:"center",
           justifyContent:"center",

    }
})