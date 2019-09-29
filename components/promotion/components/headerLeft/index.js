import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { TEXT_COLOR } from '../../../../consts';

const styles = StyleSheet.create({
  title: {
    color: TEXT_COLOR,
    fontSize: 16,
    marginLeft: -10,
  },
  button: {
    padding: 0,
    marginTop: -5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export class HeaderLeft extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Button
        titleProps={{
          style: styles.title,
        }}
        buttonStyle={styles.button}
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
    );
  }
}
