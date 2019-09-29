import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import { defaultFieldStyle } from '../../services';
import { isHTML, openLink } from '../../../../../../services';

export class WebViewField extends React.Component {
  render() {
    const { content, title } = this.props;
    return (
      <View style={{
        ...defaultFieldStyle.container,
        height: 72,
        marginBottom: 0,
      }}
      >
        <Text style={defaultFieldStyle.title}>{title}</Text>
        <WebView
          automaticallyAdjustContentInsets={false}
          ref={(ref) => { this.webView = ref; }}
          originWhitelist={['*']}
          onShouldStartLoadWithRequest={(event) => {
            const { url } = event;
            if (isHTML(url)) {
              openLink(url);
              return false;
            }
            return true;
          }}
          source={{ html: content }}
        />
      </View>
    );
  }
}
