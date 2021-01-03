import React, {useState} from 'react';
import {StyleSheet, View, KeyboardAvoidingView, ImageBackground, Text, TextInput, Dimensions, Platform, ScrollView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import { useHeaderHeight } from '@react-navigation/stack';
import InputErrorMessage from '../../components/InputErrorMessage';
import TidyButton from "../../components/TidyButton";

const windowWidth = Dimensions.get('window').width;

const ProductAddScreen = props => {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={0}
                style={styles.container}>
                <View style={styles.inputContainer}>
                    <Controller
                        control={control}
                        name="title"
                        rules={{
                            required: 'Ce champ est requis!',
                        }}
                        defaultValue=""
                        render={({onChange, onBlur, value}) => (
                            <TextInput
                                autoCorrect={false}
                                returnKeyType='next'
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder='Titre'/>
                        )}
                    />
                    <Controller
                        control={control}
                        name="description"
                        rules={{
                            required: 'Ce champ est requis!',
                        }}
                        defaultValue=""
                        render={({onChange, onBlur, value}) => (
                            <TextInput
                                autoCorrect={false}
                                multiline = {true}
                                numberOfLines = {4}
                                returnKeyType='next'
                                style={{...styles.input,
                                    height: 150,
                                    justifyContent: "flex-start"}}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder='Description'/>
                        )}
                    />
                    <Controller
                        control={control}
                        name="mater"
                        rules={{
                            required: 'Ce champ est requis!',
                        }}
                        defaultValue=""
                        render={({onChange, onBlur, value}) => (
                            <TextInput
                                autoCorrect={false}
                                returnKeyType='next'
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder='Matière'/>
                        )}
                    />
                    <Controller
                        control={control}
                        name="color"
                        rules={{
                            required: 'Ce champ est requis!',
                        }}
                        defaultValue=""
                        render={({onChange, onBlur, value}) => (
                            <TextInput
                                autoCorrect={false}
                                returnKeyType='next'
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder='Couleur'/>
                        )}
                    />
                    <Controller
                        control={control}
                        name="motif"
                        rules={{
                            required: 'Ce champ est requis!',
                        }}
                        defaultValue=""
                        render={({onChange, onBlur, value}) => (
                            <TextInput
                                autoCorrect={false}
                                returnKeyType='next'
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder='Motif'/>
                        )}
                    />
                    <Controller
                        control={control}
                        name="largeur"
                        rules={{
                            required: 'Ce champ est requis!',
                        }}
                        defaultValue=""
                        render={({onChange, onBlur, value}) => (
                            <TextInput
                                autoCorrect={false}
                                returnKeyType='next'
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder='Largeur'/>
                        )}
                    />
                    <Controller
                        control={control}
                        name="longueur"
                        rules={{
                            required: 'Ce champ est requis!',
                        }}
                        defaultValue=""
                        render={({onChange, onBlur, value}) => (
                            <TextInput
                                autoCorrect={false}
                                returnKeyType='next'
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder='Longueur'/>
                        )}
                    />
                    <Controller
                        control={control}
                        name="note"
                        rules={{
                            required: 'Ce champ est requis!',
                        }}
                        defaultValue=""
                        render={({onChange, onBlur, value}) => (
                            <TextInput
                                autoCorrect={false}
                                multiline = {true}
                                numberOfLines = {4}
                                returnKeyType='next'
                                style={{...styles.input,
                                    height: 150,
                                    justifyContent: "flex-start"}}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder='Notes'/>
                        )}
                    />
                    <View style={styles.btnContainer}>
                        <TidyButton
                            label='ENREGISTRER'
                            onPress={() => true}/>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    inputContainer: {
        width: windowWidth * 0.8,
    },
    input: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 18,
        borderColor: '#3C3C434A',
        borderWidth: 1,
        borderRadius: 10,
        fontFamily: 'poppins-light',
        marginVertical: 8,
        backgroundColor: '#fff',
    },
});

export default ProductAddScreen;