import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const HeaderIcon = props => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress}>
                {props.icon}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 3
    }
});

export default HeaderIcon;