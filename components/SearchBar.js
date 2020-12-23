import React from 'react';
import {StyleSheet, TextInput, SafeAreaView, View, TouchableWithoutFeedback} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const SearchBar = props => {

    // Set the cancel btn when input is fill
    let icon = <Ionicons name="ios-search" size={20} color="black" />;
    // if (props.value.length !== 0) {
    //     icon = (
    //         <TouchableWithoutFeedback onPress={props.onCancel}>
    //             <Ionicons name="md-close" size={20} color="black" />
    //         </TouchableWithoutFeedback>
    //     );
    // }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput
                    {...props}
                    style={styles.input}
                    placeholder="Chercher une catégorie..."
                    returnKeyType="search"
                    autoCorrect={false}
                />
                {icon}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 15,
    },
    inputGroup: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 5
    },
    input: {
        flex: 1
    }
});

export default SearchBar;