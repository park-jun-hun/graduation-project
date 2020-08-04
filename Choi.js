import React from "react";
import {View, Text, Button} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Image from"./svgs/image";
import React, {useState} from "react";
import {Text, StyleSheet} from "react-native";

const TextInANest = ()=>{
    const titleText = useState("Bird's Nest");
    const bodyText = useState("This is not a bord nest.");

    return(
        <Text style={StyleSheet.baseText}>
            <Text style = {StyleSheet.innerText}> and red</Text>
        </Text>
    );
};

const styles = StyleSheet.create({
    baseText:{
        fontWeight:'italic'
    },
    innerText:{
        color:'red'
    }
});

/*export default function ChoiScreen({navigation}) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View>
                
                <Button
                    onPress={() => navigation.navigate('HomeScreen')}
                    title="돌아가기"
                />
                <Image/>
            </View>
        </SafeAreaView>
    )
}*/
export default BoldAndBeautiful;
