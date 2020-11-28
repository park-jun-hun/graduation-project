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
      alert('You choose ' + result.name+ " File");
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
             onPress={_pickDocument}
            title="Select Document"
            color="#841584"
        />
        </TouchableOpacity>
        </View>
        <View style={styles.footer2}>
        <TouchableOpacity>
             <Button
            title="Back to home"
            onPress={() => navigation.navigate('HomeScreen')}
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
        borderBottomWidth:1,
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
      height: 30,
      margin:10,
    }, 
    footer2: {
        height: 30,
        margin:10,
      },
  });