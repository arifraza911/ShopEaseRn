import {StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image, Keyboard, KeyboardAvoidingView, Platform} from 'react-native';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,} from 'react-native-responsive-screen';
 import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const Search = () => {

 const {navigate} = useNavigation()
  const counter = useSelector(state =>state.product.data);
   const [search, setsearch] = useState("")
   const [olddata , setOlddata] = useState(counter)
   const [newData , setNewdata] = useState("")
   const [isKeyboardVisible, setKeyboardVisible] = useState(false);

   useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    // Clean up event listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  
     const filterData =(data)=>{
       setNewdata(counter.filter(item => item.title.toLowerCase().includes(search.toLowerCase())))
     }
  
   

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
        <Text style={styles.headingTxt}>Search </Text>
      </View>

      <View style={styles.search_container} >
            <View style={styles.search} >
            <Icon name='search' size={25} color={"black"} />
            <TextInput placeholder='search product'
             selectionColor="red"
             style={styles.textInput}
             placeholderTextColor="black" 
             value={search}
             keyboardAppearance='dark'
             onChangeText={(e)=> {setsearch(e), filterData(e)}}
              />
            </View>

            {search!=="" && ( <TouchableOpacity onPress={()=>{setsearch(""), filterData("")}} >
          <Icon name='close' size={25} color={"black"} />
        </TouchableOpacity>)}
       
      </View>

        <FlatList data={newData} renderItem={renderData} />
        
    
    </View>
  );
};

export default Search;

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

  search_container:{
    width:wp(90),
    height:hp(7),
    borderColor:"black",
    borderWidth:1,
    borderRadius:30,
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    marginLeft:20,
    flexDirection:"row",
    paddingHorizontal:20
  },

  search:{
    width:wp(50),
    flexDirection:'row',
    alignItems:"center"

  },
  textInput:{
    color:"black"
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
