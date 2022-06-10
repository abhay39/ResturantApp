import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import Products from './Products';
import Details from './Details';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation=useNavigation();
  return (
 
    <View style={{flex:1}}>
      <View style={{flexDirection:'row', justifyContent:'space-between',margin:20}}>
        <TouchableOpacity>
            <Image style={styles.imageHeader} source={require('../images/1.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={styles.glassIcon} source={require('../images/glass.png')}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.hederTitles}>
          Food that 
      </Text>
      <Text style={styles.hederTitles}>
        meets your needs
      </Text>
      <View style={{flexDirection:'row'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={{flexDirection:'row',marginLeft:20,marginTop:30,backgroundColor:'#f9dd7a',alignItems:'center',marginHorizontal:15,borderRadius:25,width:150,height:50,}}
        onPress={() => {navigation.navigate('Products')}}
        >
            <Image style={styles.imagecate} source={require('../images/5.png')}/>
            <Text style={styles.iconText}>Burgers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',marginLeft:20,marginTop:30,backgroundColor:'#f9dd7a',alignItems:'center',marginHorizontal:15,borderRadius:25,width:150,height:50,}}>
            <Image style={styles.imagecate} source={require('../images/10.png')}/>
            <Text style={styles.iconText}>Buffiro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',marginLeft:20,marginTop:30,backgroundColor:'#f9dd7a',alignItems:'center',marginHorizontal:15,borderRadius:25,width:150,height:50,}}>
            <Image style={styles.imagecate} source={require('../images/11.png')}/>
            <Text style={styles.iconText}>Chicken</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',marginLeft:30,marginTop:30,backgroundColor:'#f9dd7a',alignItems:'center',marginHorizontal:15,borderRadius:25,width:200,height:50,}}>
            <Image style={styles.imagecate} source={require('../images/9.png')}/>
            <Text style={styles.iconText}>Black Pizza</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between', margin:30}}>
            <Text style={styles.products}>New Products</Text>
            <Text style={styles.products}>...</Text>
        </View>
        <Text style={{marginTop:-50}}></Text>
        <Products />
    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({
    imageHeader: {
        height: 50,
        width: 50,
    },
    glassIcon:{
        height: 40,
        width: 40,
    },
    hederTitles:{
        marginLeft:20,
        fontSize:40,
        fontWeight:'bold',
        color:'black',
    },
    imagecate:{
        height: 40,
        width: 40,
        marginLeft:10,
    },
    iconText:{
        marginLeft:15,
        fontSize:20,
        fontWeight:'bold',
        color:'black',
    },
    products:{
        fontSize:30,
        fontWeight:'bold',
        color:'black',
    },
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
        height: 180,
        width: 150,
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
})