import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../theme/ThemeProvider';
import { Community } from './screens/Community';
import { Store } from './screens/Store';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.theme.background,
          },
          headerTitleStyle: {
            color: theme.theme.text,
          },
          tabBarStyle: {
            backgroundColor: theme.theme.background,
          },
        }}
        initialRouteName="Store"
      >
        <Tab.Screen
          name="Store"
          component={Store}
          options={{ title: 'Store' }}
        />
        <Tab.Screen
          name="Community"
          component={Community}
          options={{ title: 'Community' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}