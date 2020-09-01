import React from "react";
import {StyleSheet,View, Text, Button, TouchableOpacityBase} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import * as DocumentPicker from 'expo-document-picker';

export default function LeeScreen({navigation}) {

    const _pickDocument = async () => {
	    const result = await DocumentPicker.getDocumentAsync({
            type:"audio/*",
            copyToCacheDirectory:false
        });
      console.log(result);
    }
    
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerText}>음악 가져오기</Text>
        </View>
        <View style={styles.content}></View>
        <View style={styles.footer}>
            <TouchableOpacity>
        <Button
            onPress={() => navigation.navigate('HomeScreen')}
            title="홈으로 돌아가기"
            color="#841584"
        />
        </TouchableOpacity>
        </View>
        <View style={styles.footer2}>
        <TouchableOpacity>
             <Button
            title="Select Document"
            onPress={_pickDocument}
            color="#841584"
        />      
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
        height: 60,
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    content: {
      flex: 1,
      margin:10,
    },
    footer: {
      height: 20,
      margin:10,
    }, 
    footer2: {
        height: 20,
        margin:10,
      },
  });