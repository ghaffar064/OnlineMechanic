import { View, Text, FlatList, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
export default function NavOptions() {
    const data = [
        {
            id: 0,
            title: "Bike Issues",
            image: "https://shorturl.at/cfvSX",
            screen: "BikeScreen",

        },
        {
            id: 1,
            title: "Car Issues",
            image: "https://shorturl.at/egLOU",
            screen: "CarScreen"

        }
    ]
    const navigation = useNavigation();

    return (
        <View style={{ alignItems: 'center', paddingTop: responsiveHeight(6) }}>
            <FlatList
                data={data}

                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}
                    >
                        <View style={{
                            alignContent: 'center',
                            margin: responsiveHeight(2)
                        }} >
                            <Image
                                style={{
                                    width:
                                        responsiveWidth(70),
                                    height: responsiveHeight(25)
                                }}
                                source={{ uri: item.image }}
                                resizeMode='contain'

                            />


                            <Text style={{
                                textAlign: 'center',
                                fontSize: responsiveFontSize(2.5)
                            }}>
                                {item.title}</Text>
                        </View>


                    </TouchableOpacity>





                }












            />

        </View>
    )
}