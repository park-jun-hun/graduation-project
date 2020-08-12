import React from "react";
import {View, Text, Button} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";


export default function InformationScreen({navigation}) {
    

    return (
        <SafeAreaView style={{flex: 1}}>
            <View>
                <Text>
                    hello world 
                </Text>
                <Button
                    onPress={() => navigation.navigate('HomeScreen')}
                    title="돌아가기"
                />
                
            </View>
        </SafeAreaView>
    )
}  