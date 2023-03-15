import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native';
import { scale } from '../../utils/dimensions'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Splash({ navigation }) {

    //UsesStates
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');

    const registerButton = () => {
        navigation.navigate('Dashboard')
    }

    return (
        <KeyboardAwareScrollView
            // style={{ flex: 1, backgroundColor: '#F4C27F' }}
            style={styles.container}
        >
            <View style={styles.container}>
                <StatusBar style="dark" backgroundColor='#F4C27F' />
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <View >
                        <Image source={require('../../../assets/images/Done.png')} style={styles.image} />
                    </View>
                    <View>
                        <View style={styles.uppertextContainer}>
                            <Text style={[styles.uppertext, { marginBottom: scale(-10) }]}>Welcome back </Text>
                            <Text style={[styles.uppertext, { marginBottom: scale(-10) }]}>to </Text>
                            <Text style={[styles.uppertext, { fontSize: scale(30) }]}>Plan2Do</Text>
                            {/* <Text style={styles.descriptionText}>
                                Let’s help you meet up your tasks
                            </Text> */}
                        </View>
                        <View style={styles.descriptionContainer}>
                        </View>
                    </View>
                    <View>

                        <TextInput
                            onChangeText={text => setEmail(text)}
                            value={email}
                            style={styles.inputfields}
                            placeholder="Enter your email"
                        />

                        <TextInput
                            onChangeText={text => setPassword(text)}
                            value={password}
                            secureTextEntry={true}
                            placeholder="Enter password"
                            style={styles.inputfields}
                        />

                    </View>
                </View>
                <View style={{ alignSelf: 'flex-end', width: scale(200) }}>
                    <View style={[styles.registerButtonContainer, {}]}>
                        <TouchableOpacity style={[styles.registerbuttonDesign, { alignItems: 'flex-end' }]} onPress={() => { }}>
                            <Text style={[styles.registerbuttonText, {}]}>Forgot Password ?</Text>
                            {/* <Text style={[styles.registerbuttonText, { color: '#D8605B', fontFamily: 'Poppins_700Bold', fontSize: scale(15) }]}>Sign Up</Text> */}
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonDesign} onPress={registerButton}>
                        <Text style={styles.buttonText}>Sign In</Text>
                        {/* <Image source={require('../../../assets/images/right-arrow.png')} style={styles.image2} /> */}
                    </TouchableOpacity>
                    <View style={styles.registerButtonContainer}>
                        <Text style={styles.registerbuttonText}>Don’t have an account ? </Text>
                        <TouchableOpacity style={styles.registerbuttonDesign} onPress={() => navigation.navigate('RegisterScreen')}>
                            <Text style={[styles.registerbuttonText, { color: '#D8605B', fontFamily: 'Poppins_700Bold', fontSize: scale(15) }]}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#F4C27F',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    image: {
        width: scale(287),
        height: scale(215),
    },
    uppertextContainer: {
        alignItems: 'center'
    },
    uppertext: {
        fontFamily: 'Poppins_400Regular',
        fontSize: scale(20)
    },
    descriptionText: {
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
        fontSize: scale(13)
    },
    buttonContainer: {
        flexDirection: 'column',
        marginTop: scale(7),
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerButtonContainer: {
        marginTop: scale(7),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerbuttonDesign: {},
    registerbuttonText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: scale(13),
        alignSelf: 'center'
    },
    buttonDesign: {
        backgroundColor: '#D8605B',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: scale(280),
        elevation: 5
    },
    buttonText: {
        fontFamily: 'Poppins_700Bold',
        color: '#fff',
        marginTop: scale(3),
        fontSize: scale(17),

    },
    image2: {
        width: scale(20),
        height: scale(20),
        marginLeft: 5,
    },
    inputfields: {
        backgroundColor: '#fff',
        width: scale(301),
        height: scale(50),
        borderRadius: 23,
        fontFamily: 'Poppins_400Regular',
        marginVertical: scale(10),
        paddingHorizontal: scale(30),
        fontSize: scale(14),
        paddingTop: scale(5)
    }
});
