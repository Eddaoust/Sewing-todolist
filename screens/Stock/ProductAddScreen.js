import React, {useState} from 'react';
import {StyleSheet, View, KeyboardAvoidingView, ImageBackground, Text, TextInput, Dimensions, Platform} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import { useHeaderHeight } from '@react-navigation/stack';
import InputErrorMessage from '../../components/InputErrorMessage';
import TidyButton from "../../components/TidyButton";

const ProductAddScreen = props => {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={0}
            style={styles.container}>

        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ProductAddScreen;