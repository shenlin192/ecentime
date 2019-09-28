import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, Linking,
} from 'react-native';
import { Image, Text } from 'react-native-elements';
import Collapsible from 'react-native-collapsible';
import mockData from './mockData';
import { TEXT_COLOR } from '../../../../consts';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  bgImageContainer: {
    alignSelf: 'stretch',
    minHeight: 180,
    maxHeight: 200,
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  collapseSection: {
    alignSelf: 'stretch',
    height: 145,
    paddingTop: 25,
    paddingHorizontal: 20,
    borderBottomColor: '#979797',
    borderBottomWidth: 1,
  },
  collapseSectionText: {
    color: TEXT_COLOR,
    fontSize: 13,
    lineHeight: 18,
  },
  dynamicView: {
    position: 'absolute',
    bottom: -25,
    zIndex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
  },
  scrollIconContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -40,
  },
  scrollIcon: {
    width: 19,
    height: 19,
  },
  watchBrandContainer: {
    position: 'absolute',
    right: 8,
    bottom: 5,
  },
  watchBrand: {
    width: 62,
    height: 19,
  },
});

export class Introduction extends React.Component {
  handleScrollIcon = () => {
    const { updateExpandedState, expanded } = this.props;
    updateExpandedState(!expanded);
  };

  handleLink = () => {
    Linking.canOpenURL(mockData.url).then((supported) => {
      if (supported) {
        Linking.openURL(mockData.url);
      } else {
        alert(`Can not open URI: ${mockData.url}`);
      }
    });
  };

  render() {
    const { expanded } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.handleLink}
          style={styles.bgImageContainer}
        >
          <Image
            style={styles.bgImage}
            source={require('./medias/company.png')}
          />
        </TouchableOpacity>
        <Collapsible collapsed={!expanded}>
          <View style={styles.collapseSection}>
            <Text style={styles.collapseSectionText}>
              { mockData.text }
            </Text>
          </View>
        </Collapsible>
        <View style={styles.dynamicView}>
          <TouchableOpacity
            onPress={this.handleScrollIcon}
            style={styles.scrollIconContainer}
          >
            {expanded
              ? (
                <Image
                  style={styles.scrollIcon}
                  source={require('./medias/scrollUp.png')}
                />
              ) : (
                <Image
                  style={styles.scrollIcon}
                  source={require('./medias/scrollDown.png')}
                />
              )}
          </TouchableOpacity>
          <Image
            style={styles.logo}
            source={require('./medias/logo.png')}
          />
        </View>
        <View style={styles.watchBrandContainer}>
          <Image
            style={styles.watchBrand}
            source={require('./medias/watchBrand.png')}
          />
        </View>
      </View>
    );
  }
}
