import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
const Header = () => {

  const obj = useSelector(data=>data.cart.data)
  const {navigate} = useNavigation()

  return (
    <View style={styles.container}>
        
      <Text style={styles.header}>Shop Ease</Text>
      

      <Pressable onPress={()=>{navigate("cartItem")}}>
      <Icon name='shopping-cart' size={25} color="white" />
      <View style={styles.item} ><Text style={styles.itemNumber} >{obj.length}</Text></View>
      </Pressable>
     
       
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container :{
        width:wp(100),
        height:hp(8),
        backgroundColor:"#111101",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        paddingHorizontal:hp(2)
    },
    header :{
        fontSize:hp(3),
        fontWeight:"bold",
        textAlign:"center",
        fontFamily:"roboto san-serif",
        color:"white"
    },

    item:{
        position:"absolute",
        width:wp(4.5),
        height:hp(2.5),
        borderRadius:30,
        backgroundColor:"white",
        right:hp(-1),
        top:-10,
        alignItems:"center",
        justifyContent:"center",
        display:"flex"
    },
    itemNumber:{
        color:"black",
     
    }
})