import {Text, View, Easing, Button} from "react-native";
import React from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
  Dimensions
} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;



export default function HomeScreen({navigation}) {
    return (
        <Container>
        
            <Part1></Part1>
            <Part2>
            <Text onPress={() => navigation.navigate('ChoiScreen')}>최dgdgdgdg두혁</Text>
            </Part2>
            <Part3>
            <Text onPress={() => navigation.navigate('ParkScreen')}>박정훈</Text>
            </Part3>
            <Part4>
            <Text onPress={() => navigation.navigate('LeeScreen')}>이소영</Text>
            </Part4>
     
                 
        </Container>
    );
}

const Container = styled.View`
  flex:1;
`;
const Part1 = styled.View`
  flex:0.25
`;
const Part2 = styled.View`
  flex:0.25
`;
const Part3 = styled.View`
  flex:0.25
`;
const Part4 = styled.View`
  flex:0.25
`;