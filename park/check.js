import {StyleSheet, View, SafeAreaView, Text,Image,Easing, Button} from "react-native";
import React, { Component } from 'react';
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  Dimensions
} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;



export default function CheckScreen({navigation}) {
  


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
       
          <Image 
            style={styles.graph}
            resizeMode="contain"
            source ={require('./image/sample.jpg')}></Image>
          </View>
      
          <View style={styles.footer}>
          <Button
            title="Back"
            onPress={() => navigation.navigate('ParkScreen')}
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
    marginTop:100,

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
      graph: {
        width:400,
        height:250,
        marginTop:40,
      },
});