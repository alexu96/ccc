import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const Home = ({ navigation }) => {
    const [userId, setUserId] = useState('');
    const handleSubmit = async () =>{
        const res = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${userId}?api_key=J2Pxtvpyc8C9ihFAvKhIzEnBmsVCAykzASqNvvh5`)
        if (res?.data){
            navigation.navigate('Details')
        }
        else{
            console.log("Something is wrong")
        }  

    }

    const handleRandom = async () => {
        const arr = ['2001865', '2001580', '2001221', '2001036', '2000887'];
        const val = arr[Math.floor(Math.random() * arr.length)]

        const random = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${val}?api_key=J2Pxtvpyc8C9ihFAvKhIzEnBmsVCAykzASqNvvh5`)

        if (random?.data){
            navigation.navigate('Details',{data :random?.data})
        }

    }

    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Enter asteroid id"
                    keyboardType="default"
                    value={userId}
                    onChangeText={setUserId}
                />
               <TouchableOpacity
               style={{...styles.Btn,

                backgroundColor: userId ? '#8080f0' : '#e2e2e2'
            
            }}
               onPress={handleSubmit}
               disabled={userId? false : true}
               >
                <Text style={styles.btnTxt}>Submit</Text>
                
               </TouchableOpacity>

               <TouchableOpacity 
               
               onPress={handleRandom}
               style={styles.Btn}
               
               
               >
                <Text>Random</Text>
               </TouchableOpacity>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    Btn: {
        alignSelf: 'center',
        backgroundColor: '#8080f0',
        alignItems: 'center',
        marginHorizontal: '3%',
        marginTop: '10%',
        width: '85%',
        padding: 12,
        borderRadius: 8
    },
    btnTxt: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
});
export default Home;