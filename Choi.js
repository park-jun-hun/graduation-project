import React from "react";
import {View, Text, Button} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";


export default function ChoiScreen({navigation}) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View>
                <Button
                    onPress={() => navigation.navigate('HomeScreen')}
                    title="back to home"
                />
            </View>
        </SafeAreaView>
    )
}
