import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

const CustomBottomTapbarIcon = props => {

    return (
        <View style={styles.container}>
            <TouchableOpacity>
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
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
    }
});

export default CustomBottomTapbarIcon;