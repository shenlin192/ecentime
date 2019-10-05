import { Linking } from 'react-native';
import NavigationService from './navigationService';

export const isInternalLink = url => /(https?:\/\/(.+?\.)?ecentime\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/.test(url);

export const openLink = (url) => {
  if (isInternalLink(url)) {
    NavigationService.navigate('Internal');
    return;
  }
  Linking.canOpenURL(url).then((supported) => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log(`Can not open URI: ${url}`);
    }
  });
};

export const isHTML = url => !/^[data:text, about:blank]/.test(url);

export const defaultErrorHandler = (e) => {
  console.log(e);
};
