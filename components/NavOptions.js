import { View, Text, FlatList, Touchable, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function NavOptions() {
    const data = [
        {
            id:0,
            title:"Bike Issues",
            image:"https://shorturl.at/cfvSX",
            screen:"BikeScreen",
          
        },
        {
            id:1,
            title:"Car Issues",
            image:"https://shorturl.at/egLOU",
            screen:"CarScreen"
          
        }
    ]
    const navigation = useNavigation();

  return (
    <View style={{alignItems:'center',paddingTop:50}}>
        <FlatList  
            data={data}
          //  horizontal
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>
            <TouchableOpacity onPress={()=>navigation.navigate(item.screen)}
>
                <View style={{alignContent:'center',margin:10}} >
                    <Image 
                    style={{width:300,height:200}}
                    source = {{uri:item.image}}

                    />
                    
                                
                    <Text style = {{textAlign:'center',fontSize:20}}>{item.title}</Text>
                </View>


            </TouchableOpacity>
                   
            
            
           

            }
        
        
        
        
        
        
        
        
        
        
        
        
        />
     
    </View>
  )
}