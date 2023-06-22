import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style = {tw `bg-white h-full`}>
        <View style = {tw`p-5`}>

        <Text style = {{fontSize:30,marginTop:60,marginBottom:10,
                fontStyle:"bold",
                fontStyle:'normal',
               
                fontFamily:'sans-serif-light',
                 textAlign:'center',
                 color:'grey'
                }} >
                    Online Mechanic

                </Text>
                <NavOptions  />
                </View>

    </SafeAreaView>

  )
};