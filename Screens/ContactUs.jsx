import { View, Text } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

export default function ContactUs() {
  return (
    <View >
      <Text style={{fontSize:responsiveFontSize(3),
       marginTop:responsiveHeight(5),
                    textAlign:'center',
                    color:'grey'

    
    
    }}>Contact Us</Text>
    <Text
    style={{fontSize:responsiveFontSize(2),
        marginTop:responsiveHeight(70),
       marginLeft:responsiveWidth(4),
        color:'grey'



}}
    
    >E-mail: ghaffar064@gmail.com</Text>


<Text
    style={{fontSize:responsiveFontSize(2),
        marginTop:responsiveHeight(1),
        marginLeft:responsiveWidth(4),


        color:'grey'



}}
    
    >Phone: 03374964605</Text>
    </View>
  )
}