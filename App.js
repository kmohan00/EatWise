import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LogIn from './LogIn';
import SignUp from './SignUp';
import Profile from './Profile';



export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Image source={require('./assets/logoicon.png')} style={{width:145, height: 145, borderRadius: 60, backgroundColor: '#F4944F'}}></Image>
        <Text style={{color: '#FFFFFF', fontSize: 75, fontFamily: 'Verdana'}}>Inclusive Bites</Text>
        <Button color='#F4944F' title={ 'Log In'} onPress={()=>navigation.navigate('LogInName')}></Button>
        <Text style={{fontSize:5}}>  </Text>
        <Button color='#F4944F' title={ 'Sign Up'} onPress={()=>navigation.navigate('SignUpName')}></Button>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

  const HomeScreen = ({navigation}) => {
    return <App></App>
  }
  const LoginScreen = ({navigation, route}) => {
    return <LogIn></LogIn>
  }
  const SignUpScreen = ({navigation, route}) => {
    return <SignUp></SignUp>
  }
  const ProfileScreen = ({navigation, route}) => {
    return <Profile></Profile>
  }

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="LogInName" component={LogInScreen} />
        <Stack.Screen name="SignUpName" component={SignUpScreen} />
        <Stack.Screen name="ProfileName" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFA662',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
