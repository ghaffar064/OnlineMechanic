import { View, Text,StyleSheet, TextInput,TouchableOpacity } from 'react-native'
import React ,{ useState } from 'react'
import Button from '../components/Button.jsx';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ForgetPassword({navigation}) {
  const [email, setEmail] = useState('');
  const auth = getAuth();
  const handleForget = ()=>{

    sendPasswordResetEmail(auth, email)
  .then(() => {
    
    alert("Password reset email sent!");
    navigation.replace("Login");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }


  return (
    <View style = {styles.container}>
      <Text style = {{marginLeft:20,fontWeight:'bold',
                    
                    fontSize:18,marginTop:20}}>Enter Your email</Text>


        <Text style = {{marginLeft:20,
                    
                 fontSize:18,marginTop:10,color:'grey'}}>We need to verify you.
                  We will send you a one-time authorization code.</Text> 


      <TextInput style = {styles.txtin1} placeholder= 'Email'
                              value={email}
                              onChangeText={text=>setEmail(text)}
                           //   placeholderTextColor={COLORS.black}
                              keyboardType='email-address'
      
      
      />    
      <Button  onPress={handleForget}
                    title="Next"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />                     
    </View>
  )
}
const styles = StyleSheet.create(

    {
        container:{
                flex:1,
                marginTop:50
             

        },
        txtin1:{
            marginTop:10,
            borderColor:'white',
            borderRadius:100,
           paddingLeft:30,
            borderWidth:2,
            paddingTop:10,
            paddingBottom:10
          

            
        },

       btn1:{
            marginTop:20,
            borderColor:'white',
            borderRadius:15,
            marginLeft:20,
            marginRight:20,
            borderWidth:2,
            paddingTop:15,
            paddingBottom:15,
            textAlign:'center',
            backgroundColor:'red',
            color:'white',
            fontWeight:'bold'
          

            
        },
    }
)