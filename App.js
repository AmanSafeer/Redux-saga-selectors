/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView
} from 'react-native';
import { Provider } from "react-redux"
import Store from "./src/store"
import Root from "./src"

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <SafeAreaView style={{ flex: 1 }}>
          <Root />
        </SafeAreaView>
      </Provider>
    );
  }
};

export default App;
