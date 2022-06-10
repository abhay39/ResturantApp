import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './components/screens/Login'
import Home from './components/screens/Home'
import Products from './components/screens/Products'
import Details from './components/screens/Details'
import OrderDetails from './components/screens/OrderDetails'
import OrderDone from './components/screens/OrderDone'
import NonvegBurger from './components/screens/NonvegBurger'
import Roasted from './components/screens/Roasted'
import FriedRice from './components/screens/FriedRice'
import Rasmalai from './components/screens/Rasmalai'
import Jalebi from './components/screens/Jalebi'
import GulabJamun from './components/screens/GulabJamun'
import PistaBarfi from './components/screens/PistaBarfi'
import NonVegCart from './components/cartPages/NonVegCart'

import GulabJamunCart from './components/cartPages/GulabJamunCart'
import PistaBarfiCart from './components/cartPages/PistaBarfiCart'
import RoastedChickenCart from './components/cartPages/RoastedChickenCart'




const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{
            headerShown: false,
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        <Stack.Screen name="OrderDone" component={OrderDone} />
        <Stack.Screen name="NonVeg" component={NonvegBurger} />
        <Stack.Screen name="Roasted" component={Roasted} />
        <Stack.Screen name="FriedRice" component={FriedRice} />
        <Stack.Screen name="Rasmalai" component={Rasmalai} />
        <Stack.Screen name="Jalebi" component={Jalebi} />
        <Stack.Screen name="Gulab" component={GulabJamun} />
        <Stack.Screen name="Pista" component={PistaBarfi} />
        <Stack.Screen name="CartOfNonVeg" component={NonVegCart} />
        <Stack.Screen name="PistaBarfiCart" component={PistaBarfiCart} />
        <Stack.Screen name="GulabJamunCart" component={GulabJamunCart} />
        <Stack.Screen name="RoastedCart" component={RoastedChickenCart} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})