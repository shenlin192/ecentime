import { Linking } from 'react-native';

export const openLink = (url) => {
  Linking.canOpenURL(url).then((supported) => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log(`Can not open URI: ${url}`);
    }
  });
};

export const isHTML = url => !/^[data:text, about:blank]/.test(url);
