import React, { useState, createContext, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator, TouchableOpacity, Text } from 'react-native';

import { auth } from './Screens/firebase';
import LoginScreen from './Screens/LoginScreen';
import FirstScreen from './Screens/FirstScreen';
import Signup from './Screens/Signup';
import ForgetPassword from './Screens/ForgetPassword';
import Map from './components/Map';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './Screens/HomeScreen';
import MapScreen from './Screens/MapScreen';
import BikeScreen from './Screens/BikeScreen';
import CarScreen from './Screens/CarScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import ContactUs from './Screens/ContactUs';
import FaqScreen from './Screens/FaqScreen';
import TermAndCondition from './Screens/TermAndCondition';
import SideDrawer,{handleLogout,Contact} from './Screens/SideDrawer';
import MechanicScreen from './MechanicScreens/MechanicScreen';
const Stack = createStackNavigator();
const AuthenticatedUserContext = createContext({});
const Drawer = createDrawerNavigator();

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function MainStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Online Mechanic"
        component={HomeScreen}
       
        options={{
          headerShown: true,
          headerTitleStyle: {
             fontSize: responsiveFontSize(3),
            marginTop: responsiveHeight(1), 
           fontWeight: "500",
           marginLeft:responsiveWidth(10),

          fontFamily: 'sans-serif-light',
          
          color: 'grey'
          },
          headerLeft: () => (
            <TouchableOpacity
              style={styles.drawerButton}
              onPress={() => navigation.toggleDrawer()}
            >
              <Text style={styles.drawerButtonText}>☰</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BikeScreen"
        component={BikeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CarScreen"
        component={CarScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Contact Us'
        component={ContactUs}
        options={{headerShown:false}}
      />
       <Stack.Screen
        name='Faq'
        component={FaqScreen}
        options={{headerShown:false}}
      />
       <Stack.Screen
        name='TermAndCondition'
        component={TermAndCondition}
        options={{headerShown:false}}
      />
        <Stack.Screen
        name='MechanicScreen'
        component={MechanicScreen}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Forget" component={ForgetPassword} />
    </Stack.Navigator>
  );
}


function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, authenticatedUser => {
      authenticatedUser ? setUser(authenticatedUser) : setUser(null);
      setIsLoading(false);
    });

    return unsubscribeAuth;
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? (
        <Drawer.Navigator drawerContent={props => <SideDrawer {...props} />}>
          <Drawer.Screen
            name="MainStack"
            component={MainStack}
            options={{ headerShown: false }}
          />
         
         
        </Drawer.Navigator>
        
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}



export default function App() {
  return (
    <AuthenticatedUserProvider>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </AuthenticatedUserProvider>
  );
}
const styles = {
  drawerContainer: {
    flex: 1,
   
  },
  
  drawerButton: {
    marginLeft: responsiveWidth(7),
  },
  drawerButtonText: {
    fontSize: responsiveFontSize(4),
    color: 'grey',
  },
};