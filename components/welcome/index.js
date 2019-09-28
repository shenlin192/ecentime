import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { THEME_COLOR } from '../../consts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: THEME_COLOR,
  },
});

export class Welcome extends React.Component {
  static navigationOptions = {
    header: null,
  };

  handlePress = () => {
    const { navigation } = this.props;
    navigation.navigate('Promotion');
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          buttonStyle={styles.buttonStyle}
          title="点击进入"
          onPress={this.handlePress}
        />
      </View>
    );
  }
}
