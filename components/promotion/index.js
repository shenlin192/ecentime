import React from 'react';
import {
  StyleSheet, View, Text, ScrollView,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { Introduction } from './components/introduction';
import { Footer } from './components/footer';
import { Info } from './components/info';
import { HeaderLeft } from './components/headerLeft';
import { HeaderRight } from './components/headerRight';
import { Recommendation } from './components/recommendation';
import { PopularItems } from './components/popularItems';
import { RelevantImages } from './components/relevantImages';
import {
  SEPARATOR_COLOR, THEME_COLOR,
} from '../../consts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#979797',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    marginBottom: 50,
  },
  divider: {
    backgroundColor: SEPARATOR_COLOR,
    marginHorizontal: 18,
  },
});

export class Promotion extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: navigation.getParam('showBG') ? THEME_COLOR : 'transparent',
    },
    headerLeft: <HeaderLeft navigation={navigation} />,
    headerRight: <HeaderRight navigation={navigation} />,
  });

  state = {
    expanded: false,
    showBg: false,
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
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
          <View style={styles.mainContent}>
            <Info />
            <Divider style={styles.divider} />
            <Recommendation />
            <PopularItems />
            <RelevantImages />
          </View>
        </ScrollView>
        <Footer />
      </View>

    );
  }
}
