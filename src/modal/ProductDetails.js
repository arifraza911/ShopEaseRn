import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'
import Button from '../common/Button';
import { useDispatch } from 'react-redux';
import { add_to_wishlist } from '../redux/slice/WishlistSlice';
import { addtoCart } from '../redux/slice/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogInQueryModal from './LogInQueryModal';

const ProductDetails = () => {


   const [modalVisible, setmodalVisible] =  useState(false)

    const {navigate} =useNavigation()
    const {params : data}= useRoute();
    const dispatch =   useDispatch()

        const logInStatus = async ()=>{
            let isuserloggedin = false;
        const status = await  AsyncStorage.getItem("Is_Logged_In");
        if(status==null)
        {
            isuserloggedin=false
        
        } else {
            isuserloggedin=true
        }

        return isuserloggedin
        }

  return (
      <ScrollView style={styles.container} >
            <View style={styles.card} >
                <Image source={{uri:data.item.image}} style={styles.image} resizeMode='center'  />
                <TouchableOpacity style={styles.wishlist} onPress={()=> {
                    // if(logInStatus()===true){
                    //     dispatch(add_to_wishlist(data.item))
                    // } else {
                    //    setmodalVisible(true)
                    // }

                    dispatch(add_to_wishlist(data.item))
                } } >
                    <Icon    name='heart-outline'  size={30} color={"black"} />
                </TouchableOpacity>
                <View style={styles.details} >
                    <Text style={styles.title} >{data.item.title}</Text>
                    <Text style={{marginTop:20, color:"black", fontWeight:"bold"}} > Price :  <Text style= {styles.price}>$ {data.item.price}</Text> </Text>
                    <View style={styles.rating} >
                        <Icon name="star" size={20} color="black" />
                        <Text style={{color:"red", fontWeight:"800", marginLeft:5, fontSize:hp(2)}} >{data.item.rating.rate}</Text>
                    </View>
                    <Text style={styles.description} >{data.item.description}</Text>
                    <Button  bg={"#10A37F"} title={"Buy"} key={data.item.id} color={"white"} onclick={()=>{
                            //  if(logInStatus()===false){
                            //     dispatch(addtoCart(data.item)),
                            //      navigate("cartItem")
                            //  } else {
                            //     setmodalVisible(true)
                            //  }

                            dispatch(addtoCart(data.item))
                            navigate('cartItem')
                    }} />
                </View>
            </View>

            <LogInQueryModal
             modalVisible={modalVisible}
             onClickLogIn={()=>{
                setmodalVisible(false)
                navigate("login")
             }}

             onClickSignUp={()=>{
                setmodalVisible(false)
                navigate("signup")
             }}
              onClose={()=>setmodalVisible(false)} />
      </ScrollView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
    },
    card :{
          display:"flex",
            padding:hp(1),
            paddingVertical:30
    },
    image:{
        width:wp(100),
        height:hp(45)
    },
    
    details :{
         paddingHorizontal:hp(1),
         paddingTop:20
    },
    title:{
        color:"black",
          fontSize:hp(2.2),
          fontWeight:"bold",
          marginTop:hp(4)
    },
    description :{
        fontSize:hp(2),
        color:"#1C1E21",
        fontWeight:"500",
        marginTop:hp(2),
        opacity:0.7,
        marginBottom:hp(2)
    },

    price:{
        marginTop:20,
        color:"green"
    },
    rating:{
        display:"flex",
        flexDirection:"row",
        marginTop:hp(2)
    },
    wishlist:{
        position:"absolute",
        right:hp(2),
        top:10,
       
    }
})