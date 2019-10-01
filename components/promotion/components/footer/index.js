import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { Image } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    position: 'absolute',
    height: 49,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  discussion: {
    width: 24,
    height: 24,
  },
  like: {
    width: 32,
    height: 24,
  },
  share: {
    width: 18,
    height: 22,
  },
  clickBuy: {
    width: 99,
    height: 33,
  },
});

export class Footer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./medias/discussion.png')} style={styles.discussion} />
        <Image source={require('./medias/like.png')} style={styles.like} />
        <Image source={require('./medias/share.png')} style={styles.share} />
        <Image source={require('./medias/clickBuy.png')} style={styles.clickBuy} />
      </View>
    );
  }
}
