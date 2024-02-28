import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'


const Wishlist = () => {

 const data = useSelector(item=>item.wishlist)

  const {navigate} = useNavigation()
 
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
    <View style={styles.heading}>
      <Text style={styles.headingTxt}>Wishlist </Text>
    </View>
      <FlatList data={data.data} renderItem={renderData} />
  </View>
  )
}

export default Wishlist
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    width: wp(100),
    height: hp(7),
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20
  },
  headingTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp(4),
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
 }

 
});
