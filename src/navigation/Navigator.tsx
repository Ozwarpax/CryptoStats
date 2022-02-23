import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';
import FirstScreen from '../screens/FirstScreen';
import { CoinCapFeed } from '../screens/CoinCapFeed';



type Props = {}



export const Navigator = (props: Props) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name={Routes.FIRST_SCREEN} component={FirstScreen} />
      <Stack.Screen  name={Routes.COINCAP_FEED_SCREEN} component={CoinCapFeed}  />
    </Stack.Navigator>
  </NavigationContainer>
  )
}