import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>

     
        <NavOptions />
      </View>

    </SafeAreaView>

  )
};