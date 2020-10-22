import React from 'react';
import {StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import IconButton from "../../components/IconButton";
import {FontAwesome, Fontisto} from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

const LoginChoiceScreen = props => {
    const sheetRef = React.useRef(null);
    const fall = new Animated.Value(1);

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>
    );

    const renderContent = () => (
        <View
            style={{
                backgroundColor: 'white',
                padding: 16,
                height: 450,
            }}>
            <Text>Swipe down to close</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[450, 0]}
                initialSnap={1}
                callbackNode={fall}
                borderRadius={10}
                enabledGestureInteraction={true}
                renderContent={renderContent}
                renderHeader={renderHeader}
            />
            <ImageBackground
                source={require('../../assets/back_leaf.png')}
                style={styles.bgImage}>
                <Text style={styles.title}>CONNEXION</Text>
                <View style={styles.btnContainer}>
                    <IconButton style={styles.fbButton}>
                        <FontAwesome name="facebook" size={28} color="white" style={{marginTop: 4}} />
                    </IconButton>
                    <IconButton style={styles.googleButton}>
                        <Image source={require('../../assets/google.png')} style={styles.googleLogo}/>
                    </IconButton>
                    <IconButton style={styles.appleButton}>
                        <Fontisto name="apple" size={26} color="white" style={{marginTop: -4}} />
                    </IconButton>
                </View>
                <TouchableOpacity activeOpacity={0.6} onPress={() => sheetRef.current.snapTo(0)}>
                    <Text style={styles.options}>AUTRES OPTIONS</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingTop: 80,
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-start",
        alignItems: 'center'
    },
    title: {
        marginTop: 150,
        textAlign: 'center',
        fontFamily: 'josefin-sans-semi-bold',
        fontSize: 33,
    },
    btnContainer: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        top: 400
    },
    fbButton: {
        backgroundColor: '#3B5998'
    },
    googleButton: {
        backgroundColor: '#fff'
    },
    googleLogo: {
        width: 28,
        height: 28
    },
    appleButton: {
        backgroundColor: '#000000'
    },
    options: {
        position: 'relative',
        top: 450,
        color: '#A07B7B',
        fontFamily: 'josefin-sans-semi-bold',
        fontSize: 15
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
});

export default LoginChoiceScreen;