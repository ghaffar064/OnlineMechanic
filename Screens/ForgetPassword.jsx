import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button.jsx';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default function ForgetPassword({ navigation }) {
  const [email, setEmail] = useState('');
  const auth = getAuth();
  const handleForget = () => {

    sendPasswordResetEmail(auth, email)
      .then(() => {

        alert("Password reset email sent!");
        navigation.replace("Login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(email )
        {
          alert("email does not exist")
        }
         else if(email==='')
          {
            alert("enter email please!")
          }
      });
  }


  return (
    <View style={styles.container}>
      <Text style={{
        marginLeft: responsiveWidth(5), fontWeight: '500',

        fontSize: responsiveFontSize(2), marginTop: responsiveHeight(2)
      }}>Enter Your email</Text>


      <Text style={{
        marginLeft: responsiveWidth(5),

        fontSize: responsiveFontSize(1.6), marginTop: responsiveHeight(2), color: 'grey'
      }}>
        We will send you a password reset link.</Text>


      <TextInput style={styles.txtin1} placeholder='Email'
        value={email}
        onChangeText={text => setEmail(text)}
        //   placeholderTextColor={COLORS.black}
        keyboardType='email-address'


      />
      <Button onPress={handleForget}
        title="Next"
        filled
        style={{
          marginTop: responsiveHeight(3),
          marginBottom: responsiveHeight(10),
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create(

  {
    container: {
      flex: 1,
      marginTop: responsiveHeight(6)


    },
    txtin1: {
      marginTop: responsiveHeight(2),
      borderColor: 'grey',
      borderRadius: responsiveWidth(100),
      paddingLeft: responsiveWidth(8),
      borderWidth: responsiveWidth(.25),
      paddingTop: responsiveHeight(1.5),
      paddingBottom: responsiveHeight(2),
      fontSize:responsiveFontSize(1.5)


    },


    
  }
)