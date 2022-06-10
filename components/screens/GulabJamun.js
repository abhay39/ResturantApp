import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView,StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Jalebi = () => {
  const navigation=useNavigation();
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
            
            <Text style={{fontSize:20,color:'black',marginTop:10,fontWeight:'bold',marginLeft:20}}> 120 Calories</Text>
            </View>    
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Image style={styles.imagesHeader} source={require('../images/gulab.jpg')}/>
      </View>
      <Text style={{marginTop:30,fontSize:40,fontWeight:'bold',color:'red',textAlign:'center'}}>Gulab Jamun</Text>
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
                navigation.navigate('GulabJamunCart')
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
        
      </View>
      <Text style={{margin:20, fontSize:18,color:'black',textAlign:'justify'}}>
      It is said to have been invented by Bhim Chandra Nag on the occasion of a visit by Lady Canning, the wife of Charles Canning, the Governor-General of India during 1856–62. Katangi, a town near Jabalpur is famous for "Jhurre Ka Rasgulla", which has been made there for the past 100 years.
      </Text>
      <Text style={{margin:20, fontSize:18,color:'black',textAlign:'justify'}}>
      ईरान में 13वीं सदी के आसपास मैदे से बनी गोलियों को घी में डिप फ्राय कर लेते थे। फिर इन्हें शहद या शक्कर की चाशनी में डुबोकर खाया जाता था। उस समय वहां उसे 'लुक्मत अल-क़ादी' कहा जाता था। यही लुक्मत अल-क़ादी भारत में आकर 'गुलाब जामुन' बन गया।
      </Text>
    </ScrollView>
    </>
  )
}


export default Jalebi;

const styles = StyleSheet.create({
imagesHeader: {
  borderRadius:30,
  height: 275,
  width: 400,
},
ingredients:{
  height: 60,
  width: 60,
}
})