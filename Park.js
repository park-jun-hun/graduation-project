import React from "react";
import {View, Text, Button} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import styled from "styled-components/native";
import P1 from "./svg/park1";

let user_name='박정훈';
export default function ParkScreen({navigation}) {
    return (
       <Container>
           <TEXT>
               {user_name}님 환영합니다!
           </TEXT>
           <Text></Text>
           <TEXT>
               원하시는 항목을 선택해주세요.
           </TEXT>
           <Btn1>
       <P1/>
       </Btn1>
       <BTEXT>
           DDD
       </BTEXT>
       </Container>
    )
}
const Container = styled.View`
  flex:1;
  background : white;
`;
const TEXT = styled.Text`
    top:10%;
    left : 35%;
    font_size:18px;
`;
const BTEXT = styled.Text`
    position:absolute;
    top:60%;
    left : 10%;
    font_size:18px;
`;
const Btn1 = styled.View`
    position:absolute;
    top:40%;
    left : 10%;
`;
