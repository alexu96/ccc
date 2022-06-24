import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


const Details = ({navigation,route}) =>{
    const item = route?.params?.data;
    return(
<View style={styles.container}>
<Text style={styles.header}>Asteroid Details</Text>
<Text style={styles.value}>{item?.name}</Text>
</View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 15,
        marginTop: '5%'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 10
    },
    label: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        width: '30%'
    },
    value: {
        color: '#000',
        fontSize: 16,
        width: '68%'
    }
});

export default Details;