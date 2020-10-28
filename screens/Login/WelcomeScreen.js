import React from 'react';
import {View, ImageBackground, StyleSheet, Dimensions} from "react-native";
import TidyButton from "../../components/TidyButton";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log('WIDTH: '+ windowWidth);
console.log('HEIGHT: '+ windowHeight);

const WelcomeScreen = props => {

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/scene_hello.png')}
                style={styles.bgImage}>
            </ImageBackground>
            <View style={styles.btnContainer}>
                <TidyButton
                    label="LET'S SEW"
                    onPress={() => {
                    props.navigation.navigate('LoginChoiceScreen');
                }}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: windowHeight <= 685 ? 25 : 80,
        backgroundColor: '#FEFCFC',
    },
    bgImage: {
        flex: 4,
        resizeMode: "cover",
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WelcomeScreen;