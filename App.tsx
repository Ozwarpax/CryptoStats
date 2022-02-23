
import React from 'react';
import { StyleSheet} from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Navigator } from "./src/navigation/Navigator";



 const App = ()=> {

  
  return (
    <QueryClientProvider client={new QueryClient}>
      <Navigator/>
    
    </QueryClientProvider>
  );
}

export default App;

