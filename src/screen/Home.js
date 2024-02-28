import { LogBox, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import ImageCarousel from '../components/ImageCarousel'
import Product from '../components/Product'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { YellowBox } from 'react-native';
import DeviceInfo from 'react-native-device-info';


const Home = () => {

  const packageName = DeviceInfo.getBundleId();
  console.log("Package Name:", packageName);
  
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

  return (
   <SafeAreaView style={styles.container} >
    <Header/>
    <ScrollView>
    <ImageCarousel/>
    <Product/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container :{
    flex:1,
  
  }
})