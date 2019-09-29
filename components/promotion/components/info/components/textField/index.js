import React from 'react';
import { View } from 'react-native';
import {
  Text,
} from 'react-native-elements';
import { defaultFieldStyle } from '../../services';
import { lightText } from '../../../../../../consts';

export class TextField extends React.Component {
  render() {
    const { content, title } = this.props;
    return (
      <View style={defaultFieldStyle.container}>
        <Text style={defaultFieldStyle.title}>{title}</Text>
        <Text style={lightText}>{content}</Text>
      </View>
    );
  }
}
