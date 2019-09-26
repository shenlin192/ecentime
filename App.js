import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Welcome} from "./components/welcome";
import {Promotion} from "./components/promotion";

const AppNavigator = createStackNavigator({
    Welcome: Welcome,
    Promotion: Promotion,
});

export default createAppContainer(AppNavigator);