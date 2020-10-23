import React from 'react';
import {View, ImageBackground, StyleSheet, Text} from "react-native";
import TidyButton from "../../components/TidyButton";

const WelcomeScreen = props => {

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/scene_hello.png')}
                style={styles.bgImage}>
            </ImageBackground>
            <View style={styles.btnContainer}>
                <TidyButton style={styles.buttonSize} onPress={() => {
                    props.navigation.navigate('LoginChoiceScreen');
                }}>
                    <Text style={styles.buttonText}>LET'S SEW</Text>
                </TidyButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        backgroundColor: '#FEFCFC',
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-start",
    },
    btnContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'poppins-semi-bold'
    },
    buttonSize: {
        paddingVertical: 15,
        paddingHorizontal: 100
    }
});

export default WelcomeScreen;