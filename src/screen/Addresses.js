import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import  Icon  from 'react-native-vector-icons/AntDesign'
import { deleteAddress } from '../redux/slice/AddressSlice'


const Addresses = () => {
   const {goBack, navigate} = useNavigation();
   const dispatch =useDispatch()
   const address = useSelector(state=>state.address)
   const isFocused = useIsFocused();

 useEffect(() => {
      
 }, [isFocused]);

 const defaultAddress = async item => {
   await AsyncStorage.setItem(
     'MY_ADDRESS',
     '' +
       item.city +
       ',' +
       item.state +
       ',' +
       item.pincode +
       ',type:' +
       item.type,
   );
   goBack();
 };
  return (
    <View style={styles.container} >
        <FlatList
        data={address.data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity

            onPress={()=>{defaultAddress(item)}}
              style={{
                width:'90%',
                backgroundColor: '#fff',
                borderWidth: 0.5,
                alignSelf: 'center',
                marginTop: 20,
                paddingLeft: 20,
                paddingBottom: 20,
                paddingTop: 20,
                borderRadius: 10,
             }}>
                <Text style={styles.txt} > State : {item.state}</Text>
                <Text style={styles.txt} > City : {item.city}</Text>
                <Text style={styles.txt} > Pincode : {item.pincode}</Text>
                <Text style={[styles.txt, styles.type]}>{item.isChecked}</Text>
                <TouchableOpacity onPress={()=>{ dispatch(deleteAddress(item.id)) }} style={styles.bottomView} >
                <Icon name='delete' size={20} color={"red"} />
            </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigate("addadress", {type:"edit", data:item})}} style={[styles.bottomView, styles.edit]} >
                <Icon name='edit' size={20} color={"red"} />
            </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
        <TouchableOpacity style={styles.add_address} onPress={()=>{navigate("addadress", {type:"new"})}} >
            <Text style={{color:"white", fontSize:hp(5)}} >+</Text>
        </TouchableOpacity>

           
    </View>
  )
}

export default Addresses

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    add_address:{
        width:wp(15),
        height:hp(8),
        borderRadius:40,
        position:"absolute",
       backgroundColor:"#119e7a",
       justifyContent:"center",
       alignItems:"center",
       bottom:20,
       right:7
    },

    txt:{
        color:"black"
    },
    type:{
        position:"absolute",
        right:10,
        top:10,
        backgroundColor:"#B1BFF5",
        padding:5,
        borderRadius:10,
        color:"white",
        fontWeight:"600"
    },
    bottomView: {
        position: 'absolute',
        right: 10,
        bottom: 25,
        flexDirection: 'row',
      },

      edit:{
        right:50
      }
})