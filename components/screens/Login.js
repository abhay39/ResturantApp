import { StyleSheet, Text, View, TextInput,TouchableOpacity,Image,KeyboardAvoidingView,StatusBar } from 'react-native'
import React from 'react'



const Login = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#F76545', height:'100%'}}>
        <StatusBar backgroundColor="#F76545" barStyle="light-content" />
      <Text style={{fontSize:60, fontWeight:'bold', color:'white', justifyContent:'center', textAlign:'center', marginTop:100,}}>Login</Text>
      <KeyboardAvoidingView>
          <TextInput style={styles.email} placeholder='Enter your Email...' email/>
          <TextInput style={styles.email} placeholder='Enter your Password...' secureTextEntry={true}/>
      </KeyboardAvoidingView>
        <TouchableOpacity style={styles.loginButton} onPress={() => {navigation.navigate('Home')}}>

            <Text style={{fontSize:30, fontWeight:'bold', color:'white', justifyContent:'center', textAlign:'center'}}>Login</Text>
        </TouchableOpacity>
        <Text style={{fontSize:30, fontWeight:'bold', color:'white', justifyContent:'center', textAlign:'center'}}>-------------OR--------------</Text>
        <View style={{marginTop:20,flexDirection:'row', justifyContent:'space-between'}}>
            <TouchableOpacity style={styles.options}>
                <Image source={require('../images/Facebook-logo.png')} style={{height:55, width:55}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
                <Image source={require('../images/google.jpg')} style={{height:55, width:55}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
                <Image source={require('../images/git.png')} style={{height:55, width:55}}/>
            </TouchableOpacity>
            
        </View>
        

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    email: {
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 5,
        backgroundColor: 'white',
        fontSize:20,
        borderRadius:30,
        paddingLeft:30,
    },
    loginButton: {
        fontSize:40,
        backgroundColor: '#00bfff',
        height: 60,
        marginLeft:100,
        width: 200,
        borderRadius:30,
        margin: 10,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
    },
    options: {
        
        marginLeft: 40,
        marginRight: 40,
    }
})