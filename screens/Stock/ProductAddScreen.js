import React, {useState} from 'react';
import {StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, TextInput, Dimensions, Platform, ScrollView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import {Entypo} from '@expo/vector-icons';
import TidyButton from "../../components/TidyButton";
import EddstCheckbox from "../../components/EddstCheckbox";
import InputErrorMessage from "../../components/InputErrorMessage";

const windowWidth = Dimensions.get('window').width;

const ProductAddScreen = props => {
    const { control, handleSubmit, errors } = useForm();
    const [washedCheckbox, setWachedCheckbox] = useState(false);
    const [ironedCheckbox, setIronedCheckbox] = useState(false);
    const handleWashedCheckbox = () => setWachedCheckbox(!washedCheckbox);
    const handleIronedCheckbox = () => setIronedCheckbox(!ironedCheckbox);
    const onSubmit = data => {
        console.log(data);
    };
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={0}
                style={styles.container}>
                <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.addImgBtn} onPress={openImagePickerAsync}>
                        <Entypo name="plus" size={48} color="#fff" />
                    </TouchableOpacity>
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
                    {errors.title && <InputErrorMessage message={errors.title.message}/>}
                    <Controller
                        control={control}
                        name="description"
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
                    <View style={styles.checkboxesContainer}>
                        <EddstCheckbox label="Lavé" checked={washedCheckbox} onPress={() => handleWashedCheckbox()}/>
                        <EddstCheckbox label="Repassé" checked={ironedCheckbox} onPress={() => handleIronedCheckbox()}/>
                    </View>
                    <Controller
                        control={control}
                        name="note"
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
                            onPress={handleSubmit(onSubmit)}/>
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
    addImgBtn: {
        borderRadius: 10,
        backgroundColor: '#E3E3E3',
        height: 80,
        marginTop: 16,
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkboxesContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnContainer: {
        marginVertical: 20
    }
});

export default ProductAddScreen;