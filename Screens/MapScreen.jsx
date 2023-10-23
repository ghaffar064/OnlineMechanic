import { View, Text } from 'react-native'
import React from 'react'
import Map from "../components/Map"
import MapView from 'react-native-maps'
import tw from "tailwind-react-native-classnames"

export default function MapScreen() {
  return (
    <View>
      <View style={tw`h-1/2`}
           
      
      >
        <Map />

      </View>

      <View style={tw`h-1/2`}>
     
      </View>
    </View>
  )
}