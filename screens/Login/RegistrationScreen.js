import React from 'react';
import {StyleSheet, View, KeyboardAvoidingView, ImageBackground, Text, TextInput} from 'react-native';
import TidyButton from "../../components/TidyButton";

const RegistrationScreen = props => {

    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={0}
            style={styles.container}>
            <ImageBackground
                source={require('../../assets/back_leaf.png')}
                style={styles.bgImage}>
                <Text style={styles.title}>INSCRIPTION</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        autoCorrect={false}
                        style={styles.input}
                        keyboardType="email-address"
                        placeholder="Email"/>
                    <TextInput
                        autoCorrect={false}
                        style={styles.input}
                        keyboardType="email-address"
                        placeholder="Email"/>
                    <TextInput
                        autoCorrect={false}
                        style={styles.input}
                        keyboardType="email-address"
                        placeholder="Email"/>
                    <TextInput
                        autoCorrect={false}
                        style={styles.input}
                        keyboardType="email-address"
                        placeholder="Email"/>
                    <TextInput
                        placeholder="Mot de passe"
                        style={styles.input}/>
                    <TidyButton>
                        <View style={styles.btnContainer}>
                            <Text style={styles.btnLabel}>VALIDER</Text>
                        </View>
                    </TidyButton>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
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
        marginTop: 60,
        textAlign: 'center',
        fontFamily: 'josefin-sans-semi-bold',
        fontSize: 33,
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 100
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 12,
        fontSize: 18,
        borderColor: '#cacaca',
        borderWidth: 1,
        borderRadius: 20,
        fontFamily: 'poppins-light',
        marginVertical: 8,
        backgroundColor: '#fff'
    },
    btnContainer: {
        width: '100%',
        paddingHorizontal: 40,
        paddingVertical: 15,
    },
    btnLabel: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'poppins-semi-bold'
    }
});

export default RegistrationScreen;