import React, {useLayoutEffect, useRef} from 'react';
import {StyleSheet, FlatList, View, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import {useDispatch} from "react-redux";
import StockListItem from "../../components/StockListItem";
import HeaderIcon from "../../components/HeaderIcon";
import SearchBar from "../../components/SearchBar";

const categories = [
    {
        id: 1,
        name: 'Mercerie',
        img: require('../../assets/stock_1.jpg')
    }, {
        id: 2,
        name: 'Patrons',
        img: require('../../assets/stock_2.jpg')
    }, {
        id: 3,
        name: 'Tissus',
        img: require('../../assets/stock_3.jpg')
    }, {
        id: 4,
        name: 'Laine',
        img: require('../../assets/stock_4.jpg')
    }, {
        id: 5,
        name: 'Mercerie',
        img: require('../../assets/stock_1.jpg')
    }, {
        id: 6,
        name: 'Patrons',
        img: require('../../assets/stock_2.jpg')
    }
];

//TODO Replace require img by uri from API
//TODO Prevent Bottom bar to overide list content
const StockListScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

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
                        onPress={onOpen}
                    />
                </View>
            )
        })
    }, [navigation])

    const renderItem = ({item}) => (
        <StockListItem img={item.img} label={item.name}/>
    );

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
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}/>
            </View>
            <Portal>
                <Modalize
                    ref={modalizeRef}
                    disableScrollIfPossible={true}
                    adjustToContentHeight={true}>
                    <View style={styles.modalBody}>
                        <Text style={styles.modalTitle}>AJOUTER</Text>
                        <TouchableOpacity
                            style={styles.btnContainer}
                            onPress={() => {
                                modalizeRef.current?.close();
                                navigation.navigate('MainCategoryAddScreen')
                            }}>
                            <Image
                                style={styles.modalImg}
                                source={require('../../assets/categorie_icon.png')}/>
                            <Text style={styles.modalText}>Catégorie</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btnContainer}
                            onPress={() => {
                                modalizeRef.current?.close();
                                navigation.navigate('ProductAddScreen')
                            }}>
                            <Image
                                style={styles.modalImg}
                                source={require('../../assets/produit_icon.png')}/>
                            <Text style={styles.modalText}>Produit</Text>
                        </TouchableOpacity>
                    </View>
                </Modalize>
            </Portal>
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
        paddingHorizontal: 15
    },
    modalBody: {
        padding: 16,
        paddingTop: 50,
        marginBottom: 70
    },
    modalTitle: {
        color: '#35433A',
        fontFamily: 'josefin-sans',
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 30
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 43,
        marginVertical: 10
    },
    modalImg: {
        width: 35,
        height: 35,
    },
    modalText: {
        fontFamily: 'poppins-semi-bold',
        fontSize: 18,
        color: '#35433A',
        marginLeft: 20
    }
});

export default StockListScreen;