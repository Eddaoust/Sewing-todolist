import React from 'react';
import {View, ImageBackground, StyleSheet} from "react-native";
import TidyButton from "../../components/TidyButton";

const WelcomeScreen = props => {

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/scene_hello.png')}
                style={styles.bgImage}>
            </ImageBackground>
            <View style={styles.btnContainer}>
                <TidyButton onPress={() => {
                    props.navigation.navigate('LoginChoiceScreen');
                }}>
                    LET'S SEW
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
    }
});

export default WelcomeScreen;