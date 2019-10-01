import React, { Fragment } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import {
  Divider,
  Image,
} from 'react-native-elements';
import { openLink } from '../../../../services';
import { boldText, lightText, SEPARATOR_COLOR } from '../../../../consts';
import mockData from './mockData';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    ...boldText,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 0.15,
    elevation: 3,
    marginBottom: '2%',
    flexBasis: '46%',
    padding: 10,
  },
  itemImage: {
    minWidth: 177,
    minHeight: 177,
  },
  itemTitle: {
    ...lightText,
    fontSize: 14,
    lineHeight: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  desc: {
    ...lightText,
    fontSize: 10,
    lineHeight: 14,
    paddingBottom: 5,
  },
  divider: {
    backgroundColor: SEPARATOR_COLOR,
    marginTop: 'auto',
  },
  priceContainer: {
    flexDirection: 'row',
  },
  newPrice: {
    ...boldText,
    paddingTop: 9,
    marginRight: 10,
    fontSize: 17,
    lineHeight: 24,
  },
  oldPrice: {
    ...lightText,
    fontSize: 11,
    lineHeight: 16,
    textDecorationLine: 'line-through',
    alignSelf: 'flex-end',
  },
  buyImageContainer: {
    marginLeft: 'auto',
    alignSelf: 'flex-end',
    marginRight: -10,
  },
  buyImage: {
    width: 51,
    height: 21,
  },
});

export class PopularItems extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>热门单品</Text>
        <View style={styles.content}>
          {mockData.popularItems.map(item => (
            <View style={styles.itemContainer} key={item.title}>
              <Image
                style={styles.itemImage}
                source={item.imageSource}
              />
              <Text style={styles.itemTitle}>
                {item.title}
              </Text>
              {item.desc ? (
                <Fragment>
                  <Text style={styles.desc}>
                    {item.desc}
                  </Text>
                  <Divider style={styles.divider} />
                </Fragment>
              ) : null}
              <View style={styles.priceContainer}>
                <Text style={styles.newPrice}>{item.newPrice}</Text>
                <Text style={styles.oldPrice}>{item.oldPrice}</Text>
                <TouchableOpacity
                  style={styles.buyImageContainer}
                  onPress={() => openLink(item.link)}
                >
                  <Image
                    style={styles.buyImage}
                    source={require('./medias/goBuy.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
