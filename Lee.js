import React from "react";
import {View, Text, Button} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import axios from 'axios';

export default function InformationScreen({navigation}) {
    axios.get('https://rkn8infci8.execute-api.us-east-1.amazonaws.com/dev/users/64')
    .then(function (response) {
    const temp= response.data.nickname;
        alert(temp);
    
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

    return (
        <SafeAreaView style={{flex: 1}}>
            <View>
                <Text>
                    
                </Text>
                <Button
                    onPress={() => navigation.navigate('HomeScreen')}
                    title="back to home"
                />
                
            </View>
        </SafeAreaView>
    )
}
