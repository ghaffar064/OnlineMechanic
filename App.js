import React, { useState, createContext, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Screens/firebase';
import  LoginScreen  from './Screens/LoginScreen';
import  FirstScreen  from './Screens/FirstScreen';

import  Signup  from './Screens/Signup';

import  ForgetPassword  from './Screens/ForgetPassword';

import Map from './components/Map';
import { ScreenStackHeaderSubview } from 'react-native-screens';
// import HelloTajamalShah from './Screens/HelloTajamalShah';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './Screens/HomeScreen';
import MapScreen from './Screens/MapScreen';
import BikeScreen from './Screens/BikeScreen';
import CarScreen from './Screens/CarScreen';


const Stack = createStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function MainStack() {
  return (
    <Stack.Navigator defaultScreenOptions={HomeScreen}>
      {/* <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Chat' component={Chat} /> */}


<Stack.Screen name="HomeScreen" component={HomeScreen}
          options={{headerShown:false}}


        
        />

<Stack.Screen name="MapScreen" component={MapScreen}
          options={{headerShown:false}}


        
        />    
<Stack.Screen name="BikeScreen" component={BikeScreen}
          options={{headerShown:false}}


        
        />
<Stack.Screen name="CarScreen" component={CarScreen}
          options={{headerShown:false}}


        
        />                 



    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={Signup} /> */
      }
         <Stack.Screen name="FirstScreen" component={FirstScreen}
          options={{headerShown:false }}

        />
<Stack.Screen name="Login" component={LoginScreen}
            options={{ title:"Welcome",
                        
                        headerShown:false,
            
            headerBackVisible: false,
            headerTitleStyle:{
              fontWeight:'bold'
          },
         
          
          
          } 
             }
          

         />
            <Stack.Screen name="Signup" component={Signup}
         options={{headerShown:false }}
         
        />

<Stack.Screen name="Forget" component={ForgetPassword}
          options={{title:"Forgot Password"}}


        
        />


    </Stack.Navigator>
  );
}

function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
// unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);
if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

return (
    <NavigationContainer>
      {/* <LoginScreen/> */}
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthenticatedUserProvider>

      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}