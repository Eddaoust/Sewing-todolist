import React from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import StockListItem from "../../components/StockListItem";

const categories = [
    {
        id: 1,
        name: 'Mercerie',
        img: require('../../assets/cat_back_1.png')
    }, {
        id: 2,
        name: 'Patrons',
        img: require('../../assets/tissustest.png')
    }
];


//TODO Replace require img by uri from API
const StockListScreen = props => {

    const renderItem = ({item}) => (
        <StockListItem img={item.img} label={item.name}/>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}/>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        marginHorizontal: 15
    }
});

export default StockListScreen;