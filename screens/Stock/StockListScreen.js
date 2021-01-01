import React, {useLayoutEffect, useRef} from 'react';
import {StyleSheet, SafeAreaView, FlatList, View, Dimensions, Text, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {AntDesign, Fontisto, MaterialCommunityIcons} from '@expo/vector-icons';
import {useDispatch} from "react-redux";
import StockListItem from "../../components/StockListItem";
import HeaderIcon from "../../components/HeaderIcon";
import SearchBar from "../../components/SearchBar";
import TidyButton from "../../components/TidyButton";

const windowHeight = Dimensions.get('window').height;
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
            <Portal>
                <Modalize
                    ref={modalizeRef}
                    disableScrollIfPossible={true}
                    adjustToContentHeight={true}>
                    <View style={styles.modalBody}>
                        <TidyButton
                            label="S'INSCRIRE AVEC UN E-MAIL"
                            icon={<Fontisto name="email" size={20} color="white" style={styles.panelBtnIcon} />}
                            onPress={() => props.navigation.navigate('RegistrationScreen')}/>
                        <View style={styles.panelBottomTextContainer}>
                            <Text style={styles.panelBottomtext}>Déja inscrit(e)? </Text>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() => props.navigation.navigate('LoginScreen')}>
                                <Text style={styles.panelBottomLink}>S'identifier</Text>
                            </TouchableOpacity>
                        </View>
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
        marginHorizontal: 15
    },
    modalBody: {
        padding: 16,
        paddingTop: 50,
        alignItems: 'center'
    },
    panelBtnIcon: {
        marginTop: -2
    },
    panelBtnText: {
        fontFamily: 'poppins-semi-bold',
        fontSize: 16,
        color: 'white',
        paddingHorizontal: 10
    },
    panelBottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 40
    },
    panelBottomtext:{
        color: '#BEBEBE',
        fontFamily: 'poppins-light'
    },
    panelBottomLink: {
        color: '#F4D1D1',
        fontFamily: 'poppins-light'
    }
});

export default StockListScreen;