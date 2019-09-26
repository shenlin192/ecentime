import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export class Welcome extends React.Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none',
        },
    };
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="点击进入"
                    onPress={() => this.props.navigation.navigate('Promotion')}
                />
            </View>
        );
    }
}