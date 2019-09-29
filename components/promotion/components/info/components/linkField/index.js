import React from 'react';
import {
  StyleSheet, View, TouchableOpacity,
} from 'react-native';
import {
  Text, Image,
} from 'react-native-elements';
import { defaultFieldStyle } from '../../services';
import { openLink } from '../../../../../../services';
import { lightText } from '../../../../../../consts';

const styles = StyleSheet.create({
  container: {
    ...defaultFieldStyle.container,
    marginBottom: 11,
  },
  linkContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  linkIconContainer: {
    marginRight: 4,
    marginTop: 5,
  },
  linkIcon: {
    width: 12,
    height: 12,
  },
  itemDesc: {
    ...lightText,
    color: '#4A90E2',
  },
});

export class LinkField extends React.Component {
  pressLink = (url) => {
    openLink(url);
  }

  render() {
    const { content, title } = this.props;
    return (
      <View style={styles.container}>
        <Text style={defaultFieldStyle.title}>{title}</Text>
        <View>
          { content.map(item => (
            <TouchableOpacity
              style={styles.linkContainer}
              key={item.desc}
              onPress={() => { this.pressLink(item.link); }}
            >
              <View style={styles.linkIconContainer}>
                <Image
                  style={styles.linkIcon}
                  source={require('./medias/linkIcon.png')}
                />
              </View>
              <Text style={styles.itemDesc}>{item.desc}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}
