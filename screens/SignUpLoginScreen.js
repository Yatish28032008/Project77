import react, { Component } from 'React'
import {View, StyleSheet, Text, TouchableOpacity, TextInput, Alert} from 'react-native'

export default class SignUpLoginScreen extends Component{
    constructor(){
        super();
        this.state={
            emailID:'',
            Password:'',
        }
    }

    userSignUp=(username, password) =>{
firebase.auth().createUserWithEmailAndPassword(username, password)
.then((response)=>{
  return Alert.alert("User Added Successfully")
})
.catch(function(error){
  var errorCode=error.code;
  var errorMessage = error.message;
  return Alert.alert(errorMessage)
});
    }

    userLogin = (emailId, password)=>{
      firebase.auth().signInWithEmailAndPassword(emailId, password)
      .then(()=>{
        this.props.navigation.navigate('DonateBooks')
      })
      .catch((error)=> {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
      })
    }
    
    render(){
        return(
<View>

<TextInput
 placeholder="abc@example.com"
 keyboardType ='email-address'
 onChangeText={(text)=>{
   this.setState({
     emailId: text
   })
 }}
/>

<TextInput
 placeholder ={"Password"}
 secureTextEntry = {true}
 onChangeText={(text)=>{
   this.setState({
     password: text
   })
 }}
/>

<TouchableOpacity style = {styles.loginButton}>
  <Text>Login</Text>
</TouchableOpacity>

<TouchableOpacity>
  <Text>Sign Up</Text>
</TouchableOpacity>

</View>
        )
    }
}

const styles = StyleSheet.create({
 loginButton : {
   ba
 }
})