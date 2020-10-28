import React from 'react';
import {StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, Dimensions} from 'react-native';
import SocialButton from "../../components/SocialButton";
import TidyButton from "../../components/TidyButton";
import {FontAwesome, Fontisto} from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginChoiceScreen = props => {
    const sheetRef = React.useRef(null);
    const fall = new Animated.Value(1);

    const renderHeader = () => (
        <View style={styles.modalHeader}>
            <View style={styles.modalHeaderPanel}>
                <View style={styles.modalHeaderHandle} />
            </View>
        </View>
    );

    const renderContent = () => (
        <View style={styles.modalBody}>
            <TidyButton
                label="S'INSCRIRE AVEC UN EMAIL"
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
    );

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/back_leaf.png')}
                style={styles.bgImage}>
                <Text style={styles.title}>CONNEXION</Text>
                <View style={styles.actionContainer}>
                    <View style={styles.socialContainer}>
                        <SocialButton style={styles.fbButton}>
                            <FontAwesome name="facebook" size={28} color="white" style={{marginTop: 4}} />
                        </SocialButton>
                        <SocialButton style={styles.googleButton}>
                            <Image source={require('../../assets/google.png')} style={styles.googleLogo}/>
                        </SocialButton>
                        <SocialButton style={styles.appleButton}>
                            <Fontisto name="apple" size={26} color="white" style={{marginTop: -4}} />
                        </SocialButton>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => sheetRef.current.snapTo(0)}>
                        <Text style={styles.options}>AUTRES OPTIONS</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[windowHeight * 0.4, 0]}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
                enabledContentTapInteraction={false}
                enabledInnerScrolling={false}
                renderContent={renderContent}
                renderHeader={renderHeader}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center'
    },
    title: {
        flex: 3,
        textAlign: 'center',
        fontFamily: 'josefin-sans-semi-bold',
        fontSize: 33,
        paddingTop:  windowHeight <= 685 ? 40 : 100,
    },
    actionContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: windowWidth * 0.5,
    },
    socialContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        color: '#A07B7B',
        fontFamily: 'josefin-sans-semi-bold',
        fontSize: 15,
        marginTop: windowHeight <= 685 ? 15 : 25
    },
    modalHeader: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    modalHeaderPanel: {
        alignItems: 'center',
    },
    modalHeaderHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    modalBody: {
        backgroundColor: 'white',
        padding: 16,
        height: 320,
        paddingTop: 50,
        alignItems: 'center'
    },
    panelBtnContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingVertical: 20,
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
        marginTop: 20
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

export default LoginChoiceScreen;