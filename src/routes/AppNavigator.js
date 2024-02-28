import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screen/Splash';
import LogIn from '../screen/LogIn';
import Home from '../screen/Main';
import Main from '../screen/Main';
import ProductDetails from '../modal/ProductDetails';
import CartItem from '../modal/CartItem';
import SignUp from '../screen/SignUp';
import CheckOut from '../screen/CheckOut';
import Addresses from '../screen/Addresses';
import Add_Adress from '../screen/Add_Adress';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName='splash' >
        <Stack.Screen  name='splash' component={Splash} options={{headerShown:false}} />
        <Stack.Screen  name='main' component={Main} options={{headerShown:false, animation:"slide_from_bottom"}} />
        <Stack.Screen  name='productdetails' component={ProductDetails} options={{title:"Product Details", animation:"slide_from_right"}} />
        <Stack.Screen  name='cartItem' component={CartItem} options={{title:"Cart Item", animation:"ios"}} />
        <Stack.Screen  name='login' component={LogIn} options={{headerShown:false}} />
        <Stack.Screen  name='signup' component={SignUp}  options={{headerShown:false}} />
        <Stack.Screen  name='checkout' component={CheckOut}  options={{headerShown:true, animation:"slide_from_bottom"}} />
        <Stack.Screen  name='addresess' component={Addresses}  options={{headerShown:true, title:"Address"}} />
        <Stack.Screen  name='addadress' component={Add_Adress}  options={{headerShown:true, title:"Back" }} />
       </Stack.Navigator>
     </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})