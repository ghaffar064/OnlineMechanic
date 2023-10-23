
import { StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity, SectionList, Alert } from "react-native";
import React from 'react'
import { useState, useEffect } from "react";
import Button from '../components/Button.jsx';
import tw from "tailwind-react-native-classnames"


import app from './firebase';
import { getDatabase, ref, onValue, set } from "firebase/database";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";





export default function BikeScreen({ navigation }) {
  const [mydata, setmydata] = useState([]);
  const [check, setCheck] = useState(null);








  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'Bike Related Issues');
    console.log("receiving data");
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      setmydata(data);
      console.log('testing');
      console.log("madLab ", data);



    }
    );


  }, [])


  return (
    <View style={styles.container}>


      <View style={{ flex: 0.2 }}>
        <Text style={{
          textAlign: 'center', fontWeight: '500',
          marginTop: responsiveHeight(7), 
          marginBottom: responsiveHeight(5), fontSize: responsiveFontSize(3)
        }}>Bike Related Issues</Text>
      </View>
      <View style={{ flex: 0.7 }}>

        <FlatList
          // horizontal = {true}
          data={mydata}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (

            <View style={{ margin: responsiveHeight(3) }}>
              <TouchableOpacity>

                <View style={styles.flatview2}>
                  <Image source={{ uri: item.img }}
                    style={{ width: responsiveWidth(80),
                       height: responsiveHeight(22) }}
                        
                  />
                </View>

                <View >
                  <Text style={{ textAlign: 'center',
                  
                  fontSize:responsiveFontSize(2),
                  
                  
                  
                  fontWeight: '500' }}>{item.Issue}</Text>


                  <Text style={{ textAlign: 'center',
                        fontSize:responsiveFontSize(1.8)
                
                }}>{item.Description}</Text>

                </View>

              </TouchableOpacity>

            </View>


          )}


        >

        </FlatList>



      </View>

      <View style={{ flex: 0.2 }}>
        <Button onPress={() => navigation.navigate('MapScreen')}
          title="Next"
          filled
          style={{
            
            marginBottom:  responsiveHeight(4),
            marginTop:responsiveHeight(4)
          }}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create(

  {
    container: {

      flex: 1,
    },
    flatview2: {
      alignItems: 'center',


    },



  }
);