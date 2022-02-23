import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';
import FirstScreen from '../screens/FirstScreen';



type Props = {}



export const Navigator = (props: Props) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={Routes.FIRST_SCREEN} component={FirstScreen} />
      {/* <Stack.Screen  name={Routes.COINCAP_FEED_SCREEN} component={CoinCapFeed}  /> */}
      {/* <Stack.Screen  name={Routes.STARSHIP_DETAIL_SCREEN} component={StarshipDetailScreen}  /> */}
    </Stack.Navigator>
  </NavigationContainer>
  )
}