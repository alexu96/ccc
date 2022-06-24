import React from "react";
import { useRoute } from "@react-navigation/native";
import { View,Text } from "react-native";

const NextPage = () => {
   const route=useRoute();
   const data=route.params;
   return (
    <View>
        <Text>{JSON.stringify(data)}</Text>
    </View>
   )
}


export default NextPage;