import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Loding extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    Loading...
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})