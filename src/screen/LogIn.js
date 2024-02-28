import { StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import firestore from '@react-native-firebase/firestore';

const LogIn = () => {

  const {navigate} =  useNavigation()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    const userLogin=()=>{
        firestore()
        .collection('Users')
  // Filter results
       .where('email', '==', email)
      .get()
  .    then(querySnapshot => {
    /* ... */
    console.log(querySnapshot.docs_data)
  });
    }
  return (
    <View style={styles.container} >

          <Icon style={styles.btnclose} name='close-outline' size={35} color={"black"} onPress={()=>navigate('home')} />
        <Text style={styles.heading} >Log In</Text>

        <View style={styles.InputField} >
            
              <TextInput placeholder='enter your email'
               keyboardType='email-address' value={email} 
                onChangeText={(e)=>{setemail(e)}} 
                 placeholderTextColor={"black"} 
                 style={styles.txtinpt} />


              <TextInput placeholder='enter your password' 
               keyboardType='numeric' value={password}
                 onChangeText={(e)=>{setpassword(e)}} 
                 placeholderTextColor={"black"}
                  style={styles.txtinpt} />


                <TouchableOpacity style={styles.btn}  onPress={()=>{userLogin()}} >
                    <Text style={styles.btntxt} >Log In</Text>
                </TouchableOpacity>
                <Pressable onPress={()=>{navigate("signup")}}  style={styles.logInbtn} >
                    <Text style={styles.logIntxt} >Sign Up </Text>
                </Pressable>
        </View>
    </View>
  )
}

export default LogIn

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center"
    },
    heading:{
        color:"black",
        fontWeight:"800",
        fontSize:hp(4),
        textAlign:"center",
    },
    InputField:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
       
    },
    txtinpt:{
        borderWidth:1,
        borderColor:"#8A888A",
        width:wp(90),
        borderRadius:20,
        padding:10,
        marginTop:15,
        textAlign:"center",
        color:'#8A888A'
    },
    btn:{
        backgroundColor:"grey",
        width:wp(90),
        height:hp(6),
        marginTop:20,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center"
    },
    btntxt:{
        color:"white",
        fontWeight:"bold",
        fontSize:hp(2.5),
        textAlign:"center"
    },

    logInbtn:{
        marginTop:10,
    },
    logIntxt:{
        color:"black",
     fontSize:hp(2.3),
     fontWeight:"600",
     textDecorationLine:"underline"
    },

    btnclose:{
      position:"absolute",
      top:5,
      left:10
    }
})