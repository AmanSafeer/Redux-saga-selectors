/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import { Provider, connect } from "react-redux"
import Store from "./src/store"
import Root from "./src"
import { View } from 'native-base';
import { Colors, NavigationService, Metrix } from './src/config';

class RoutetWrapper extends Component {
  render() {
    const { Loader } = this.props
    return (
      <View style={{ flex: 1, backgroundColor: Colors.White}}>
        <StatusBar backgroundColor={Colors.White} barStyle="dark-content" />
        <Root
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        {Loader ?
          <View style={{ height:Metrix.VerticalSize(), width:Metrix.HorizontalSize(), position: "absolute", zIndex: 10, justifyContent: "center", alignItems: "center", backgroundColor:Colors.WhiteOpacity(0.5)}}>
            <ActivityIndicator size="large" color={Colors.Black} />
          </View>
          :
          null}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return ({
    Loader: state.BankReducer.loader
  })
}
function mapDispatchToProps(dispatch) {
  return ({})
}

const RootApp = connect(mapStateToProps, mapDispatchToProps)(RoutetWrapper)


class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <SafeAreaView style={{ flex: 1 }}>
          <RootApp />
        </SafeAreaView>
      </Provider>
    );
  }
};

export default App;
