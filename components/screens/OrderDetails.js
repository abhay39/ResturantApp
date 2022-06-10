import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'

const OrderDetails = ({navigation}) => {
    var number=1;
  return (
      <>
    <View>
      <View style={{flexDirection:'row',margin:20}}>
            <TouchableOpacity 
            onPress={() => {navigation.goBack()}}>
                <Image source={require('../images/2.png')}/>
            </TouchableOpacity>
            <Text style={{fontSize:30,color:'black',fontWeight:'bold',marginLeft:40}}>Order Details</Text>
        </View>
        <ScrollView>
        <Text style={{fontSize:40,marginLeft:20,color:'red',fontWeight:'bold'}}>My Cart</Text>
        <View style={{marginTop:20}}>
            <View style={{flexDirection:'row', }}>
                <View style={{marginLeft:20,backgroundColor:'gray', borderRadius:30,width:100,height:100}}>
                    <Image style={{margin:13,height:70,width:70}} source={require('../images/5.png')}/>
                </View>
                <Text style={{marginLeft:20,fontSize:30, fontWeight:'bold', color:'blue'}}>
                    Veg Burger
                </Text>
            </View>
            <View style={{marginLeft:145,marginTop:-60}}>
                <Text style={{fontSize:18, color:'black'}}>
                    Burger with cheese and tomato
                </Text>
                <Text style={{fontSize:20, color:'black',fontWeight:'900'}}>
                    ₹. 250/-
                </Text>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={{marginTop:10,backgroundColor:'red',width:30,alignItems:'center',borderRadius:10}}
                    onPress={()=>{
                        if(number>1){
                            number--;
                            console.log(number);
                        }
                        else{
                            number=1;
                            console.log(number);
                        }
                    }}
                    >
                        <Text style={{fontSize:20, color:'white',fontWeight:'900'}}>
                            -
                        </Text>
                    </TouchableOpacity>
                    <Text style={{fontSize:20,color:'black',marginTop:10,marginLeft:10,marginRight:10,fontWeight:'bold'}}>{number++}</Text>
                    <TouchableOpacity style={{marginTop:10,backgroundColor:'red',width:30,alignItems:'center',borderRadius:10}}
                        onPress={()=>{
                        if(number>1){
                            number++;
                            console.log(number);
                        }
                        else{
                            number=1;
                            console.log(number);
                        }
                        return number;
                    }}
                    >
                        <Text style={{fontSize:20, color:'white',fontWeight:'900'}}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <Text></Text>
        <Text style={{marginLeft:20, fontSize:30,fontWeight:'bold',color:'red'}}>
            Delivery Location
        </Text>
        <TouchableOpacity>
            <View style={{padding:5,marginLeft:20,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
                <Image style={{height:50,width:40}} source={require('../images/loc.png')}/>
                <Text style={{fontSize:22,color:'black',marginLeft:10}}>
                    D132, Kiran Pg Law Gate, Punjab
                </Text>
            </View>
            
        </TouchableOpacity>
        <Text></Text>
        <Text style={{marginLeft:20, fontSize:30,fontWeight:'bold',color:'red'}}>
            Payment Methods
        </Text>
        <View>
            <View style={{marginLeft:20,borderRadius:10}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity>
                        <Image style={styles.paymentIcons} source={require('../images/gpay.jpg')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.paymentIcons} source={require('../images/phonepe.jpg')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.paymentIcons} source={require('../images/paytm.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.paymentIcons} source={require('../images/fi.jpg')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <Text>

        </Text>
        <Text style={{marginLeft:20,fontSize:30, color:'red',fontWeight:'bold'}}>
            Order Information
        </Text>
        <View style={{marginTop:10,flexDirection:'row', justifyContent:'space-between',marginLeft:20}}>
            <Text style={{fontSize:25, color:'black',fontWeight:'bold'}}>Sub-Total</Text>
            <Text style={{marginRight:10,fontSize:25, color:'black',fontWeight:'bold'}}>₹. 250/-</Text>
        </View>
        <View style={{marginTop:10,flexDirection:'row', justifyContent:'space-between',marginLeft:20}}>
            <Text style={{fontSize:25, color:'black',fontWeight:'bold'}}>Shipping Cost</Text>
            <Text style={{marginRight:10,fontSize:25, color:'black',fontWeight:'bold'}}>₹. 50/-</Text>
        </View>
        <View style={{marginTop:10,flexDirection:'row', justifyContent:'space-between',marginLeft:20}}>
            <Text style={{fontSize:25, color:'black',fontWeight:'bold'}}>Grand Total</Text>
            <Text style={{marginRight:10,fontSize:25, color:'black',fontWeight:'bold'}}>₹. 300/-</Text>
        </View>
        <TouchableOpacity style={{alignItems:'center',justifyContent:'center',alignContent:'center',marginLeft:130,backgroundColor:'red',width:200,height:50,borderRadius:20}}
        onPress={() => {navigation.navigate('OrderDone')}}
        >
            <Text>
                <Text style={{textAlign:'center',fontSize:30, color:'white',fontWeight:'bold'}}>
                    Place Order
                </Text>
            </Text>
        </TouchableOpacity>
        </ScrollView>
    </View>
    </>
  )
}

export default OrderDetails

const styles = StyleSheet.create({
    paymentIcons:{
        height: 70,
        width: 70,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black'

    }
})