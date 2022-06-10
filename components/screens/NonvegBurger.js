import { StyleSheet, Text, View,StatusBar,TouchableOpacity,ScrollView,Image } from 'react-native'
import React from 'react'

const NonvegBurger = ({navigation}) => {
    var qtyNumber=1;
  return (
    <>
      <StatusBar backgroundColor="#F76545" barStyle="light-content" />
        <View style={{flexDirection:'row',margin:20}}>
            <TouchableOpacity 
            onPress={() => {navigation.goBack()}}
            >
                <Image source={require('../images/2.png')}/>
            </TouchableOpacity>
            <Image style={{marginLeft:80,height:40,width:30}} source={require('../images/3.png')}/>
            
            <Text style={{fontSize:20,color:'black',marginTop:10,fontWeight:'bold',marginLeft:20}}> 290 Calories</Text>
            </View>    
    <ScrollView>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Image style={styles.imagesHeader} source={require('../images/9.png')}/>
      </View>
      <Text style={{marginTop:30,fontSize:40,fontWeight:'bold',color:'red',textAlign:'center'}}>Non-Veg Burger</Text>
      <View style={{alignItems:'center',marginTop:20}}>
          <Text style={{fontSize:40,color:'red',fontWeight:'bold'}}>Qty.</Text>
          <View style={{backgroundColor:'red',width:140,borderRadius:20, flexDirection:'row',alignItems:'center',marginTop:20}}>
              <TouchableOpacity>
                  <Text style={{marginLeft:20,color:'white', fontSize:40}}>
                      -
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity
                    onPress={()=>{
                        qtyNumber++;
                        console.log(qtyNumber);
                    }}
              >
                  <Text style={{marginLeft:20,color:'white', fontSize:40}}>
                      {qtyNumber++}
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                    onPress={()=>{
                        qtyNumber++;
                        console.log(qtyNumber);
                    }}
              >
                  <Text style={{marginLeft:20,color:'white', fontSize:40}}>
                      +
                  </Text>
              </TouchableOpacity>
          </View>
      </View>
      <View style={{alignItems:'center',marginTop:20}}>
          <TouchableOpacity style={{backgroundColor:'red',width:250,borderRadius:30,}}
            onPress={()=>{
                navigation.navigate('CartOfNonVeg')
            }}
          >
                <Text style={{textAlign:'center',fontSize:40,color:'white',fontWeight:'bold',}}>Add to Cart</Text>
          </TouchableOpacity>
      </View>
      <Text style={{marginTop:20,fontSize:40, fontWeight:'bold',color:'red',textAlign:'center'}}>Ingredients Used</Text>
      <View style={{flexDirection:'row',justifyContent:'space-around',margin:20}}>
        <Image style={styles.ingredients} source={require('../images/12.png')}/>
        <Image style={styles.ingredients} source={require('../images/13.png')}/>
        <Image style={styles.ingredients} source={require('../images/bl.png')}/>
        <Image style={styles.ingredients} source={require('../images/7.png')}/>
        <Image style={styles.ingredients} source={require('../images/11.png')}/>
      </View>
      <Text style={{margin:20, fontSize:18,color:'black',textAlign:'justify'}}>
      The dish, by name, may have been created in London in 1982 by Gregory Sams, who called it the 'VegeBurger'. Sams and his brother Craig had run a natural food restaurant in Paddington since the 1960s; a Carrefour hypermarket in Southampton sold 2000 packets in three weeks after its launch.
      </Text>
    </ScrollView>
    </>
  )
}

export default NonvegBurger

const styles = StyleSheet.create({
    imagesHeader: {
        
        height: 300,
        width: 400,
    },
    ingredients:{
        height: 60,
        width: 60,
        
    }
})