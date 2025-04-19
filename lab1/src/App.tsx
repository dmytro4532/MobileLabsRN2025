import { Assets as NavigationAssets } from '@react-navigation/elements';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Navigation } from './navigation';
import Header from './components/Header';
import Footer from './components/Footer';

Asset.loadAsync([
  ...NavigationAssets,
  require('./assets/picture.png'),
  require('./assets/profile.png'),
  require('./assets/home.png'),
]);

SplashScreen.preventAutoHideAsync();

export function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Navigation
        linking={{
          enabled: 'auto',
          prefixes: [
            'helloworld://',
          ],
        }}
        onReady={() => {
          SplashScreen.hideAsync();
        }}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});