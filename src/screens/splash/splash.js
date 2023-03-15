import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { scale } from '../../utils/dimensions'

export default function Splash({ navigation }) {

    const handleButton = () => {
        console.log(navigation.navigate('RegisterScreen'))
    }

    return (
        <View style={styles.container}>
            <StatusBar style="dark" backgroundColor='#F4C27F' />
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <View >
                    <Image source={require('../../../assets/images/Done.png')} style={styles.image} />
                </View>
                <View>
                    <View style={styles.uppertextContainer}>
                        <Text style={[styles.uppertext, { marginBottom: scale(-10) }]}>Welcome to</Text>
                        <Text style={[styles.uppertext, { fontSize: scale(35) }]}>Plan2Do</Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText}>
                            With Plan2Do, easily manage your tasks, set reminders, and
                            track your progress. Say goodbye to overwhelming to-do lists
                            and hello to a more organized and productive life with Plan2Do!
                        </Text>
                    </View>

                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonDesign} onPress={handleButton}>
                    <Text style={styles.buttonText}>Get Started</Text>
                    <Image source={require('../../../assets/images/right-arrow.png')} style={styles.image2} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#F4C27F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: scale(351),
        height: scale(268),
    },
    uppertextContainer: {
        alignItems: 'center'
    },
    uppertext: {
        fontFamily: 'Poppins_400Regular',
        fontSize: scale(20)
    },
    descriptionContainer: {
        marginTop: scale(15),
        width: scale(300)
    },
    descriptionText: {
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
        fontSize: scale(13)
    },
    buttonContainer: {
        // flex: 1,
        flexDirection: 'column',
        // marginTop:30
        marginBottom: scale(20),

    },
    buttonDesign: {
        backgroundColor: '#D8605B',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: scale(301),
        elevation: 5
    },
    buttonText: {
        fontFamily: 'Poppins_700Bold',
        color: '#fff',
        marginTop: scale(3),
        fontSize: scale(17)
    },
    image2: {
        width: scale(20),
        height: scale(20),
        marginLeft: 5,
    },
});
