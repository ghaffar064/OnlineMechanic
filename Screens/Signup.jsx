import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import * as React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button.jsx';
import {  signInWithPhoneNumber,RecaptchaVerifier } from "firebase/auth";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
   


import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-auth-session/providers/facebook';



export default function Signup({ navigation }) {



    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const [userData,setUserData] = React.useState(null);
    const [token,setToken] = React.useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const appVerifier = window.recaptchaVerifier;
    


    const handleSignUp = () => {
       
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
        if (!isChecked) {
            alert("please agree with terms and conditions")
        }
        else {




            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            // Email verification sent!
                            // ...
                        });

                    //    navigation.replace("Login")

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage)

                    // ..
                });


        }
     
      // ...
    }).catch((error) => {
        console.log("message not sent "+phoneNumber)
    });

    window.confirmationResult = confirmationResult;






      
    };


  
    
  

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '419811276218-f461o0na6t09uvrvqeob8iev4st55vjf.apps.googleusercontent.com',
        clientId: '419811276218-ufs9nhgi756qvuhoupn43vp18mk70p9l.apps.googleusercontent.com',
    });

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            console.log('Access Token:', authentication.accessToken);
            setToken(authentication?.accessToken)
            
        }
    }, [response]);
    const getUserInfo = async()=>{
        const res = await fetch("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+token);
        const response = await res.json();
        setUserData(response)
       console.log(response)
       createUserWithEmailAndPassword(auth,response.email,response.id)
       .then((userCredential) => {
           // Signed in 
           const user = userCredential.user;
          
           //    navigation.replace("Login")

           // ...
       })
       .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           alert(errorMessage)

           // ..
       });
        return response;
      }




    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: responsiveWidth(3) }}>
                <View style={{ marginVertical: responsiveHeight(3) }}>
                    <Text style={{
                        fontSize: responsiveFontSize(3),
                        fontWeight: 'bold',
                        marginVertical: responsiveHeight(1),
                        color: COLORS.black
                    }}>
                        Create Account
                    </Text>


                </View>

                <View style={{ marginBottom: responsiveHeight(1) }}>
                    <Text style={{
                        fontSize: responsiveFontSize(1.8),
                        fontWeight: '400',
                        marginVertical: responsiveHeight(1.5)
                    }}>Email address</Text>

                    <View style={{
                        width: responsiveWidth(93.8),
                        height: responsiveHeight(6),
                        borderColor: COLORS.black,
                        borderWidth: responsiveWidth(.25),
                        borderRadius: responsiveWidth(3),
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: responsiveWidth(5)
                    }}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            value={email}
                            onChangeText={text => setEmail(text)}
                            style={{
                                width: responsiveWidth(90),
                                fontSize:responsiveFontSize(1.5)
                            }}

                        />
                    </View>
                </View>

                <View style={{ marginBottom: responsiveHeight(1) }}>
                    <Text style={{
                      fontSize: responsiveFontSize(1.8),
                      fontWeight: '400',
                        marginVertical:responsiveHeight(2)
                    }}>Mobile Number</Text>

                    <View style={{
                     width: responsiveWidth(93.8),
                     height: responsiveHeight(6),
                     borderColor: COLORS.black,
                     borderWidth: responsiveWidth(.25),
                     borderRadius: responsiveWidth(3),
                     flexDirection:'row',
                   
                     justifyContent: "space-between",
                     paddingLeft: responsiveWidth(5)

                    }}>
                        <TextInput
                            placeholder='+92'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: responsiveWidth(11),
                                borderRightWidth: responsiveWidth(.25),
                                borderLeftColor: COLORS.grey,
                                height: responsiveHeight(5.6),
                                fontSize:responsiveFontSize(1.5)
                            }}
                        />

                        <TextInput
                            placeholder='Enter your phone number'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            value={phoneNumber}
                            onChangeText={text => setPhoneNumber(text)}
                            style={{
                                width: responsiveWidth(75),
                                fontSize:responsiveFontSize(1.5)
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: responsiveHeight(1) }}>
                    <Text style={{
                        fontSize: responsiveFontSize(1.8),
                        fontWeight: '400',
                        marginVertical: responsiveHeight(2)
                    }}>Password</Text>

                    <View style={{
                       

                        width: responsiveWidth(93.8),
                        height: responsiveHeight(6),
                        borderColor: COLORS.black,
                        borderWidth: responsiveWidth(.25),
                        borderRadius: responsiveWidth(3),
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: responsiveWidth(5)
                    }}>
                        <TextInput
                            placeholder='Enter your password'
                            value={password}
                            onChangeText={text => setPassword(text)}
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: responsiveWidth(90),
                                fontSize:responsiveFontSize(1.5)
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 15
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" 
                                    size={responsiveFontSize(3)}
                                     color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" 
                                    size={responsiveFontSize(3)}
                                     color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginVertical:responsiveHeight(1)
                }}>
                    <Checkbox
                        style={{ marginRight: responsiveWidth(1) }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}
                    />

                    <Text 
                    style={{fontSize:responsiveFontSize(1.6)}}>
                        I agree to the terms and conditions</Text>
                </View>



                <Button onPress={handleSignUp}

                    title="Sign Up"
                    filled
                    style={{
                        marginTop: responsiveHeight(3),
                        marginBottom: responsiveHeight(2),
                    }}
                />

                <View style
                ={{ flexDirection: 'row', alignItems: 'center',
                 marginVertical: responsiveHeight(1) }}>
                    <View
                        style={{
                            flex: 1,
                            height: responsiveHeight(.25),
                            backgroundColor: COLORS.grey,
                            marginHorizontal: responsiveWidth(7)
                        }}
                    />
                    <Text style={{ fontSize: responsiveFontSize(1.5) }}>Or Sign up with
                    </Text>
                    <View
                        style={{
                            flex: 1,
                            height: responsiveHeight(.25),
                            backgroundColor: COLORS.grey,
                            marginHorizontal: responsiveWidth(7)
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: responsiveHeight(6),
                            borderWidth: responsiveWidth(.25),
                            borderColor: COLORS.grey,
                            marginRight: responsiveWidth(2),
                            borderRadius: responsiveHeight(1)
                        }}
                    >
                        <Image
                            source={require("../assets/facebook.png")}
                            style={{
                                width: responsiveWidth(8),
                                marginRight: responsiveWidth(2)
                            }}
                            resizeMode='contain'
                        />

                        <Text style={{fontSize:responsiveFontSize(1.6)}}>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity

                        onPress={() => token ? getUserInfo(): promptAsync()}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: responsiveHeight(6),
                            borderWidth: responsiveWidth(.25),
                            borderColor: COLORS.grey,
                            marginRight: responsiveWidth(2),
                            borderRadius: responsiveHeight(1)
                        }}
                    >
                        <Image
                            source={require("../assets/google.png")}
                            style={{
                               
                                width: responsiveWidth(8),
                                marginRight: responsiveWidth(2)
                            }}
                            resizeMode='contain'
                        />

                        <Text style={{fontSize:responsiveFontSize(1.6)}}>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical:responsiveHeight(3)
                }}>
                    <Text style={{ fontSize: responsiveFontSize(1.6),
                         color: COLORS.black }}>Already have an account?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize:  responsiveFontSize(1.6),
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: responsiveWidth(1)
                        }}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

