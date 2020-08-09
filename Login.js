import React from "react";
import {View, Text, Button, Image, StyleSheet,TouchableOpacity, ImageBackground} from "react-native";
import styled from "styled-components/native";
import {SafeAreaView} from "react-native-safe-area-context";

import LoginText from "./svg/LoginText"; 
import Center from "./svg/center";
import Btn1 from "./svg/btn1";
import Btn2 from "./svg/btn2";

export default function LoginScreen({navigation}) {
    
    return (
       
     <Container>
         <ImageBackground style={{width: '100%', height: '75%'}} 
         source={require('./pic/main2.png')}/>
     
         <Textstyle>
            <LoginText/>
         </Textstyle>
         <Icon>
             <Center/>
         </Icon>

         <Btn1style>
         <Btn1  onPress={() => navigation.navigate('IntroScreen')}/>
         </Btn1style>

         <Btn2style>
         <Btn2  onPress={() => navigation.navigate('HomeScreen')}/>
         </Btn2style>
     
     

    
        </Container>
    )
}

const Container = styled.View`
  flex:1;
  background-color:white;
  align-items:center;
`;


const Textstyle= styled.View`
    align-items:center;
    bottom:38%;
   
`;
const Icon = styled.View`
    position: absolute;
    align-items:center;
    top : 50%;
    
`;
const Btn1style = styled.View`
    bottom:15%;
 
 `;
const Btn2style = styled.View`
    bottom:10%;
`;

