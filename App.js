import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, LogBox , Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from "./src/redux/store";

//import AppNavigator from './src/components/Navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-view';



export default function App(props) {
  return (
    <Provider store= {store}>
      <SafeAreaProvider>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Text>
          Hello
        </Text>
      </View>
      </SafeAreaProvider>
    </Provider>
  );

}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
},
});
