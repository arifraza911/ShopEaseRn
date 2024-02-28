import { FlatList, Image, StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ProductDetails from '../modal/ProductDetails';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addProducts} from '../redux/slice/ProductsSlice';

const Product = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const {navigate} = useNavigation()
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
          .then(response => {
            // Handle successful response
            
            setData(response.data);
               response.data.map(item=>{
                item.qty = 1
               });
            dispatch(addProducts(response.data))
          })
          .catch(error => {
            // Handle error
            setError(error);
          });
      }, []); // Empty depen

     console.log(error)
   


   
    const renderData =({item})=>{
        return (
            <TouchableOpacity key={item.id} style={styles.productItem} onPress={()=> navigate("productdetails", {item}) }  >
                 <View style={styles.card} >
                    <Image source={{uri:item.image}} style={styles.image} resizeMode='contain' />
                   <View style={styles.detailcontainer} >
                      <Text style={styles.name} > {item.title.length>25 ? item.title.substring(0,25) + "..." : item.title} </Text>
                      <Text style={styles.description} > {item.description.length>30 ? item.description.substring(0,30) + "..." : item.description} </Text>
                      <Text style={styles.price} >  { ` $ ${item.price } `}</Text>
                   </View>
                 </View>
            </TouchableOpacity>
        )
    }
  return (
    <View style={styles.container}>
      <Text style={styles.header} >Product</Text>

      <View style={{paddingTop:hp(4)}} >

      <FlatList scrollEnabled data={data}
       renderItem={renderData}  
       contentContainerStyle={styles.contentContainer} 
        
       />
      </View>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },

    header :{
        fontSize:hp(3),
        color:"black",
        fontWeight:"700"
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
     }
  

})