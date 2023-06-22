import { View, Text, Image, Pressable, TextInput, TouchableOpacity,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button.jsx';
import { getAuth,sendSignInLinkToEmail,actionCodeSettings,signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from './firebase';

export default function LoginScreen({navigation})
{
    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const handleSignin = ()=>{
        const auth = getAuth();


        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setUid=user.uid;
    navigation.replace("HomeScreen")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("invalid credentials")
  });

    }

    return (
        <View style = {styles.container}>
            <View style= {styles.view1}>
                <Text style = {{fontSize:20,fontWeight:"bold",marginLeft:20,marginTop:10}} >Welcome

                </Text>
                
                 <Text style = {{fontSize:30,marginLeft:50,marginTop:40,marginBottom:20,
                fontStyle:"italic",
                fontFamily:'sans-serif-light',
                 
                 color:'grey'
                }} >
                    Online Mechanic

                </Text>

                <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Email'
                            value={email}
                            onChangeText={text=>setEmail(text)}
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
            <Text></Text>

            <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Password'
                            value={password}
                            onChangeText={text=>setPassword(text)}
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
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
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
             <TouchableOpacity onPress={()=>navigation.navigate('Forget')}>
                <Text style = {{textAlign:'right',paddingTop:5,color:'grey',marginRight:15,marginTop:5}}
                >Forgot password</Text>
                </TouchableOpacity>

           </View>

         
            <View style = {styles.view3}>
            <Button onPress={handleSignin}
                    title="Log in"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />
     
            </View>
            <View style = {styles.view4}>

                <Text style = {{marginLeft:25,textAlign:'center',paddingTop:100,fontSize:15}}>
                    New on Online Mechanic? 


                </Text>

                <TouchableOpacity
                    onPress={()=>navigation.navigate('Signup')}
                    >
                    <Text  style = {{textAlign:'center',paddingTop:100,fontSize:15
                    ,fontWeight:'bold'}}>Sign up</Text>
                        
                    </TouchableOpacity>
            </View>
           
         
        </View>


       
    );
}
const styles = StyleSheet.create({

        container:{

            flex:1,


        },
        view1:{
            marginTop:30,
           // flex:0.7,
           
        },

       

        view3:{
            marginTop:40,
          //  flex:0.3,
        },

        view4:{
           marginTop:40,
           flexDirection:'row',
           marginLeft:50,
          
           // flex:0.3,
        },



});
