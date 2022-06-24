import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Deatils';
import Country from '../screens/assign/Country';
import CountryDetails from '../screens/assign/CountryDetails';
import Main from '../screens/assignment4/Main';
import NextPage from '../screens/assignment4/NextPage';
import { FC } from 'react';

const Stack = createNativeStackNavigator();

const Index:FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main'

                screenOptions={{ headerShown: false }}
            >

            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Main" component={Main} />

            <Stack.Screen name = "Details" component={Details}/>
            <Stack.Screen name='NextPage' component={NextPage}/>

            <Stack.Screen name = "Country" component={Country}/>
            <Stack.Screen name = "CountryDetails" component={CountryDetails}/>


            </Stack.Navigator>

        </NavigationContainer>
    )
}
export default Index;
