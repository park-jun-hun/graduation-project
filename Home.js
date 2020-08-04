import {Text, View, Easing, Button} from "react-native";
import React from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from "./svgs/icon";
import {
  Dimensions
} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;



export default function HomeScreen({navigation}) {
    return (
        <Container>
        <Main>
          <Icon_style>
          <Icon/>
          </Icon_style>
        </Main>

                    <Part1>
            <Text onPress={() => navigation.navigate('LeeScreen')}>이소영</Text>
             </Part1>
            <Part2>
            <Text onPress={() => navigation.navigate('ChoiScreen')}>최두혁</Text>
            </Part2>
            <Part3>
            <Text onPress={() => navigation.navigate('ParkScreen')}>박정훈</Text>
            </Part3>
             
        </Container>
    );
}

const Container = styled.View`
  flex:1;
  background-color:white;
`;
const Main =styled.View`
  flex:0.4;
`;
const Icon_style = styled.View`
  align-items:center;
  height:40px;
  width:40px;
`;
const Part1 = styled.View`
flex:0.2;
background : red;
`;
const Part2 = styled.View`
  flex:0.2;
  background-color:blue;
`;
const Part3 = styled.View`
  flex:0.2;
  background-color:green;
`;
