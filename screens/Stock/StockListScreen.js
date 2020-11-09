import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

const StockListScreen = props => {

    return (
        <SafeAreaView style={styles.container}>
            <Text>STOCK LIST</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4D1D1',
    }
});

export default StockListScreen;