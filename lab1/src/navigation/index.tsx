import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import home from '../assets/home.png';
import picture from '../assets/picture.png';
import profile from '../assets/profile.png';
import { NotFound } from './screens/NotFound';
import NewsList from './screens/NewsList';
import Gallery from './screens/Gallery';
import Registration from './screens/Registration';

const HomeTabs = createBottomTabNavigator({
  screens: {
    News: {
      screen: NewsList,
      options: {
        title: 'Головна',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={home}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
    Gallery: {
      screen: Gallery,
      options: {
        title: 'Галерея',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={picture}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
    Profile: {
      screen: Registration,
      options: {
        title: 'Профіль',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={profile}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
  },
}
);

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: 'Home',
        headerShown: false,
      },
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: '404',
      },
      linking: {
        path: '*',
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
