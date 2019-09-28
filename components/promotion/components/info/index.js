import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { Text } from 'react-native-elements';
import { TEXT_COLOR } from '../../../../consts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 800,
    backgroundColor: '#FFFFFF',
    shadowColor: '#979797',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 8,
    shadowOpacity: 1.0,
  },
  textSection: {
    paddingTop: 39,
    paddingHorizontal: 9,
  },
  text: {
    color: TEXT_COLOR,
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
  },
});

export class Info extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textSection}>
          <Text style={styles.text}>
            想念的 sephra/丝芙兰 75折回归啦！只限24小时！！
            快来清一波你的购物车！新年礼物愿望速速达成！
          </Text>
        </View>
      </View>
    );
  }
}
