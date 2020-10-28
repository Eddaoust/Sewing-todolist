import React from 'react';
import {ImageBackground, StyleSheet, Text, View, TextInput, KeyboardAvoidingView} from 'react-native';
import {useForm, Controller} from "react-hook-form";
import TidyButton from "../../components/TidyButton";
import InputErrorMessage from "../../components/InputErrorMessage";

const LoginScreen = props => {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors)
    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={0}
            style={styles.container}>
            <ImageBackground
                source={require('../../assets/back_leaf.png')}
                style={styles.bgImage}>
                <Text style={styles.title}>CONNEXION</Text>
                <View style={styles.inputContainer}>
                    <Controller
                        control={control}
                        name="email"
                        rules={{required: true}}
                        defaultValue=""
                        render={({onChange, onBlur, value}) => (
                            <TextInput
                                autoCorrect={false}
                                style={styles.input}
                                keyboardType="email-address"
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder="Email"/>
                        )}
                    />
                    {errors.email && <InputErrorMessage message="This is required"/>}

                    <TextInput
                        placeholder="Mot de passe"
                        style={styles.input}/>
                    <TidyButton
                        label="SE CONNECTER"
                        onPress={handleSubmit(onSubmit)}/>
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

export default LoginScreen;