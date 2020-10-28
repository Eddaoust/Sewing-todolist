import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const InputErrorMessage = props => {

    return (
        <View style={styles.container}>
            <FontAwesome name="warning" size={12} color="#bf1650" style={{marginTop: 3}} />
            <Text style={styles.message}>{props.message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 8
    },
    message: {
        fontFamily: 'poppins-semi-bold',
        fontSize: 12,
        color: '#bf1650',
        marginHorizontal: 5,
    }
});

export default InputErrorMessage;