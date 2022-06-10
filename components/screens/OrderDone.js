import { StyleSheet, Text, View,Image,ImageBackground,ScrollView } from 'react-native'
import React from 'react'

const OrderDone = ({navigation}) => {
  return (
    <ScrollView
        showsVerticalScrollIndicator={false}
    >
      <View style={{marginLeft:10,width:'100%'}}>
        <Image style={{height:350,width:'100%'}} source={require('../images/c.png')}/>
      </View>
      <Text style={{fontSize:40,fontWeight:'bold', color:'red',textAlign:'center'}}>You have successfully placed your order..</Text>
      <ImageBackground style={{height:275,width:'100%',}} source={require('../images/success.gif')}>
        <Text style={{textAlign:'center',marginTop:220,fontSize:32,color:'white',fontWeight:'bold'}}>Your Order is on the way.</Text>
    </ImageBackground>
    <Text style={{marginTop:5,fontSize:40,fontWeight:'bold', color:'red',textAlign:'center'}}>Thanks for using us...</Text>
    </ScrollView>
  )
}

export default OrderDone

const styles = StyleSheet.create({})