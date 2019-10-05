import React from 'react';
import {
  StyleSheet, View, Clipboard,
} from 'react-native';
import {
  Text, Tooltip, Image,
} from 'react-native-elements';
import { lightText } from '../../../../../../consts';
import { defaultFieldStyle } from '../../services';

const styles = StyleSheet.create({
  container: {
    ...defaultFieldStyle.container,
    marginBottom: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 7,
  },
  itemDesc: {
    ...lightText,
  },
  tooltipContainer: {
    backgroundColor: '#404040',
    borderRadius: 50,
    width: 80,
    marginLeft: 80,
  },
  popover: {
    ...lightText,
    color: '#FFFFFF',
  },
  codeContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.04)',
    paddingHorizontal: 7,
    height: 20,
    alignItems: 'center',
    marginLeft: 8,
  },
  codeIcon: {
    width: 12,
    height: 12,
  },
  codeText: {
    color: '#909090',
    marginRight: 13,
    fontSize: 14,
    lineHeight: 20,
  },
});

export class CodeField extends React.Component {
  copyCode = (code) => {
    Clipboard.setString(code);
  };

  render() {
    const { content, title } = this.props;
    return (
      <View style={styles.container}>
        <Text style={defaultFieldStyle.title}>{title}</Text>
        <View>
          { content.map(item => (
            <View key={item.code} style={styles.itemContainer}>
              <Text style={styles.itemDesc}>{item.desc}</Text>
              <Tooltip
                containerStyle={styles.tooltipContainer}
                popover={<Text style={styles.popover}>已复制</Text>}
                withPointer={false}
                onOpen={() => this.copyCode(item.code)}

              >
                <View style={styles.codeContainer}>
                  <Text style={styles.codeText}>
                    {item.code}
                  </Text>
                  <Image
                    source={require('./medias/copyIcon.png')}
                    style={styles.codeIcon}
                  />
                </View>
              </Tooltip>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
