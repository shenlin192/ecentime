import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export class Promotion extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'transparent',
        },
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Promotion</Text>
            </View>
        );
    }
}