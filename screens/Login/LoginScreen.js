import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import TidyButton from "../../components/TidyButton";

const LoginScreen = props => {

    return (
        <View style={styles.container}>
            <Text>BIENVENUE</Text>
            <ImageBackground
                source={require('../../assets/login1.png')}
                style={styles.bgImage}>
            </ImageBackground>
            <View style={styles.btnContainer}>
                <TidyButton onPress={() => {}}>
                    LET'S SEW
                </TidyButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    btnContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEFCFC',

    }
});

export default LoginScreen;