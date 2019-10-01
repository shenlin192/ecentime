import React from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';
import { boldText, lightText } from '../../../../consts';
import mockData from './mockData';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    ...boldText,
    marginBottom: 10,
  },
  content: {
    ...lightText,
    lineHeight: 24,
  },
});

export class Recommendation extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>小编推荐</Text>
        <Text style={styles.content}>{mockData.content}</Text>
      </View>
    );
  }
}
