import React from 'react';
import { View, FlatList, Text, Dimensions, TouchableOpacity, Image, Alert, RefreshControl, } from 'react-native';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const DataList = () => {

    const handleListItem = (item) => {
        Alert.alert('Helllllo', item.task)
    }

    const data = [
        { id: '1', task: 'Cook Rice and Chicken at 10 am', checked: false },
        { id: '2', task: 'Cook Rice and Chicken at 10 am', checked: true },
        { id: '3', task: 'Cook Rice and Chicken at 10 am', checked: false },
        { id: '4', task: 'Cook Rice and Chicken at 10 am', checked: true },
        { id: '5', task: 'Cook Rice and Chicken at 10 am', checked: true },
        { id: '6', task: 'Cook Rice and Chicken at 10 am', checked: true },
        { id: '7', task: 'Cook Rice and Chicken at 10 am', checked: true },
        { id: '8', task: 'Cook Rice and Chicken at 10 am', checked: true },
        { id: '9', task: 'Cook Rice and Chicken at 10 am', checked: true },
        { id: 'a', task: 'Cook Rice and Chicken at 10 am', checked: true },
        { id: 's', task: 'Cook Rice and Chicken at 10 am', checked: true },
        { id: 'd', task: 'Cook Rice and Chicken at 10 am', checked: true },
        { id: 'q', task: 'Cook Rice and Chicken at 10 am', checked: true },
    ];

    const renderItem = ({ item }) => (
        <View style={{
            padding: 5,
            paddingHorizontal: 15,
        }}>
            <TouchableOpacity
                onPress={() => handleListItem(item)}
                style={{ flexDirection: 'row', alignItems: 'center', }}>
                {/* {
                    item.checked ?
                        <Image source={require('../../../assets/images/checked.png')}
                            style={{ height: 23, width: 23, marginBottom: 4, marginRight: 9, }} />
                        :
                        <Image source={require('../../../assets/images/unchecked.png')}
                            style={{ height: 22, width: 22, marginBottom: 4, marginRight: 9, }} />
                } */}
                <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: 17, }}>
                    {item.task}
                </Text>
            </TouchableOpacity>
        </View>
    );

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <View style={{ paddingTop: 10, paddingBottom: 35, alignSelf: 'center', }}>

            <FlatList
                data={data}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={{
                    width: width * 0.87,
                }}
                collapsable={true}
            />
        </View>
    );
};

export default DataList;
