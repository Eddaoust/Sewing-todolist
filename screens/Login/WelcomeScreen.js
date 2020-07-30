import React from 'react';
import {View, ImageBackground, Text, StyleSheet} from "react-native";
import {} from 'native-base';
import TidyButton from "../../components/TidyButton";

const WelcomeScreen = props => {

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/login1.png')}
                style={styles.bgImage}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>BIENVENUE</Text>
                </View>
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
        backgroundColor: '#FEFCFC',
    },
    titleContainer: {
        backgroundColor: 'rgba(254, 252, 252, 0)',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 120
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#F4D1D1',
        textAlign: 'center'
    }
});

export default WelcomeScreen;