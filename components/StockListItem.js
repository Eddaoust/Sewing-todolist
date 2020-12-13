import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const StockListItem = props => {

    return (
        <TouchableOpacity style={styles.btn}>
            <ImageBackground
                source={props.img}
                style={styles.bgImg}>
                <Text style={styles.txt}>{props.label}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        height: 120,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        marginVertical: 10
    },
    bgImg: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: (windowWidth * 0.8) / 20,
    },
    txt: {
        color: 'white',
        fontSize: 36,
        textAlign: 'center',
        fontFamily: 'josefin-sans-semi-bold',
        textTransform: 'uppercase',
        paddingHorizontal: 5,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }
});

export default StockListItem;