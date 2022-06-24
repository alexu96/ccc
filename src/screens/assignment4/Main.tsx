import React, { useState, useEffect } from "react";
import { View, FlatList, Text ,TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import useInterval from "./Intervaltime";
import NextPage from "./NextPage";

const Main = () => {
    const [posts, setPost] = useState([])
    const [newcount, setCount] = useState(45)

    const navigation = useNavigation();

    useEffect(() => {
        getPosts();

    }, [])
   useInterval(()=>{
    setCount((item) => item+1)
    getPosts()
   },5000)

    const getPosts = async () => {
        try {   
            const response = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${newcount}`);
            let arr = [...posts]
            response.data.hits.forEach((item) => {

                arr.push(item)
                console.log("The req item is ", item)

            })

            setPost(arr)
            console.log(arr)
        } catch {
            console.log("some error")
        }

    }


    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={()=>navigation.navigate("NextPage",{data:item})}>
                    <Text style={{borderWidth:1}}>{item?.title}</Text></TouchableOpacity>
                )}

                keyExtractor={(item, index) => {
                    return index.toString();
                }}
                onEndReached={() => {
                    setCount((item) => item + 1)
                    getPosts()
                }}
            />
        </View>
    )



}

export default Main;