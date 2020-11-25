import React from "react";
import {StyleSheet,View, Text, Button, TouchableOpacityBase} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import * as DocumentPicker from 'expo-document-picker';
import * as firebase from 'firebase';
import "firebase/database";
//import { database } from "react-native-firebase";

export default function LeeScreen({navigation}) {

  const firebaseConfig={
  apiKey: "AIzaSyDLMuHBhU91JCg3-JT48cX5RQM1Oasov_Q",
  authDomain: "graduation-4651e.firebaseapp.com",
  databaseURL: "https://graduation-4651e.firebaseio.com",
  projectId: "graduation-4651e",
  storageBucket: "graduation-4651e.appspot.com",
  messagingSenderId: "449238174270",
  appId: "1:449238174270:web:3f2168bb35db1e8c025f6f",
  measurementId: "G-17QJW69D5K"
};

firebase.initializeApp(firebaseConfig);

//덮어쓰기
const usersRef=firebase.database().ref('Score/').set({
Score1:20,
Score2:30,
Score3:40,
});

//console.log(usersRef.key);

//읽어오기
const m = firebase.database().ref('Score/Score3').once('value',function(snapshot){
 var message =snapshot.val();
 console.log(message);
});


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