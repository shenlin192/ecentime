import React from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export class Footer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bgImageContainer}>
          footer
        </Text>
      </View>
    );
  }
}
