import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Feed from '../screens/Feed';
import Article from '../screens/Article';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerStyle: {
          borderBottomColor: 'transparent',
        },
      }}>
      <Stack.Screen
        name="Feed"
        component={Feed}
        // options={{headerTitle: props => <ListHeader />}}
      />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
}

export default App;
