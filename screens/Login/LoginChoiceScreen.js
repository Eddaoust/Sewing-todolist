import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import TidyButton from "../../components/TidyButton";

const LoginChoiceScreen = props => {

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/back_leaf.png')}
                style={styles.bgImage}>
                <Text style={styles.title}>CONNEXION</Text>
            </ImageBackground>
            <View style={styles.btnContainer}>
                <TidyButton onPress={() => {}}>
                    Continuer avec Apple
                </TidyButton>
                <TidyButton onPress={() => {}}>
                    Continuer avec Facebook
                </TidyButton>
                <TidyButton onPress={() => {}}>
                    Continuer avec Google
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
    title: {
        marginTop: 76,
        textAlign: 'center',
        fontFamily: 'josefin-sans-semi-bold',
        fontSize: 33,
    },
    btnContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
});

export default LoginChoiceScreen;