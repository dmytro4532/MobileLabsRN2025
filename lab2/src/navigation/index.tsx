import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../theme/ThemeProvider';
import { Community } from './screens/Community';
import { Store } from './screens/Store';
import { Chat } from './screens/Chat';
import { Safety } from './screens/Safety';
import { Profile } from './screens/Profile';

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
        <Tab.Screen
          name="Chats"
          component={Chat}
          options={{ title: 'Chat' }}
        />
        <Tab.Screen
          name="Safety"
          component={Safety}
          options={{ title: 'Safety' }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Profile' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}