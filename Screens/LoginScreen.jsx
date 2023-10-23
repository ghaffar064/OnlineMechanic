import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button.jsx';
import { getAuth, sendSignInLinkToEmail, actionCodeSettings, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";


export default function LoginScreen({ navigation }) {
    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSignin = () => {
        const auth = getAuth();


        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in /
                const user = userCredential.user;
                setUid = user.uid;
               
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("invalid credentials")
            });

    }

    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Text style={{
                    fontSize: responsiveFontSize(2.5),
                    fontWeight: "bold", marginLeft: responsiveWidth(6), marginTop: responsiveHeight(2)
                }} >Welcome

                </Text>

                <Text style={{
                    fontSize: responsiveFontSize(5), marginLeft: responsiveWidth(13),
                    marginTop: responsiveHeight(2), marginBottom: responsiveHeight(3),
                    fontStyle: "italic",
                    fontFamily: 'sans-serif-light',

                    color: 'grey'
                }} >
                    Online Mechanic

                </Text>

                <View style={{
                    width: responsiveWidth(100),
                    height: responsiveHeight(6),
                    borderColor: COLORS.black,
                    borderWidth: responsiveWidth(0.3),
                    borderRadius: responsiveWidth(4),
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: responsiveWidth(5)
                }}>
                    <TextInput
                        placeholder='Email'
                        value={email}
                        onChangeText={text => setEmail(text)}
                        placeholderTextColor={COLORS.black}
                        keyboardType='email-address'
                        style={{
                            width: responsiveWidth(95)
                        }}
                    />
                </View>
                <Text></Text>

                <View style={{
                    width: responsiveWidth(100),
                    height: responsiveHeight(6),
                    borderColor: COLORS.black,
                    borderWidth: responsiveWidth(0.3),
                    borderRadius: responsiveWidth(4),
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: responsiveWidth(5)
                }}>
                    <TextInput
                        placeholder='Password'
                        value={password}
                        onChangeText={text => setPassword(text)}
                        placeholderTextColor={COLORS.black}
                        secureTextEntry={isPasswordShown}
                        style={{
                            width: responsiveWidth(95)
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
                                <Ionicons name="eye-off" size={responsiveFontSize(3)} color={COLORS.black} />
                            ) : (
                                <Ionicons name="eye"  size={responsiveFontSize(3)} color={COLORS.black} />
                            )
                        }

                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
                    <Text style={{ textAlign: 'right',fontSize:responsiveFontSize(1.5),
                     color: 'grey', marginRight: responsiveWidth(3), marginTop: responsiveHeight(1.5) }}
                    >Forgot Password</Text>
                </TouchableOpacity>

            </View>


            <View style={styles.view3}>
                <Button onPress={handleSignin}
                    title="Log in"
                    filled
                    style={{
                        marginTop: responsiveHeight(3),
                        marginBottom: responsiveHeight(2),
                    }}
                />

            </View>
            <View style={styles.view4}>

                <Text style={{  textAlign: 'center',fontSize: responsiveFontSize(1.6) }}>
                    New on Online Mechanic?


                </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}
                >
                    <Text style={{
                        textAlign: 'center', fontSize:  responsiveFontSize(1.8)
                        , fontWeight: 'bold'
                    }}>Sign up</Text>

                </TouchableOpacity>
            </View>


        </View>



    );
}
const styles = StyleSheet.create({

    container: {

        flex: 1,


    },
    view1: {
        marginTop: responsiveHeight(4),

    },



    view3: {
        marginTop: responsiveHeight(5),

    },

    view4: {
        marginTop: responsiveHeight(4),
        flexDirection: 'row',
        marginLeft: responsiveWidth(25),


    },



});
