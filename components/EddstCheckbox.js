import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const EddstCheckbox = props => {
    const bgColor = props.checked ? '#F4D1D1' : '#fff';

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress} style={{...styles.checkbox, backgroundColor: bgColor}}/>
            <Text style={styles.label}>{props.label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkbox: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#3C3C434A',
        height: 20,
        width: 20,
        marginRight: 10
    },
    label: {
        fontFamily: 'poppins-light',
        fontSize: 18,
        color: '#3C3C434A'
    }
});

export default EddstCheckbox;