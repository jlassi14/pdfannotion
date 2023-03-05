import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import PDFViewerScreen from './PDFViewerScreen';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PDFViewerScreen">
       
      <Stack.Screen name="PDFViewerScreen" component={PDFViewerScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;