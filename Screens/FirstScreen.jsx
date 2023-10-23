import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


export default function FirstScreen({ navigation }) {
  return (


    <View style={styles.container}>
      <Text style={{
        color: 'black', textAlign: 'center',
         fontSize: responsiveFontSize(3), fontStyle: 'italic' 
         ,marginTop:responsiveHeight(5),
        fontWeight: 'bold'
      }}>Online Mechanic
      </Text>
      <View style={styles.view1}>
        <Image source={require("../assets/main-page.png")}
          style={{ width: responsiveWidth(100), 
            height:responsiveHeight(50),resizeMode:'contain' }}
        >



        </Image>

      </View>
      <View >
        <Text style={{
          color: 'grey', fontSize: responsiveFontSize(2),
           marginTop: responsiveHeight(2), marginBottom: responsiveHeight(3),
          textAlign: 'center'
        }}>Here is the solution to your vehicle problems!</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{
            color: 'grey', textAlign: 'center',
             fontSize:responsiveFontSize(2.8), paddingTop: responsiveHeight(1),
            borderRadius: responsiveWidth(4),
             borderColor: 'grey',
              borderWidth: responsiveWidth(.25), 
              marginRight:responsiveWidth(15), marginLeft: responsiveWidth(12),
            paddingBottom: responsiveHeight(1)

          }}>Login</Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() =>
           navigation.navigate('Signup')} 
           style={{ marginTop: responsiveHeight(2) }}>
          <Text style={{
             color: 'grey', textAlign: 'center',
             fontSize:responsiveFontSize(2.8), paddingTop: responsiveHeight(1),
            borderRadius: responsiveWidth(4),
             borderColor: 'grey',
              borderWidth: responsiveWidth(.25), 
              marginRight:responsiveWidth(15), marginLeft: responsiveWidth(12),
            paddingBottom: responsiveHeight(1)


          }}>Signup</Text>
        </TouchableOpacity>

      </View>

    </View>

  );
}
const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: 'white',

  },
  view1: {
      marginTop:responsiveHeight(5)
  },

});

