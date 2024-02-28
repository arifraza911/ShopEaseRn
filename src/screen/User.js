import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
const profile =require("../images/profile.png")
const User = () => {
  return (
    <View style={styles.container} >
         <View style={styles.heading} >
         <Text style={styles.headingtxt} > Profile </Text>
         </View>
       
       
         <View style={styles.profile} >
          <Image source={profile} style={styles.image} resizeMode='center' />
          <Text style={styles.user} >Aarif Arman</Text>
          <Text style={styles.useremail} >arifraza911@gmail.com</Text>

          <TouchableOpacity style={styles.editProfile} >
            <Text style={styles.editProfiletxt} >Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editProfile} >
            <Text style={styles.editProfiletxt} >Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editProfile} >
            <Text style={styles.editProfiletxt} >Address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editProfile} >
            <Text style={styles.editProfiletxt} >Payment method</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logout} >
            <Text style={styles.btntxt} >Log Out</Text>
          </TouchableOpacity>
         </View>
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },

  heading:{
    width:wp(100),
    backgroundColor:'#23527C',
    height:hp(7),
    justifyContent:"center",
    alignItems:"center"
  },
  headingtxt:{
    color:'white',fontWeight:"bold",
    fontSize:hp(3)
  },


  profile:{
     flex:1,
     justifyContent:"center",
     alignItems:"center" 
  },
  image :{
    width:wp(65),
    height:hp(30)
  },

  user:{
     color:"black",
     fontSize:hp(2.5),
     fontWeight:"500"
  },
   useremail :{
    color:"black",
    fontSize:hp(2),
    fontWeight:"500"  
   },

   editProfile:{
    width:wp(90),
    borderBottomColor:"black",
    borderBottomWidth:1,
    paddingLeft:20,
    marginTop:20
   },
   editProfiletxt:{
       color:"#8A888A",
       padding:5
   },

   logout:{
         backgroundColor:"grey",
         width:wp(40),
         height:hp(5),
         borderRadius:20,
         marginTop:20,
         alignItems:"center",
         justifyContent:"center"
   },

   btntxt:{
    color:"white",
    fontWeight:"bold",
    fontSize:hp(2)
   }
 


})