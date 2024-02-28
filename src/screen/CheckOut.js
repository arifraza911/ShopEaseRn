import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View , ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { addtoCart, reduceItemFromCart, removeitemfromCart } from '../redux/slice/CartSlice'
import Icon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RazorpayCheckout from 'react-native-razorpay';

// perBrAp3TVVQQTEWK
const CheckOut = () => {

    const data = useSelector(data=>data.cart.data)
    const [item, setItem] = useState(data)
    const dispatch =    useDispatch()
    const {navigate} = useNavigation()
    const isfocused = useIsFocused()
     const [selected, setSelected] = useState(0)
     const [selectedAddress, setSelectedAddress] = useState(
        'Please Select Address',
      );
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


      useEffect(() => {
         getAddres();
      }, [isfocused])

      const getAddres = async ()=>{
       setSelectedAddress( await  AsyncStorage.getItem('MY_ADDRESS'))
      }
      
      let options = {
         description: 'Credits towards consultation',
         image: 'https://i.imgur.com/3g7nmJC.png',
         currency: 'INR',
         key:"rzp_test_LEejqwu3lQNDuB", 
         amount: '5000',
         name: 'foo',
         prefill: {
           email: 'void@razorpay.com',
           contact: '9835761124',
           name: 'Razorpay Software'
         },
         theme: {color: '#F37254'}}
  return (
    <ScrollView >
     
        <FlatList data={data} renderItem={renderData} />
        <View style={styles.total} > 
             <Text style={styles.totalPrice} >Total</Text>
            <Text style={styles.totalPrice} > $ {totalPrice()}</Text>
          </View>
        <View  style={{marginBottom:10}} >
        <Text style={styles.payment_method} >Select payment method</Text>
            <View >
                <TouchableOpacity style={styles.radiobtn} onPress={()=>{setSelected(0)}} >
                     <Icon name={selected===0? "radio-button-on" : "radio-button-off-outline"} size={25} color={selected===0 ? "orange" : "black"} />
                    <Text style={styles.cards} >Credit Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.radiobtn} onPress={()=>{setSelected(1)}}  >
                     <Icon name={selected===1? "radio-button-on" : "radio-button-off-outline"} size={25} color={selected===1 ? "orange" : "black"} />
                    <Text style={styles.cards} >Debit Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.radiobtn} onPress={()=>{setSelected(2)}}  >
                     <Icon name={selected===2? "radio-button-on" : "radio-button-off-outline"} size={25} color={selected===2 ? "orange" : "black"}/>
                    <Text style={styles.cards} >UPI Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.radiobtn} onPress={()=>{setSelected(3)}}  >
                     <Icon name={selected===3? "radio-button-on" : "radio-button-off-outline"} size={25} color={selected===3 ? "orange" : "black"} />
                    <Text style={styles.cards} >Cash on delivery</Text>
                </TouchableOpacity>
            </View>

         <View style={styles.addressView} >
             <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}} >
             <Text style={{color:"black", fontSize:hp(2.5)}} >Address</Text>
             <TouchableOpacity  onPress={()=>{navigate("addresess")}} >
                <Text style={{color:"black", textDecorationLine:"underline"}} >Edit Address</Text>
             </TouchableOpacity>
             </View>
            <Text style={{color:"black", fontSize:hp(2), marginTop:10}} >{selectedAddress}</Text>
         </View>
           
           <TouchableOpacity style={styles.buy} onPress={()=>{
            RazorpayCheckout.open(options).then((data) => {
               // handle success
               alert(`Success: ${data.razorpay_payment_id}`);
             }).catch((error) => {
               // handle failure
               alert(`Error: ${error.code} | ${error.description}`);
             });
           }}>
            <Text style={{color:"white", fontWeight:"bold"}} >Pay & Order</Text>
           </TouchableOpacity>


        </View>
    </ScrollView>
  )
}

export default CheckOut

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

     header:{
        width:wp(100),
        height:hp(7),
        backgroundColor:"grey",
        alignItems:"center",justifyContent:'center'
     },
     btn :{
        padding:5,
        width:30,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:.5,
        borderRadius:10,
        marginLeft:10
   },
   checkout_header:{
    fontSize:hp(4),
    color:"white"
   },

   total:{
    width:wp(100),
    borderBottomColor:"grey",
    height:hp(7),
    backgroundColor:"white",
    borderBottomWidth:1,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    paddingHorizontal:hp(3),
   },

   totalPrice:{
    color:"black",
    fontSize:hp(2),
    fontWeight:"700"
   },
   payment_method:{
    color:"black",
    paddingTop:hp(3),
    paddingLeft:hp(2),
     fontSize:hp(2.5),
     paddingBottom:10,
     display:"flex",
   
   },
   
   cards:{
    color:"black",
    fontSize:hp(2.2),
    marginLeft:10,
    fontWeight:"500"
   },
   radiobtn:{
    paddingLeft:10,
    flexDirection:"row",
    marginTop:10
   },
   addressView: {
    height:hp(25),
    width: '100%',
    flexDirection: 'column',
    // paddingBottom:20,
    paddingLeft: 15,
    paddingRight: 20,
   marginTop:20
  },

  buy :{
    width:wp(50),
    height:hp(7),
    backgroundColor:"#23527C",
    alignItems:"center",
    justifyContent:"center",
    marginLeft:wp(23),
    borderRadius:30,
  },


})