import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Dimensions} from 'react-native';

const TidyButton = props => {
    let iconStyle = {};
    if (props.icon !== '') {
        iconStyle = {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={{...styles.button, ...iconStyle}}>
                {props.icon}
                <Text style={styles.buttonText}>{props.label}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: Dimensions.get('window').width * 0.8,
        backgroundColor: '#F4D1D1',
        borderRadius: (Dimensions.get('window').width * 0.8) / 2,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'poppins-semi-bold',
        paddingHorizontal: 5
    },
});

export default TidyButton;