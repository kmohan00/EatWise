import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



export default function SignUp() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logoicon.png')} style={{width:145, height: 145, borderRadius: 60, backgroundColor: '#F4944F'}}></Image>
      <Text style={{color: '#FFFFFF', fontSize: 30, fontFamily: 'Verdana'}}>Create Account</Text>
      <Button color='#F4944F' title={ 'Sign Up'} onPress={onPressLogIn}></Button>
      <Text style={{fontSize:5}}>  </Text>
      <Button color='#F4944F' title={ 'Log In'} onPress={onPressSignUp}></Button>
      <StatusBar style="auto" />
    </View>
  );

  // onPressLogIn = 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFA662',
    alignItems: 'center',
    justifyContent: 'center',
  },
});