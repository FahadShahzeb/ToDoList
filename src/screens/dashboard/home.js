import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { scale } from '../../utils/dimensions';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import AnalogClock from 'react-native-clock-analog';
import { useEffect, useState } from 'react';
import DataList from './datalist';

const nowDate = () => {
    const d = new Date();
    let second = d.getSeconds();
    let minute = d.getMinutes();
    let hour = d.getHours();
    return { second, minute, hour };
};

const nowTimer = () => {
    const { second, minute, hour } = nowDate();
    const [state, setState] = useState({
        second,
        minute,
        hour,
    });

    useEffect(() => {
        setInterval(() => {
            const { second, minute, hour } = nowDate();
            setState({ second, minute, hour });
        }, 1000);
    }, [useState]);
    return state;
};

export default function DashBoard({ navigation }) {
    const { second, minute, hour } = nowTimer();

    const handleLogout = () => {
        // /*Alert for logging out*/

        //It should also reset the stack then
        navigation.navigate('LoginScreen')

    }

    const timeGreetings = () => {
        // const date = new Date().getHours; // get the current date and time in Pakistan time zone
        const hour = new Date().getHours(); // get the hour from the date object

        if (hour >= 4 && hour < 11) {
            return "Good Morning";
        } else if (hour >= 11 && hour < 13) {
            return "Good Noon";
        } else if (hour >= 13 && hour < 15) {
            return "Good After Noon";
        } else if (hour >= 15 && hour < 24) {
            return "Good Evening";
        } else {
            return "Good Evening";
        }
    }


    const data = {
        name: "Fahad Shahzeb",
        email: 'Fahadshahzeb1@gmail.com',
        picture: "https://i.ibb.co/yy6TPCH/profile.jpg",
        todos: [{}]
    }
    return (
        <View style={styles.container}>
            <View style={styles.upperHalf}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: data.picture }} />
                </View>
                <View>
                    <Text style={styles.nameText}>{data.name}</Text>
                    <Text style={styles.emailText}>{data.email}</Text>
                </View>
                <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.middleHalf}>
                <View style={styles.clockContainer}>
                    <AnalogClock
                        colorClock="#fff"
                        colorNumber="#D8605B"
                        colorCenter="#00BCD4"
                        colorHour="#FF0000"
                        colorMinutes="#C1C0C0"
                        colorSeconds="#F1C27D"
                        autostart={true}
                        showSeconds
                    // key={3789}
                    />
                </View>
                <View style={{ marginTop: 25 }}>
                    <Text style={styles.greetingsText}>{timeGreetings()}</Text>
                </View>
            </View> */}
            <View style={styles.lowerHalf}>
                <View style={{ marginVertical: 20 }}>
                    <Text style={styles.greetingsText}>{timeGreetings()}</Text>
                </View>
                <View style={styles.todolist}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ paddingLeft: 0, }}>
                            <Text style={styles.headerText}>Tasks List</Text>
                        </View>
                        <TouchableOpacity style={styles.taskSettings}>
                            <Image source={require('../../../assets/images/plus.png')} style={styles.image2} />
                        </TouchableOpacity>
                    </View>
                    <DataList />
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginTop: scale(25),
    },
    upperHalf: {
        flex: 1,
        backgroundColor: 'rgba(244, 194, 127, 1)',
        // width: scale(width),
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        borderRadius: 100,
        borderWidth: 5,
        padding: 7,
        borderColor: '#D8605B'
    },
    image: {
        height: scale(130),
        width: scale(130),
        borderRadius: 100,
    },
    nameText: {
        fontFamily: 'Poppins_500Medium',
        textAlign: 'center',
        fontSize: scale(25),

    },
    emailText: {
        fontFamily: 'Poppins_500Medium',
        textAlign: 'center',
        fontSize: scale(12),
        marginTop: -10,
        color: 'rgba(52, 52, 52, 0.8)'
    },
    logoutButton: {
        marginTop: 15,
        backgroundColor: '#D8605B',
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 30,
        elevation: 10
    },
    logoutText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: scale(15),
        color: '#fff',
        marginTop: scale(3)
    },
    middleHalf: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    clockContainer: {
        // backgroundColor: 'red',

        elevation: 25,
        shadowColor: 'rgba(230, 174, 81, 1)',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        borderRadius: 100,
    },
    greetingsText: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: scale(15),
        textAlign: 'center'
    },
    lowerHalf: {
        flex: 1.5,
        backgroundColor: '#fff',
    },
    headerText: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: scale(20)
    },
    todolist: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        elevation: 5,
        borderRadius: 15,
        width: width * 0.85,
        maxHeight: height * 0.5,
        alignSelf: 'center',
        paddingVertical: 10,
        // shadowColor: 'rgba(244, 194, 127, 1)',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.35, // decreased shadow opacity
        // shadowRadius: 10,
    },
    taskSettings: {
        alignItems: 'center',
    },
    image2: {
        height: 40,
        width: 40
    }
});
