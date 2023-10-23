import { View, Text, Touchable, TouchableOpacity,StyleSheet } from 'react-native'

import MapView, { Marker,Callout } from 'react-native-maps';
import React, { useState, useEffect } from 'react'

import tw from "tailwind-react-native-classnames"
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
import * as Location from 'expo-location';
import Button from '../components/Button.jsx';

export default function Map() {


  const [addr, setAddr] = useState({

  });
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.7,
    longitude: -122,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,


  }
  );


  const mechanics = [
    { id: 1, latitude: 31.48, longitude: 74.2729 },
    { id: 2, latitude: 31.4697, longitude: 74.2728 },
    { id: 3, latitude: 31.45, longitude: 74.2728 },

  ];

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('permission denied');
    }
    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    let address = await Location.reverseGeocodeAsync(location.coords);

    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0098,
      longitudeDelta: 0.0098,







    });

    setAddr(address)

  }

  useEffect(() => {
    userLocation();

    return () => {

    }
  }, [])
  const CustomMarker = ({ mechanic }) => (
    <Marker
      coordinate={{
        latitude: mechanic.latitude,
        longitude: mechanic.longitude,
      }}
      // title={`Mechanic ${mechanic.id}`}
    >
      {/* Custom marker view */}
      <View style={styles.markerContainer}>
        <Text style={styles.markerText}>mechanic {mechanic.id}</Text>
      </View>
    </Marker>
  );


  return (
    <View style={{ flex: 1 }}>

      <MapView style={tw`flex-1`}

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
           {mechanics.map((mechanic) => (
    <CustomMarker key={mechanic.id} mechanic={mechanic} />
  ))}
   {(
          <Marker

            coordinate={mapRegion}


          />

        )

        } 

        {/* {mechanics
          .map((mechanic) => (
            <Marker
              key={mechanic.id}
              coordinate={{

                latitude: mechanic.latitude,
                longitude: mechanic.longitude

              }}
              title={`Mechanic ${mechanic.id}`}
            >
              <Callout>
        <Text>Mechanic {mechanic.id}</Text>
      </Callout>
            </Marker>
          ))}

        {(
          <Marker

            coordinate={mapRegion}


          />

        )

        } */}

      </MapView>



    </View>

  )
}
const styles = StyleSheet.create({
  markerContainer: {
    backgroundColor: 'blue', // Customize the background color of the marker label
    padding: 8,
    borderRadius: 8,
  },
  markerText: {
    color: 'white', // Customize the text color of the marker label
    fontWeight: 'bold',
  },
});