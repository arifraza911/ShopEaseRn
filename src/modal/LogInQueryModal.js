import { StyleSheet, Text, View ,Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/Ionicons'
const LogInQueryModal = ({modalVisible , onClickLogIn, onClickSignUp, onClose}) => {
     

  return (
              <Modal visible={modalVisible}  transparent={true} >
                  <View style={styles.modalview} >
                     <View style={styles.mainview} >
                           <TouchableOpacity style={styles.close} onPress={()=>{onClose()}} >
                                 <Icon name='close-outline' size={35} color={"black"} />
                                     </TouchableOpacity>
                                     <Text style={styles.txt} >Have an Account ?</Text>
                                     <TouchableOpacity style={styles.logInbtn}  onPress={onClickLogIn} >
                                     <Text style={styles.btntxt} >Log In</Text>
                                     </TouchableOpacity>
                                      <Text style={styles.txt} >Don'n have an Account ?</Text>
                                      <TouchableOpacity style={[styles.logInbtn, {backgroundColor:"red"}]} onPress={onClickSignUp} >
                          <Text style={[styles.btntxt,]} >Sign Up</Text>
                       </TouchableOpacity>
                     </View>
                  </View>
              </Modal>
  )
}

export default LogInQueryModal

const styles = StyleSheet.create({
    modalview :{
        flex:1,
        backgroundColor:"rgba(0,0,0,0.3)",
        width:widthPercentageToDP(100),
        height:heightPercentageToDP(100),
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        top:0
    },
    mainview:{
        width:widthPercentageToDP(90),
        height:heightPercentageToDP(30),
        backgroundColor:"#fff",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
    logInbtn:{
        width:widthPercentageToDP(70),
        backgroundColor:"#00D26A",
        height:heightPercentageToDP(5),
        borderRadius:20,
        display:"flex",
        alignItems:'center',
        justifyContent:"center",
         marginBottom:20
    },

    btntxt:{
        color:"white",
        fontSize:heightPercentageToDP(2.5),
        fontWeight:"700"
    },
    txt:{
        color:"black",
        fontSize:heightPercentageToDP(3),
        fontWeight:"500",
        marginBottom:10
    },

    close:{
        position:"absolute",
        right:5,
        top:0,
        
    }
})