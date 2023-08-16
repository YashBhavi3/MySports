/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack'; 

import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import LeaguesTab from './screens/LeaguesTab';
import CountriesTab from './screens/CountriesTab';
import TeamsScreen from './screens/TeamsScreen';
import CountriesDetailsScreen from './screens/CountriesDetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome to Sports Explorer" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Leagues" component={LeaguesTab} />
        <Stack.Screen name="Countries" component={CountriesTab} />
        <Stack.Screen name="Teams" component={TeamsScreen} />
        <Stack.Screen name="CountriesDetails" component={CountriesDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
