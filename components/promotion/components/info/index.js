import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { Text } from 'react-native-elements';
import Hr from 'react-native-hr-component';
import { WebViewField } from './components/webViewField';
import { CodeField } from './components/codeField';
import { TextField } from './components/textField';
import { LinkField } from './components/linkField';
import { boldText, defaultLightText, SEPARATOR_COLOR } from '../../../../consts';
import mockData from './mockData';

const styles = StyleSheet.create({
  textSection: {
    paddingTop: 39,
    paddingHorizontal: 9,
  },
  slogan: {
    ...boldText,
    textAlign: 'center',
  },
  separatorTextStyle: {
    ...defaultLightText,
    color: '#A4A4A4',
  },
  hrStyles: {
    marginVertical: 15,
  },
  fieldsContainer: {
    paddingHorizontal: 20,
  },
});

export class Info extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.textSection}>
          <Text style={styles.slogan}>
            {mockData.slogan}
          </Text>
        </View>
        <Hr
          hrStyles={styles.hrStyles}
          lineColor={SEPARATOR_COLOR}
          width={1}
          text={mockData.publishTime}
          textStyles={styles.separatorTextStyle}
        />
        <View style={styles.fieldsContainer}>
          {
            mockData.fields.map((field) => {
              const fieldProps = {
                title: field.title,
                content: field.content,
                key: field.title,
              };
              switch (field.type) {
                case 'webView':
                  return (
                    <WebViewField
                      {...fieldProps}
                    />
                  );
                case 'code':
                  return (
                    <CodeField
                      {...fieldProps}
                    />
                  );
                case 'text':
                  return (
                    <TextField
                      {...fieldProps}
                    />
                  );
                case 'links':
                  return (
                    <LinkField
                      {...fieldProps}
                    />
                  );
                default:
                  return null;
              }
            })
          }
        </View>
      </View>
    );
  }
}
