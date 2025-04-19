import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Store } from './screens/Store';
import { useContext } from 'react';
import { useTheme } from '../theme/ThemeProvider';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.theme.background,
          },
          headerTitleStyle: {
            color: theme.theme.text,
          },
        }}
      >
        <Stack.Screen
          name="Store"
          component={Store}
          options={{ title: 'Store' }}
        />
        <Stack.Screen
          name="Home2"
          component={Store}
          options={{ title: 'Store' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}