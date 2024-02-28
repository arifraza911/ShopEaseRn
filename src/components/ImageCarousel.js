import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from "pinar";
import { data } from '../utils/constant';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';


const ImageCarousel = () => {
  return (
    <View style={styles.container}>
      
      <Carousel  autoplay loop
         showsControls={false} showsDots={false}  
       >
       
      
       {data.map((data) =>(
        <View key={data.img} >
             <Image   style={styles.image}   source={data.img}/>
        </View>
       ))}
  </Carousel>


      </View>
  )
}

export default ImageCarousel

const styles = StyleSheet.create({
   

    container:{
     width:widthPercentageToDP(100),
      height:heightPercentageToDP(25),
      display:"flex",
      alignItems:'center',
      justifyContent:"center",
    //  overflow:"hidden",
    //  marginTop:heightPercentageToDP(.5)
    },

    
    image : {
        width:widthPercentageToDP(100),
        height:heightPercentageToDP(25),
        // overflow:"hidden",
        objectFit:"fill"
    }
  });
  