import { View, ActivityIndicator, TouchableOpacity, Text,StyleSheet } from 'react-native';
import React, { useState, createContext, useContext, useEffect} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import {auth} from './firebase';


const AuthenticatedUserContext = createContext({});
 export default function SideDrawer({ navigation }) {
    const { setUser } = useContext(AuthenticatedUserContext);
    const Drawer = createDrawerNavigator();

   
    const handleLogout = async () => {
      try {
        // Perform logout logic here, such as signing out from Firebase
        await signOut(auth);
        setUser(null);
      } catch (error) {
        console.log('Logout Error:', error);
      }
    };
   
    return (
      <View style={styles.drawerContainer}>
        {/* Your drawer content */}
        <TouchableOpacity onPress={()=>navigation.navigate('Online Mechanic')} style={styles.Button}>
           <Text style={styles.logoutButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Contact Us')} style={styles.Button}>
           <Text style={styles.logoutButtonText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Faq')} style={styles.Button}>
           <Text style={styles.logoutButtonText}>FAQS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('TermAndCondition')} style={styles.Button}>
           <Text style={styles.logoutButtonText}>Terms and conditions</Text>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={handleLogout} style={styles.Button}>
          <Text style={styles.logoutButtonText}>Log out</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('MechanicScreen')} style={styles.MechanicMode}>
           <Text style={styles.MechanicText}>Mechanic Mode</Text>
        </TouchableOpacity>
      </View>
    );
  }
  const styles = StyleSheet.create({
    drawerContainer: {
      flex: 1,
     
    },
    Button: {
      marginTop: responsiveHeight(5),
      padding: responsiveWidth(2.5),
      backgroundColor: '#D3D3D3',
      borderRadius: responsiveWidth(2),
     
    },
    MechanicMode: {
        marginTop: responsiveHeight(30),
        padding: responsiveWidth(5),
        backgroundColor: 'yellow',
        borderRadius: responsiveWidth(2),
        marginRight:responsiveWidth(4),
        marginLeft:responsiveWidth(8)
      },
    logoutButtonText: {
      color: 'black',
      textAlign: 'center',
      fontSize:responsiveFontSize(1.6)
    },

    MechanicText: {
      color: 'black',
      textAlign: 'center',
      fontSize:responsiveFontSize(1.8)
    },

   
  });