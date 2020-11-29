import {StyleSheet, View, SafeAreaView, Text,Image,Easing, Button} from "react-native";
import React, { Component } from 'react';
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as firebase from 'firebase';
import "firebase/database";
import {
  Dimensions
} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;



export default function CheckScreen({navigation}) {
  

//    firebase.initializeApp(firebaseConfig);

      //덮어쓰기
      const usersRef=firebase.database().ref('Score/').set({
        Score1:20,
        Score2:30,
        Score3:40,
        });
        
    
        //console.log(usersRef.key);
       /*  let message;
        //읽어오기
        const m = firebase.database().ref('Score').on('value',function(snapshot){
         message =snapshot.val();
         console.log(message);
        });   */


      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
          <Image 
              style={{width:150,height:110, marginTop :15}}
              resizeMode="contain"
              source ={require('./icon/wave.png')}></Image>
            <Text style={styles.headerText}>Voice Graph</Text>
            <Text style={styles.headerminiText}>Graph comparing input files with your own voice</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.Qscore}>Your score is...</Text>
          <Text style={styles.score}>{message}</Text>
          </View>
      
          <View style={styles.footer}>
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
    height: 100,
    alignItems : 'center',
    marginTop : 100,
  },
  content: {
    flex: 1,
    marginTop:150,

    alignItems:'center',
  },
  footer: {
    height: 50,
    
  },
  headerText:{
  fontSize:35,
  fontWeight : 'bold',
  alignItems : 'center',
  marginTop : 10,
  },
  headerminiText:{
    fontSize:17,
    fontWeight : 'bold',
    alignItems : 'center',
    marginTop : 10,
    color:'gray',
      },
      score: {
        fontSize:45,
       marginTop:10,
      },
      Qscore: {
        fontSize:25,
       marginTop:25,
      },
});