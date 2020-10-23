import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const LoginScreen = props => {

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/back_leaf.png')}
                style={styles.bgImage}>
                <Text style={styles.title}>CONNEXION</Text>

            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-start",
        alignItems: 'center'
    },
    title: {
        marginTop: 150,
        textAlign: 'center',
        fontFamily: 'josefin-sans-semi-bold',
        fontSize: 33,
    },
});

export default LoginScreen;