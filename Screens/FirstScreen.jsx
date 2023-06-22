import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity, ImageBackground } from 'react-native';


export default function FirstScreen({navigation})
{
    return(

            
    <View style={styles.container}>
      <Text style={{
        color: 'black', textAlign: 'center', fontSize: 29, fontStyle: 'italic', paddingTop: 40,
        fontWeight: 'bold'
      }}>Online Mechanic
      </Text>
        <View style={styles.view1}>      
       <Image source={require("../assets/main-page.png")}
      style={{ width: 400, height: 400 }}
    >
     
     
     
    </Image>

    </View> 
    <View style={styles.view2}>
    <Text style={{
        color: 'grey', fontSize: 19, paddingTop: 20, paddingBottom: 10,
        textAlign:'center'
      }}>Here is the solution to your vehicle problems!</Text>

      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text style={{
          color: 'grey', textAlign: 'center', fontSize: 29, paddingTop: 10,
          borderRadius: 20, borderColor: 'grey', borderWidth: 2, marginRight: 70, marginLeft: 50,
          paddingBottom: 10

        }}>Login</Text>
      </TouchableOpacity>


      <TouchableOpacity
       onPress={()=>navigation.navigate('Signup')}  style={{ paddingTop: 10, color: 'red' }}>
        <Text style={{
          color: 'grey', textAlign: 'center', fontSize: 29, paddingTop: 10,
          borderRadius: 20, borderColor: 'grey', borderWidth: 2, marginRight: 70, marginLeft: 50,
          paddingBottom: 10

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
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    view1:{
      paddingTop:50

    },
    view2:
    {

    }
  });

  