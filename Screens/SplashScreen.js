import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainTabs');
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FAKE STORE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#0077cc',
  },

  logo:{
    fontSize:40,
    fontWeight:'bold',
    color:'white',
  }
});