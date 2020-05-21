import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const TidyButton = props => {

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F4D1D1',
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 25,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    }
});

export default TidyButton;