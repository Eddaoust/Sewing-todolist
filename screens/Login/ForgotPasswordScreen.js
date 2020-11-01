import React from 'react';
import {ImageBackground, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Dimensions, Platform} from 'react-native';
import {Controller, useForm} from "react-hook-form";
import InputErrorMessage from "../../components/InputErrorMessage";
import TidyButton from "../../components/TidyButton";
import {useHeaderHeight} from "@react-navigation/stack";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ForgotPasswordScreen = props => {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    const headerHeight = useHeaderHeight();
    const titlePosition = {
        paddingTop:  windowHeight <= 685 ? (40 - headerHeight) : (100 - headerHeight)
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={0}
            style={styles.container}>
            <ImageBackground
                source={require('../../assets/back_leaf.png')}
                style={styles.bgImage}>
                <Text style={{...styles.title, ...titlePosition}}>RÉINITIALISATION DU MOT DE PASSE</Text>
                <Text style={styles.description}>Entrez votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.</Text>
                <View style={styles.inputContainer}>
                    <Controller
                        control={control}
                        name="email"
                        rules={{
                            required: 'Ce champ est requis!',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Entrez une adresse e-mail valide',
                            }
                        }}
                        defaultValue=""
                        render={({onChange, onBlur, value}) => (
                            <TextInput
                                autoCorrect={false}
                                returnKeyType='send'
                                style={styles.input}
                                keyboardType='email-address'
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder='Adresse e-mail'/>
                        )}
                    />
                    {errors.email && <InputErrorMessage message={errors.email.message}/>}

                    <View style={styles.btnContainer}>
                        <TidyButton
                            label="ENVOYER LE LIEN"
                            onPress={handleSubmit(onSubmit)}/>
                    </View>
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
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'josefin-sans-semi-bold',
        fontSize: 33,
        color: '#35433A'
    },
    description: {
        flex: 1,
        width: windowWidth * 0.8,
        fontFamily: 'poppins-light',
        textAlign: 'center',
        fontSize: 16,
        color: '#35433A'
    },
    inputContainer: {
        flex: 3,
        width: windowWidth * 0.8,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 12,
        fontSize: 18,
        borderColor: '#F4D1D1',
        borderWidth: 1,
        borderRadius: (windowWidth * 0.8) / 2,
        fontFamily: 'poppins-light',
        marginVertical: 8,
        backgroundColor: '#fff'
    },
    btnContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10
    }
});

export default ForgotPasswordScreen;