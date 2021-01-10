import React, {useState} from 'react';
import {StyleSheet, View, KeyboardAvoidingView, ImageBackground, Text, TextInput, Dimensions, Platform} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch, useSelector} from "react-redux";
import { useHeaderHeight } from '@react-navigation/stack';
import InputErrorMessage from '../../components/InputErrorMessage';
import TidyButton from "../../components/TidyButton";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RegistrationScreen = props => {
    const dispatch = useDispatch();
    const registration = useSelector(state => state.registration);
    const headerHeight = useHeaderHeight();
    const { control, handleSubmit, errors } = useForm();
    const [passwordConfirmationError, setPasswordConfirmationError] = useState(false);
    const onSubmit = data => {
        if (data.password !== data.password_confirmation) {
            setPasswordConfirmationError(true);
            //passwordConfirmationError = <InputErrorMessage message='Les mots de passe ne sont pas identique.'/>;
        }
    };
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
                <Text style={{...styles.title, ...titlePosition}}>INSCRIPTION</Text>
                <Text style={styles.description}>Trouve de l'inspiration, partage tes créations, gère ta mercerie et rejoins la communauté TidyDo dès maintenant!</Text>
                <View style={styles.inputContainer}>
                    {/*TODO Handle uniq email error from server response*/}
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
                                returnKeyType='next'
                                style={styles.input}
                                keyboardType='email-address'
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder='Adresse e-mail'/>
                        )}
                    />
                    {errors.email && <InputErrorMessage message={errors.email.message}/>}
                    <Controller
                        control={control}
                        name='password'
                        rules={{
                            required: 'Ce champ est requis.',
                            minLength: {
                                value: 8,
                                message: 'Ce champ doit faire au moins 8 caractère.'
                            },
                            maxLength: {
                                value: 40,
                                message: 'Ce champ ne peut pas excéder 40 caractères.'
                            }
                        }}
                        defaultValue=""
                        render={({onChange, onBlur, value}) => (
                            <TextInput
                                autoCorrect={false}
                                secureTextEntry={true}
                                returnKeyType='next'
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder='Mot de passe'/>
                        )}
                    />
                    {errors.password && <InputErrorMessage message={errors.password.message}/>}
                    <Controller
                        control={control}
                        name='password_confirmation'
                        rules={{
                            required: 'Ce champ est requis.',
                            minLength: {
                                value: 8,
                                message: 'Ce champ doit faire au moins 8 caractère.'
                            },
                            maxLength: {
                                value: 40,
                                message: 'Ce champ ne peut pas excéder 40 caractères.'
                            },
                            validate: {

                            }
                        }}
                        defaultValue=""
                        render={({onChange, onBlur, value}) => (
                            <TextInput
                                autoCorrect={false}
                                secureTextEntry={true}
                                returnKeyType='next'
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder='Confirmation mot de passe'/>
                        )}
                    />
                    {errors.password_confirmation && <InputErrorMessage message={errors.password_confirmation.message}/>}
                    {passwordConfirmationError && <InputErrorMessage message='Les mots de passe ne sont pas identique.'/>}
                    <View style={styles.btnContainer}>
                        <TidyButton
                            label='VALIDER'
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
        alignItems: 'center'
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
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
    },
    btnContainer: {
        flex: 1,
        marginTop: 15
    }
});

export default RegistrationScreen;