import React, {useLayoutEffect} from 'react';
import {StyleSheet, SafeAreaView, FlatList, View} from 'react-native';
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import StockListItem from "../../components/StockListItem";
import HeaderIcon from "../../components/HeaderIcon";
import SearchBar from "../../components/SearchBar";

const categories = [
    {
        id: 1,
        name: 'Mercerie',
        img: require('../../assets/cat_back_1.png')
    }, {
        id: 2,
        name: 'Patrons',
        img: require('../../assets/tissustest.png')
    }, {
        id: 3,
        name: 'Tissus',
        img: require('../../assets/cat_back_1.png')
    }, {
        id: 4,
        name: 'Laine',
        img: require('../../assets/tissustest.png')
    }, {
        id: 5,
        name: 'Mercerie',
        img: require('../../assets/cat_back_1.png')
    }, {
        id: 6,
        name: 'Patrons',
        img: require('../../assets/tissustest.png')
    }
];


//TODO Replace require img by uri from API
const StockListScreen = ({navigation}) => {
    // Display header buttons
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{
                    flexDirection: 'row',
                    marginRight: 15,
                }}>
                    <HeaderIcon
                        icon={<MaterialCommunityIcons name="dots-horizontal" size={20} color="black" />}
                        onPress={handleThreeDots}
                    />
                    <HeaderIcon
                        icon={<AntDesign name="plus" size={20} color="black" />}
                        onPress={handleAdd}
                    />
                </View>
            )
        })
    }, [navigation])

    const renderItem = ({item}) => (
        <StockListItem img={item.img} label={item.name}/>
    );

    const handleSearch = () => console.log('Search');
    const handleAdd = () => console.log('Add');
    const handleThreeDots = () => console.log('Three dots');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <SearchBar
                    value=""
                    onChangeText={() => {}}
                    onCancel={() => {}}/>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={categories}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}/>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        backgroundColor: '#f4d1d1',
        paddingVertical: 10,
        marginBottom: 15
    },
    listContainer: {
        marginHorizontal: 15
    }
});

export default StockListScreen;