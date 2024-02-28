import { StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import firestore from '@react-native-firebase/firestore';

const SignUp = () => {

  const {navigate} =  useNavigation()
  const [name, setName] = useState('')
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("")
  const [Confirmpassword, setConfirmPassword] = useState("")


  const AddUser =()=>{
    firestore()
  .collection('Users')
  .add({
    name:name,
    age:age,
    email:email,
    mobile:mobile,
    password:password,
    Confirmpassword:Confirmpassword
  })
  .then(() => {
    navigate("login")
    console.log('User added!');
  });
  }

  

 
  return (
    <View style={styles.container} >

<Icon style={styles.btnclose} name='close-outline' size={35} color={"black"} onPress={()=>navigate('home')} />
        <Text style={styles.heading} >Sign Up</Text>

        <View style={styles.InputField} >
              <TextInput placeholder='enter your name' value={name} onChangeText={(txt)=>{setName(txt)}}  placeholderTextColor={"black"} style={styles.txtinpt} />
              <TextInput placeholder='enter your email' value={email}  onChangeText={(txt)=>{setEmail(txt)}}  keyboardType='email-address' placeholderTextColor={"black"} style={styles.txtinpt} />
              <TextInput placeholder='enter your age'   value={age}  onChangeText={(txt)=>{setAge(txt)}}  keyboardType='number-pad' placeholderTextColor={"black"} style={styles.txtinpt} />
              <TextInput placeholder='enter your mobile' value={mobile}  onChangeText={(txt)=>{setMobile(txt)}}  keyboardType='number-pad' placeholderTextColor={"black"} style={styles.txtinpt} />
              <TextInput placeholder='enter your password' value={password} onChangeText={(txt)=>{setPassword(txt)}}  keyboardType='visible-password' placeholderTextColor={"black"} style={styles.txtinpt} />
              <TextInput placeholder='enter your confirm password' value={Confirmpassword} onChangeText={(txt)=>{setConfirmPassword(txt)}} placeholderTextColor={"black"} style={styles.txtinpt} />
                <TouchableOpacity style={styles.btn} onPress={()=>{AddUser()}} >
                    <Text style={styles.btntxt} >Sign Up</Text>
                </TouchableOpacity>
                <Pressable onPress={()=>{navigate("login")}}  style={styles.logInbtn}  >
                    <Text style={styles.logIntxt} >Log In </Text>
                </Pressable>
        </View>
    </View>
  )
}

export default SignUp

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