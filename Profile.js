import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Sample Profile</Text>
      <Image source={require('./assets/logoicon.png')} style={{width:145, height: 145, borderRadius: 60, backgroundColor: '#F4944F'}}></Image>
      <Text style={{color: '#FFFFFF', fontSize: 75, fontFamily: 'Verdana'}}>Inclusive Bites</Text>
      <Button color='#F4944F' title={ 'Log In'} onPress={onPressLogIn}></Button>
      <Text style={{fontSize:5}}>  </Text>
      <Button color='#F4944F' title={ 'Sign Up'} onPress={onPressSignUp}></Button>
      <StatusBar style="auto" />
    </View>
  );

  // onPressLogIn = 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FACEAE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});