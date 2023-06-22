import { View, Text, Touchable, TouchableOpacity } from 'react-native'

import MapView, {Marker} from 'react-native-maps';
import React, { useState,useEffect } from 'react'

import tw from "tailwind-react-native-classnames"
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
import * as Location from 'expo-location';
import Button from '../components/Button.jsx';

export default function Map() {
 // const origin = useSelector(selectOrigin);
 
 const [addr,setAddr] = useState({
  
 });
  const [mapRegion,setMapRegion] = useState({
    latitude:37.7,
    longitude:-122,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    
   
  }
  );
  

  const mechanics = [
    { id: 1, latitude: 31.48, longitude: 74.2729 },
    { id: 2, latitude: 31.4697, longitude:74.2728 },
    { id: 3, latitude: 31.49, longitude:74.2728 },
    // Add more mechanic objects here
  ];
  
 const userLocation = async () =>{
    let {status} = await Location.requestForegroundPermissionsAsync();
    if(status!=='granted')
    {setErrorMsg('permission denied');
  }  
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy:true});
     let address = await Location.reverseGeocodeAsync(location.coords);
   
    setMapRegion({
      latitude:location.coords.latitude,
      longitude:location.coords.longitude,
      latitudeDelta: 0.0098,
      longitudeDelta: 0.0098,

            //  city: address.location.coords.city,
      // country: address.coords.country,
      //  district: address.coords.district,
      //   isoCountryCode: address.coords.isoCountryCode,
      //    name:address.coords.name,
      //     postalCode: address.coords.postalCode, 
      //     region: address.coords.region,
      //      street:address.coords.street,
      //       streetNumber: address.coords.streetNumber,
      //        subregion: address.coords.subregion,
             
      //          timezone:address.coords.timezone,
     
    
     


    });
    // setAddr({
    //   "city":"123",
    //   "name":address.coords.name
    
     
    // })
 
// console.log(address);
//  Setadr({

//  })
   setAddr(address)

 }
 
 useEffect(() => {
   userLocation();
 
   return () => {
     
   }
 }, [])
 console.log("hell")
  // const [adr, Setadr] = useState({
  //   name :address.name });
 
  return (
    <View style={{flex:1}}>
  
       <MapView style = {tw `flex-1`}
       // style={styles.map}
        region={{
          latitude: mechanics
      [0].latitude,
          longitude: mechanics
      [0].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          mapRegion
        }}
      >
        

        {mechanics
    .map((mechanic) => (
          <Marker
            key={mechanic.id}
            coordinate={{
             
              latitude: mechanic.latitude,
              longitude: mechanic.longitude

            }}
            title={`Mechanic ${mechanic.id}`}
          />
        ))}

{(          //origin?.location&&(                                             
      <Marker                                             

      coordinate={mapRegion} 
      // title=addr.city
   //  title =   {addr[0].name}
                                                                                                   
    />  
                                                              
  )                                                           

  } 
 
      </MapView>


  
  </View>
 
  )
}