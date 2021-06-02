import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import Details from './pages/Details';
import Cart from './pages/Cart';
import CheckoutPage from './pages/CheckoutPage';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

export default function AppContainer() {
  let [fontsLoaded] = useFonts({
    'NotoSansJP-Black': require('./assets/fonts/NotoSansJP-Black.otf'),
    'NotoSansJP-Regular': require('./assets/fonts/NotoSansJP-Regular.otf'),
    'NotoSansJP-Bold': require('./assets/fonts/NotoSansJP-Bold.otf'),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Dash'}
      >
        <Stack.Screen name="Dash" component={Tabs} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="CheckoutPage" component={CheckoutPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
