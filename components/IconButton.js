import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

const IconButton = props => {

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={{...styles.button, ...props.style}}>
                {props.children}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F4D1D1',
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 25,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
    },
});

export default IconButton;