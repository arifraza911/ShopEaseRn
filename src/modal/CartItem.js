import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import { addtoCart, reduceItemFromCart, removeitemfromCart } from '../redux/slice/CartSlice'
import CheckoutLayout from '../common/CheckoutLayout'


const CartItem = () => {

    const data = useSelector(data=>data.cart.data)
    const [item, setItem] = useState(data)

    const dispatch =    useDispatch()
  const {navigate} = useNavigation()

 const renderData =({item})=>{
  return (
      <TouchableOpacity key={item.id} style={styles.productItem} onPress={()=> navigate("productdetails", {item}) }  >
           <View style={styles.card} >
              <Image source={{uri:item.image}} style={styles.image} resizeMode='contain' />
             <View style={styles.detailcontainer} >
                <Text style={styles.name} > {item.title.length>25 ? item.title.substring(0,25) + "..." : item.title} </Text>
                <Text style={styles.description} > {item.description.length>30 ? item.description.substring(0,30) + "..." : item.description} </Text>
                <View style={{justifyContent:"center", alignItems:"center", flexDirection:"row", marginTop:10}} >
                <Text style={styles.price} >  { ` $ ${item.price } `}</Text>
                <TouchableOpacity style={styles.btn} >
                    <Text style={{color:"black", fontSize:20, fontWeight:"500"}} onPress={()=> {
                        if(item.qty>1){
                           dispatch(reduceItemFromCart(item))
                        } else{
                           dispatch(removeitemfromCart(item.id))
                        }
                    } } >-</Text>
                </TouchableOpacity>
                   <Text style={{color:"black"}} > {item.qty}</Text>
                <TouchableOpacity style={styles.btn} onPress={()=> dispatch(addtoCart(item))} >
                    <Text style={{color:"black", fontSize:20, fontWeight:"500"}} >+</Text>
                </TouchableOpacity>
                </View>
             </View>
           </View>
      </TouchableOpacity>
  )
}

    const totalPrice =()=>{
      let price = 0;
         item.map(item=>{
            price=price+item.qty*item.price;
         })

         return price.toFixed(0) ;
    }
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderData} />
      {item.length<1 &&   <Nodata />}
       {item.length>0 &&  <CheckoutLayout item={item.length} total={totalPrice()}  />}
  </View>
  )
}


const Nodata=()=>{
   return (
      <View style={styles.nodata} >
         <Text style={styles.nodatatxt}>No Item Found </Text>
      </View>
   )
}
export default CartItem
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  productItem :{
    width:wp(100),
    marginBottom:10,
    
},

 image :{
    height:hp(15),
    width:wp(25)
 },

 card:{
    display:"flex",
    flexDirection:"row",
    backgroundColor:"white",
    paddingVertical:hp(3),
    borderRadius:10
 },

 detailcontainer:{
    display:"flex",
    alignItems:"flex-start",
   padding:hp(2),
   borderRadius:20,
   overflow:'hidden'
 },

 name :{
    fontSize:hp(2.4),
    color:"black",
    fontWeight:"500"
 },
 description :{
    fontSize:hp(1.7),
    color:"black",
    fontWeight:"400",
    paddingTop:hp(1)

 },

 price:{
    fontSize:hp(1.8),
    color:"red",
    fontWeight:"600",
    paddingTop:hp(1)
 },

 blank:{
  flex:1,
  color:"black",
  justifyContent:"center",
  alignItems:"center",
  fontSize:hp(8)
 },

 btn :{
      padding:5,
      width:30,
      justifyContent:"center",
      alignItems:"center",
      borderWidth:.5,
      borderRadius:10,
      marginLeft:10
 }
,

nodata:{
   width:wp(100),
   height:hp(100),
   justifyContent:"center",
   alignItems:"center"
},

nodatatxt:{
   color:"black",
   fontSize:hp(5),
   fontWeight:"bold"
}
 
});
