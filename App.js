import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Welcome } from './components/welcome';
import { Promotion } from './components/promotion';

const App = createStackNavigator({
  Promotion,
  Welcome,
});

export default createAppContainer(App);
