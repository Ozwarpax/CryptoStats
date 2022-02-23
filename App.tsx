import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CoinCapFeed } from './src/screens/CoinCapFeed';
import FirstPage from './src/screens/FirstPage';
import { Navigator } from "./src/navigation/Navigator";



export default function App() {

  
  return (
    <QueryClientProvider client={new QueryClient}>
      {/* <Navigator/> */}
      <FirstPage/>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
