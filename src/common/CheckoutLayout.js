import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

const CheckoutLayout = ({total , item}) => {

   const {navigate}= useNavigation()
  return (
    <View style={styles.container} >
       <View style={styles.item} >
        <Text style={{color:"black", fontSize:15, fontWeight:"600"}} > Total ({item})</Text>
        <Text style={{color:"red", fontSize:15, fontWeight:"600"}}>Price : $ {total}</Text>
       </View>

       <Pressable style={styles.btn} onPress={()=>{{navigate('checkout')}}} >
        <Text style={{color:"white", fontWeight:"bold", fontSize:15}} >Check Out</Text>
       </Pressable>
    </View>
  )
}

export default CheckoutLayout

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        bottom:0,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        width:widthPercentageToDP(100),
        backgroundColor:"white",
        height:heightPercentageToDP(10),
        textShadowOffset:{
            height:10,
            width:100
        },
        elevation:10
    },

    item:{
        display:'flex',
        alignItems:"center",
        justifyContent:"center"
    },

    btn :{
        width:widthPercentageToDP(35),
        height:heightPercentageToDP(7),
        backgroundColor:"#23527C",
        borderRadius:40,
        alignItems:"center",
        justifyContent:'center', marginLeft:20
    }
})