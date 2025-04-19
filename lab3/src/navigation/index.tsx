import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Game } from './screens/Game';
import { Tasks } from './screens/Tasks';
import { TaskProvider } from '../context/TaskProvider';

const Tab = createBottomTabNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <TaskProvider>
        <Tab.Navigator>
          <Tab.Screen name="Гра" component={Game} />
          <Tab.Screen name="Завдання" component={Tasks} />
        </Tab.Navigator>
      </TaskProvider>
    </NavigationContainer>
  );
}