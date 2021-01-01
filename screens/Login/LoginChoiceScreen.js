import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, Dimensions} from 'react-native';
import { Modalize } from 'react-native-modalize';
import SocialButton from "../../components/SocialButton";
import TidyButton from "../../components/TidyButton";
import {FontAwesome, Fontisto} from '@expo/vector-icons';
import {userAuthOnLogin} from "../../store/actions/login";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginChoiceScreen = props => {
    const dispatch = useDispatch();
    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/back_leaf.png')}
                style={styles.bgImage}>
                <Text style={styles.title}>CONNEXION</Text>
                <View style={styles.actionContainer}>
                    <View style={styles.socialContainer}>
                        <SocialButton onPress={() => dispatch(userAuthOnLogin('token'))} style={styles.fbButton}>
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
                        onPress={onOpen}>
                        <Text style={styles.options}>AUTRES OPTIONS</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
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
        color: '#35433A'
    },
    actionContainer: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: windowWidth * 0.6,
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
        marginTop: windowHeight <= 685 ? 20 : 30
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

export default LoginChoiceScreen;