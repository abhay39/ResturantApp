import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Products = () => {
    const navigation=useNavigation();
  return (
     
   <ScrollView>
       <View style={{flexDirection:'row',flex:1}}>
           <View style={{backgroundColor:'white', height:320,width:180,margin:20,borderRadius:30}}>
                <TouchableOpacity 
                onPress={() => {navigation.navigate('Details')}}
                >
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../images/3.png')} style={styles.img}/>
                        <Text style={styles.calText}>290 Calories</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../images/5.png')} style={styles.centerImage}/>
                        <Text style={styles.header}>Veg Burger</Text>
                        <Text style={styles.price}>Rs. 250</Text>
                    </View>
                </TouchableOpacity>
            </View>
           <View style={{backgroundColor:'white', height:320,width:180,marginTop:20,marginLeft:-5,borderRadius:30}}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('NonVeg')}}
                >
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../images/3.png')} style={styles.img}/>
                        <Text style={styles.calText}>290 Calories</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../images/9.png')} style={styles.centerImage}/>
                        <Text style={styles.header}>Chicken Burger</Text>
                        <Text style={styles.price}>Rs. 450</Text>
                    </View>
                </TouchableOpacity>
            </View>
       </View>
       <View style={{flexDirection:'row',}}>
           <View style={{backgroundColor:'white', height:320,width:180,margin:20,borderRadius:30}}>
                <TouchableOpacity 
                onPress={() => {navigation.navigate('Pista')}}
                >
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../images/3.png')} style={styles.img}/>
                        <Text style={styles.calText}>360 Calories</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../images/barfi.png')} style={styles.centerImage}/>
                        <Text style={styles.header}>Pista Barfi</Text>
                        <Text style={styles.price}>Rs. 450/ per kg</Text>
                    </View>
                </TouchableOpacity>
            </View>
           <View style={{backgroundColor:'white', height:320,width:180,marginTop:20,marginLeft:-5,borderRadius:30}}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('Gulab')}}
                >
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../images/3.png')} style={styles.img}/>
                        <Text style={styles.calText}>120 Calories</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../images/gulab.jpg')} style={styles.centerImage}/>
                        <Text style={styles.header}>Gulab Jamun</Text>
                        <Text style={styles.price}>Rs. 200/ per kg</Text>
                    </View>
                </TouchableOpacity>
            </View>
       </View>
       <View style={{flexDirection:'row',}}>
           <View style={{backgroundColor:'white', height:320,width:180,margin:20,borderRadius:30}}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('Jalebi')}}
                >
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../images/3.png')} style={styles.img}/>
                        <Text style={styles.calText}>290 Calories</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../images/jalebi.jpg')} style={styles.centerImage}/>
                        <Text style={styles.header}>Jalebi</Text>
                        <Text style={styles.price}>₹. 140/ per kg</Text>
                    </View>
                </TouchableOpacity>
            </View>
           <View style={{backgroundColor:'white', height:320,width:180,marginTop:20,marginLeft:-5,borderRadius:30}}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('Rasmalai')}}
                >
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../images/3.png')} style={styles.img}/>
                        <Text style={styles.calText}>200 Calories</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../images/ras.jpg')} style={styles.centerImage}/>
                        <Text style={styles.header}>Rasmalai</Text>
                        <Text style={styles.price}>₹. 220/per kg</Text>
                    </View>
                </TouchableOpacity>
            </View>
       </View>   
       <View style={{flexDirection:'row',}}>
           <View style={{backgroundColor:'white', height:320,width:180,margin:20,borderRadius:30}}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('FriedRice')}}
                >
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../images/3.png')} style={styles.img}/>
                        <Text style={styles.calText}>230 Calories</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../images/biryani.png')} style={styles.centerImage}/>
                        <Text style={styles.header}>Fried Rice</Text>
                        <Text style={styles.price}>₹. 120</Text>
                    </View>
                </TouchableOpacity>
            </View>
           <View style={{backgroundColor:'white', height:320,width:180,marginTop:20,marginLeft:-5,borderRadius:30}}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('Roasted')}}
                >
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../images/3.png')} style={styles.img}/>
                        <Text style={styles.calText}>260 Calories</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../images/fried.png')} style={styles.centerImage}/>
                        <Text style={styles.header}>Roasted Ch</Text>
                        <Text style={styles.price}>₹. 400</Text>
                    </View>
                </TouchableOpacity>
            </View>
       </View>   
      </ScrollView>

  );
};

export default Products;

const styles = StyleSheet.create({
    calText:{
        fontSize: 20,
        color: "black",
        marginTop: 25,
        fontWeight: 'bold',
        marginLeft: 5
    },
    img:{
        marginTop: 20,
        height: 40,
        width: 30,
        justifyContent: "center",
        alignContent: "center",
        marginLeft: 15,
    },
    centerImage:{
        alignItems: "center",
        height: '70%',
        width: '100%',
        borderRadius: 30,
    },
    header:{
        marginTop:-5,
        fontSize: 25,
        color: "black",
        fontWeight:'bold',
        marginLeft: 5

    },
    price:{
        fontSize: 20,
        color: "black",
    },
});
