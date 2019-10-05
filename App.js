import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Welcome } from './components/welcome';
import { Promotion } from './components/promotion';
import { Internal } from './components/internal';
import NavigationService from './services/navigationService';
import { defaultErrorHandler } from './services';

const RootStack = createStackNavigator({
  Welcome,
  Promotion,
  Internal,
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  loadAssets = async () => {
    await Font.loadAsync({
      'ping-fang-sc-light': require('./assets/fonts/PingFang_SC_Light.ttf'),
      'ping-fang-sc-medium': require('./assets/fonts/PingFang_SC_Medium.ttf'),
    });
  };

  render() {
    const { fontLoaded } = this.state;
    return (
      !fontLoaded ? (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={() => this.setState({ fontLoaded: true })}
          onError={defaultErrorHandler}
        />
      ) : (
        <AppContainer
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      )
    );
  }
}
