import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';
import { Chat } from './screens/Chat';
import { Community } from './screens/Community';
import { Profile } from './screens/Profile';
import { Safety } from './screens/Safety';
import { Store } from './screens/Store';
import { Ionicons } from '@expo/vector-icons';

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
          options={{ tabBarIcon: ({ color, size }) => <Ionicons name="cart-outline" size={size} color={color} /> }}
        />
        <Tab.Screen
          name="Community"
          component={Community}
          options={{ tabBarIcon: ({ color, size }) => <Ionicons name="people-outline" size={size} color={color} /> }}
        />
        <Tab.Screen
          name="Chats"
          component={Chat}
          options={{ tabBarIcon: ({ color, size }) => <Ionicons name="chatbubble-outline" size={size} color={color} /> }}
        />
        <Tab.Screen
          name="Safety"
          component={Safety}
          options={{ tabBarIcon: ({ color, size }) => <Ionicons name="shield-checkmark-outline" size={size} color={color} /> }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}