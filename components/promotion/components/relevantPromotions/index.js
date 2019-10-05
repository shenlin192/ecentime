import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  StyleSheet, View, Text, Dimensions,
} from 'react-native';
import { Image } from 'react-native-elements';
import mockData from './mockData';
import { boldText, lightText } from '../../../../consts';

const sliderWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    ...boldText,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  image: {
    width: 200,
    minHeight: 100,
  },
  desc: {
    ...lightText,
    fontSize: 12,
    lineHeight: 17,
    marginHorizontal: 10,
  },

});

export class RelevantPromotions extends React.Component {
  renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={item.source}
      />
      <Text style={styles.desc}>{ item.desc }</Text>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>相关折扣</Text>
        <Carousel
          data={mockData.promotionItems}
          renderItem={this.renderItem}
          sliderWidth={sliderWidth}
          itemWidth={200}
          loop
          autoplay
        />
      </View>
    );
  }
}
