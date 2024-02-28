import { Image, Keyboard, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Home from './Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './Search';
import Wishlist from './Wishlist';
import User from './User';
import Notification from './Notification';
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Tab = createBottomTabNavigator();

const Main = () => {

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

     
     
  return (


        
    <Tab.Navigator  initialRouteName='home'  screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
       size = 25;
    
        if (route.name === 'home') {
          return <Icon  name='home-outline' size={25} color= { focused ? "red" : "black"} />
          
        } else if (route.name === 'search') {
          return <Icon  name='search-outline' size={25} color= { focused ? "red" : "black"} />
        }
    
    
        else if (route.name==="wishlist"){
          return <MaterialIcon  name='favorite-outline' size={25} color= { focused ? "red" : "black"} />
        }
    
        else if (route.name==="notification"){
          return <Icon  name='notifications-outline' size={25} color= { focused ? "red" : "black"} />
         }
        else if (route.name==="user"){
          return <AntDesign  name='user' size={25} color= { focused ? "red" : "black"} />
        }    
      },
      tabBarIconStyle : {
          fontWeight:"bold",
          fontSize:60
          
      },
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
    
      tabBarStyle:{
        paddingBottom:2,
        height:50,
        
      },
       
    })} >
     
    <Tab.Screen name="home" component={Home}  options={{headerShown:false, tabBarShowLabel: true }}    />
    <Tab.Screen name="search" component={Search}   options={{headerShown:false, tabBarShowLabel: true }}/>
    <Tab.Screen name="wishlist" component={Wishlist}  options={{headerShown:false, tabBarShowLabel: true }} />
    <Tab.Screen name="notification" component={Notification}   options={{headerShown:false, tabBarShowLabel: true }}/>
    <Tab.Screen name="user" component={User}  options={{headerShown:false, tabBarShowLabel: true }} />
  </Tab.Navigator>
  )

}

export default Main

const styles = StyleSheet.create({
  icon :{
    width:30,
    height:29
  }
})