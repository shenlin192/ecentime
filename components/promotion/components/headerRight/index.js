import React from 'react';
import {
  StyleSheet, View, Image, Text,
} from 'react-native';
import { boldText } from '../../../../consts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  viewNumber: {
    ...boldText,
    marginLeft: 3,
  },
});

export class HeaderRight extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('./medias/eye.png')} />
        <Text style={styles.viewNumber}>{navigation.getParam('viewNumber')}</Text>
      </View>
    );
  }
}
