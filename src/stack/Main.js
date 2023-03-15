import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/splash/splash';
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/register';
import Dashboard from '../screens/dashboard/home';


export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        // <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        </Stack.Navigator>
        // </NavigationContainer>
    );
}
