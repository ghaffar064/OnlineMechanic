
import {StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity,SectionList,Alert } from "react-native";
import React from 'react'
import { useState,useEffect } from "react";
import Button from '../components/Button.jsx';
import tw from "tailwind-react-native-classnames"


import app from './firebase';
import {getDatabase,ref,onValue,set} from "firebase/database";
//import { handleSignin } from "./LoginScreen.jsx";
//import { auth } from './firebase';




export default function CarScreen({navigation}) {
  const [mydata, setmydata] = useState([]);
  const [check, setCheck] = useState(null);
    // const checkUserSignIn = ()=>{
    //   const user = auth().currentUser;
  
    //   if (user) {
    //     // User is signed in
    //     console.log('User is signed in:', user.uid);
    //   } else {
    //     // User is signed out
    //     console.log('User is signed out');
    //   }
    // };



   
    
    
  

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref (db,'Car Related Issues');
    console.log("receiving data");
    onValue(dbRef,(snapshot)=>
    {
      let data = snapshot.val();
      setmydata(data);
      console.log('testing');
      console.log("madLab ",data);
    


    }
    );
  
    
  }, [])
 
 
  return (
    <View style={styles.container}>
    

      <View style={{flex:0.2}}>
      <Text style={{textAlign:'center',fontWeight:'bold',
      marginTop:50,marginBottom:50,fontSize:20}}>Car Related Issues</Text> 
      </View>
        <View style = {{flex:0.7}}>

      <FlatList
         // horizontal = {true}
          data = {mydata}
          keyExtractor = {(item)=> item.key}
          renderItem = {({item})=>(  
          
              <View style = {{margin:10}}>
                <TouchableOpacity>
                
             <View style = {styles.flatview2}>
               <Image source={{uri:item.img}}
                 style={{ width: 300, height: 150 }}

                />
              </View> 
             
              <View >
                <Text style={{textAlign:'center',fontWeight:'bold'}}>{item.Issue}</Text> 
              
                
                <Text style={{textAlign:'center'}}>{item.Description}</Text>
               
              </View>

              </TouchableOpacity>
           
          </View>
         
          
          )}
          
          
          >

          </FlatList>


        
      </View>

      <View style = {{flex:0.2}}>
      <Button   onPress={()=>navigation.navigate('MapScreen')}
                    title="Next"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />              
      </View>
    </View>
  )
}
const styles = StyleSheet.create(

  {
  container:{

    flex:1,
  },
  flatview2:{
      alignItems:'center',
      
      
  },
 


  }
);