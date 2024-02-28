import { StyleSheet, Text, View ,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import { addAddress, updateAddress } from '../redux/slice/AddressSlice'
import { useNavigation, useRoute } from '@react-navigation/native'
import uuid from 'react-native-uuid';


const Add_Adress = () => {
 const route = useRoute()
  const [isChecked, setIschecked] = useState(1)
  const [pincode, setpincode] = useState(route.params.type=="edit" ? route.params.data.pincode : "")
  const [state, setstate] = useState(route.params.type=="edit" ? route.params.data.state : "")
  const [city, setcity] = useState(route.params.type=="edit" ? route.params.data.city : "")
    const dispatch = useDispatch()
  const {navigate} = useNavigation()
    // console.log(route.params.data.pincode)
    console.log(route.params.type)
  return (
    <View style={styles.container} >
  <View style={styles.InputField} >
     
        <TextInput placeholder='Enter State'
           placeholderTextColor={"black"} 
           style={styles.txtinpt}
           onChangeText={(e)=>{setstate(e)}}
           value={state}
            />

        <TextInput placeholder='Enter City' 
           onChangeText={(e)=>{setcity(e)}}
           value={city}
           placeholderTextColor={"black"}
            style={styles.txtinpt} /> 
            
             
        <TextInput placeholder='Enter Pincode' 
           placeholderTextColor={"black"}
           value={pincode}
           onChangeText={(e)=>{setpincode(e)}}
            style={styles.txtinpt} />  

            <View style={styles.checkbtn} >
              <TouchableOpacity style={styles.btn} onPress={()=>{setIschecked(1)}} >
                <Icon name={isChecked===1 ? "radio-button-on" : "radio-button-off-outline"} size={25} color={isChecked===1 ? "orange" : "black"} />
                <Text style={styles.btntxt} >Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, {marginLeft:20}]} onPress={()=>{setIschecked(2)}} >
                <Icon name={isChecked===2 ? "radio-button-on" : "radio-button-off-outline"} size={25} color={isChecked===2 ? "orange" : "black"} />
                <Text style={styles.btntxt} >Office</Text>
              </TouchableOpacity>
            </View>
       </View>

            <TouchableOpacity style={styles.savebtn} onPress={()=>{

                  if(route.params.type=="edit")
                  {
                      dispatch(updateAddress({
                        city:city,
                        pincode:pincode,
                        state:state,
                        isChecked:isChecked=="1" ? "Home" :"Office",
                       id:route.params.data.id
                        
                      }))
                  } else{
                    dispatch(addAddress({
                      city:city, 
                      pincode:pincode,
                      state:state,
                      isChecked:isChecked=="1" ? "Home" :"Office",
                       id:uuid.v4()
                    }))
                  }
                

                  navigate("addresess")
            }}   >
                <Text style={styles.savebtntxt} >Save Address</Text>
              </TouchableOpacity>
        </View>
  )
}

export default Add_Adress

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
      borderColor:"#595959",
      width:wp(90),
      borderRadius:20,
      padding:10,
      marginTop:15,
      // textAlign:"center",
      color:'#8A888A'
  },

  checkbtn:{
    width:wp(100),
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    
  },

  btn:{
    width:wp(40),
    height:hp(7),
    borderColor:"#595959",
     borderWidth:1,
    flexDirection:"row",
    alignItems:"center",
    borderRadius:20,
    justifyContent:"space-evenly"
  },

  btntxt:{
    color:"#595959",
    fontSize:hp(2.5),
    fontWeight:"600"
  },

  savebtn:{
    width:wp(100)-40,
    backgroundColor:'#FB542B',
    height:hp(7),
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
    marginTop:20
  },

  savebtntxt:{
    color:"white",
    fontSize:hp(3)
  }
})