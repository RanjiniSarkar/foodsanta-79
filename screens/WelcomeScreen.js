import React, {Component} from 'react';
 import{View,Text,TextInput,StyleSheet,TouchableOpacity} from'react-native';
 import db from '../config';
 import firebase from 'firebase';
 import FoodAnimation from '../components/Food'
 

 export default class WelcomeScreen extends React.Component{

    constructor(){
        super()
        this.state =({
            emailId:'',
            password:''
        })
    }
    userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
          return Alert.alert("Successfully Login")
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }
    
      userSignUp = (emailId, password) =>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then((response)=>{
          return Alert.alert("User Added Successfully")
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        });
      }
     render(){
         return(
             <View style = {styles.conatiner}> 
             <View style={styles.profileContainer}> 
                 <FoodAnimation/>
                 <Text style= {styles.title}>FOOD SANTA</Text>
                 </View>
                 <View style={styles.buttonContainer}>
                 <TextInput
                 style={styles.loginBox}
                 placeholder="abc@example.com"
                 keyboardType='email-address'
                 onChangeText={(text)=>{
                     this.setState({
                         emailId:text
                     })
                 }}
                 />
                 <TextInput
                 style={styles.loginBox}
                 placeholder='password'
                 secureTextEntry
                 onChangeText={(text)=>{
                     this.setState({
                         password:text
                     })
                 }}
                 
                 
                 />
                 <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>SIGNUP</Text>
          </TouchableOpacity>

             </View>
                 
             </View>
         )
     }
 }
const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:'#0099ff'

    },
    profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
      title :{
        fontSize:65,
        fontWeight:'300',
        paddingBottom:30,
        
      },
      loginBox:{
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor : '#6866ff',
        fontSize: 20,
        margin:10,
        paddingLeft:10,
        borderRadius:30

      },
      button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff00c3",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
      },
      buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20
      },
      buttonContainer:{
        flex:1,
        alignItems:'center'
      }

})