import {StyleSheet, View, SafeAreaView, Text,Image,Easing, Button} from "react-native";
import React, { Component } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import * as firebase from 'firebase';
import "firebase/database";



export default function ScoreScreen({navigation}) {

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

  let name;
  const _pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({
          type:"audio/*",
          copyToCacheDirectory:false
      });
    //console.log(result.name);
    //alert('You choose ' + result.name+ " File");
    name=result.name;
    console.log(name);

    const usersRef=firebase.database().ref('InputFile/').set({
      0:name,
        });
        const Ref=firebase.database().ref('VoiceFile/').set({
          0:name,
            });
          
        
  }
  
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
          <Image 
              style={{width:130,height:80, marginTop :15}}
              resizeMode="contain"
              source ={require('./pic/disc.png')}></Image>
            <Text style={styles.headerText}>Select Music</Text>
          </View>
          <View style={styles.content}>
    
        
          </View>
      
          <View style={styles.footer}>
           
        <Button
             onPress={_pickDocument}
            title="Select Document"
            color="#841584"
        />
     
        </View>
        <View style={styles.footer2}>
      
             <Button
            title="Back to home"
            onPress={() => navigation.navigate('HomeScreen')}
            color="#841584"
        />      
        
        </View>

        </SafeAreaView>
      );
    }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 150,
    alignItems : 'center',
    marginTop : 30,
    borderBottomWidth:1,
  },
  content: {
    flex: 1,
    marginTop:150,

    alignItems:'center',
  },
  footer: {
    height: 30,
     margin:10,
  },
  footer2: {
    height: 20,
    margin:10,
    marginBottom : 20,
  },

  headerText:{
  fontSize:35,
  fontWeight : 'bold',
  alignItems : 'center',
  marginTop : 5,
  },
 
    
});