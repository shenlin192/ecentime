import { StyleSheet } from 'react-native';
import { boldText } from '../../../../../consts';

export const defaultFieldStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  title: {
    ...boldText,
    paddingRight: 11,
  },
});
