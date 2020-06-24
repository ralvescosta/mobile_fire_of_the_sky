import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigation from './navigation/StackNavigation';

function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;
