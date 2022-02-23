import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';
import FirstPage from '../screens/FirstPage';
import { CoinCapFeed } from '../screens/CoinCapFeed';



type Props = {}



export const Navigator = (props: Props) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={Routes.FIRST_PAGE} component={FirstPage} />
      {/* <Stack.Screen  name={Routes.COINCAP_FEED_SCREEN} component={CoinCapFeed}  /> */}
      {/* <Stack.Screen  name={Routes.STARSHIP_DETAIL_SCREEN} component={StarshipDetailScreen}  /> */}
    </Stack.Navigator>
  </NavigationContainer>
  )
}