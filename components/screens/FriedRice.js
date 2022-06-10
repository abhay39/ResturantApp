import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView,StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const FriedRice = () => {
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
              
              <Text style={{fontSize:20,color:'black',marginTop:10,fontWeight:'bold',marginLeft:20}}> 230 Calories</Text>
              </View>    
      <ScrollView>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image style={styles.imagesHeader} source={require('../images/biryani.png')}/>
        </View>
        <Text style={{marginTop:30,fontSize:40,fontWeight:'bold',color:'red',textAlign:'center'}}>Fried Rice & Chicken</Text>
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
                  navigation.navigate('OrderDetails')
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
        The origin of fried chicken in the southern states of America has been traced to precedents in Scottish and West African cuisine. Scottish fried chicken was cooked in fat (though unseasoned) while West African fried chicken was seasoned (but battered and cooked in palm oil).
        </Text>
      </ScrollView>
      </>
    )
  }


export default FriedRice

const styles = StyleSheet.create({
  imagesHeader: {
    borderRadius:30,
    height: 300,
    width: 400,
},
ingredients:{
    height: 60,
    width: 60,
}
})