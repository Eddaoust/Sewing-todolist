import React from 'react';
import {ImageBackground, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Dimensions} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import { useHeaderHeight } from '@react-navigation/stack';
import TidyButton from '../../components/TidyButton';
import InputErrorMessage from '../../components/InputErrorMessage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = props => {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    const headerHeight = useHeaderHeight();

    const titlePosition = {
        paddingTop:  windowHeight <= 685 ? (40 - headerHeight) : (100 - headerHeight)
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={0}
            style={styles.container}>
            <ImageBackground
                source={require('../../assets/back_leaf.png')}
                style={styles.bgImage}>
                <Text style={{...styles.title, ...titlePosition}}>CONNEXION</Text>
                <View style={styles.inputContainer}>
                    <Controller
                        control={control}
                        name="email"
                        rules={{
                            required: 'Ce champ est requis!',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Entrez une adresse emai valide',
                            }
                        }}
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
                    {errors.email && <InputErrorMessage message={errors.email.message}/>}

                    <TextInput
                        placeholder="Mot de passe"
                        secureTextEntry={true}
                        style={styles.input}/>
                </View>
                <View style={styles.btnContainer}>
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
        resizeMode: 'cover',
        alignItems: 'center'
        //justifyContent: 'flex-start',
        //alignItems: 'center'
    },
    title: {
        flex: 2,
        textAlign: 'center',
        fontFamily: 'josefin-sans-semi-bold',
        fontSize: 33,
    },
    inputContainer: {
        flex: 2,
        width: windowWidth * 0.8,
        justifyContent: 'flex-start',
        alignItems: 'center'
        //width: '100%',
        //paddingHorizontal: 20,
        //flex: 1,
        //justifyContent: 'flex-end',
        //marginBottom: 100
    },
    input: {
        width: '100%',
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
        flex: 1,
        //width: '100%',
        //paddingHorizontal: 40,
        //paddingVertical: 15,
    },
});

export default LoginScreen;