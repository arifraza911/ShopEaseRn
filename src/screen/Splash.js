import { StyleSheet, Text, Image, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
const logo2 =require('../images/LOGO.png')
const Splash = () => {

    const {navigate}  = useNavigation()
    useEffect(() => {
          setTimeout(() => {
                 navigate("main")
          }, 1000);
    }, [])
    
  return (

    <View style={styles.container}>
     <Image source={logo2}
     
      style={styles.image}
     />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white"
    },

    image :{
        width:wp(50),
        height:hp(25),
        borderRadius:50
    }
})