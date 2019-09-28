import React from 'react';
import {
  StyleSheet, View, Text, Image, ScrollView,
} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Introduction } from './components/introduction';
import { Footer } from './components/footer';
import { Info } from './components/info';
import { TEXT_COLOR, THEME_COLOR } from '../../consts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRight: {
    flexDirection: 'row',
    marginRight: 16,
  },
  viewNumber: {
    marginLeft: 3,
    color: TEXT_COLOR,
    lineHeight: 18,
  },
});

export class Promotion extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: navigation.getParam('showBG') ? THEME_COLOR : 'transparent',
    },
    headerLeft: (
      <Button
        titleProps={{
          style: {
            color: TEXT_COLOR,
            fontSize: 18,
            marginLeft: -10,
          },
        }}
        buttonStyle={{
          padding: 0,
        }}
        title="返回"
        type="clear"
        icon={(
          <Icon
            name="chevron-left"
            size={35}
            color={TEXT_COLOR}
          />
        )}
        onPress={() => navigation.navigate('Welcome')}
      />
    ),
    headerRight: (
      <View style={styles.headerRight}>
        <Image source={require('./medias/eye.png')} />
        <Text style={styles.viewNumber}>{navigation.getParam('viewNumber')}</Text>
      </View>
    ),
  });

  state = {
    expanded: false,
    showBg: false,
  };

  componentDidMount() {
    this.props.navigation.setParams({
      viewNumber: 666,
      showBG: false,
    });
  }

  updateExpandedState = (expanded) => {
    this.setState({
      expanded,
    });
  };

  updateShowBgState = (showBg) => {
    this.setState({
      showBg,
    });
    const { navigation } = this.props;
    navigation.setParams({ showBG: showBg });
  }

  handleScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;
    const { expanded, showBg } = this.state;
    if (y <= 0 && !expanded) {
      this.updateExpandedState(true);
    }
    if (y >= 100 && !showBg) {
      this.updateShowBgState(true);
    }
    if (y < 100 && showBg) {
      this.updateShowBgState(false);
    }
  };

  render() {
    const { expanded } = this.state;
    return (
      <View
        style={styles.container}
      >
        <ScrollView
          onScroll={this.handleScroll}
          scrollEventThrottle={16}
        >
          <Introduction
            expanded={expanded}
            updateExpandedState={this.updateExpandedState}
          />
          <Info />
        </ScrollView>
        <Footer />
      </View>

    );
  }
}
