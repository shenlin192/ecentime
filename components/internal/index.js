import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { lightText, THEME_COLOR } from '../../consts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: THEME_COLOR,
  },
  text: lightText,
});

export class Internal extends React.Component {
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
        <Text style={styles.text}>内部模块</Text>
        <Button
          buttonStyle={styles.buttonStyle}
          title="点击返回"
          onPress={this.handlePress}
        />
      </View>
    );
  }
}
